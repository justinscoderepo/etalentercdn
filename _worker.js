export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle PDF generation requests
    if (url.pathname === '/generate-pdf') {
      try {
        // Get parameters from query string or POST body
        let params = {};
        
        if (request.method === 'POST') {
          // Handle POST request with JSON body
          try {
            params = await request.json();
          } catch {
            // If JSON parsing fails, try form data
            const formData = await request.formData();
            for (const [key, value] of formData.entries()) {
              params[key] = value;
            }
          }
        } else {
          // Handle GET request with query parameters
          for (const [key, value] of url.searchParams.entries()) {
            params[key] = value;
          }
        }
        
        // Extract parameters with default values
        const {
          url: targetUrl = 'https://example.com',
          format = 'A4',
          orientation = 'portrait',
          scale = 1,
          printBackground = 'true',
          margin_top = '1cm',
          margin_right = '1cm',
          margin_bottom = '1cm',
          margin_left = '1cm',
          filename = 'document.pdf',
          waitUntil = 'networkidle0',
          width = null,
          height = null,
          selector = null, // CSS selector to capture specific element
          fullPage = 'true',
          omitBackground = 'false',
          quality = 100, // For JPEG format
          type = 'pdf' // pdf, png, jpeg
        } = params;
        
        const browser = await env.pdfgenerator.launch();
        const page = await browser.newPage();
        
        // Set viewport if width and height are provided
        if (width && height) {
          await page.setViewport({
            width: parseInt(width),
            height: parseInt(height)
          });
        }
        
        // Navigate to the target URL
        await page.goto(targetUrl, { 
          waitUntil: waitUntil,
          timeout: 30000 
        });
        
        let result;
        let contentType;
        let fileExtension;
        
        if (type === 'pdf') {
          // Generate PDF
          const pdfOptions = {
            format: format,
            landscape: orientation === 'landscape',
            scale: parseFloat(scale),
            printBackground: printBackground === 'true',
            margin: {
              top: margin_top,
              right: margin_right,
              bottom: margin_bottom,
              left: margin_left
            }
          };
          
          // Add width/height if provided (overrides format)
          if (width && height) {
            pdfOptions.width = width;
            pdfOptions.height = height;
            delete pdfOptions.format;
          }
          
          result = await page.pdf(pdfOptions);
          contentType = 'application/pdf';
          fileExtension = 'pdf';
        } else {
          // Generate screenshot (PNG or JPEG)
          const screenshotOptions = {
            fullPage: fullPage === 'true',
            omitBackground: omitBackground === 'true',
            type: type
          };
          
          if (type === 'jpeg') {
            screenshotOptions.quality = parseInt(quality);
          }
          
          if (width && height) {
            screenshotOptions.clip = {
              x: 0,
              y: 0,
              width: parseInt(width),
              height: parseInt(height)
            };
          }
          
          // If selector is provided, screenshot only that element
          if (selector) {
            const element = await page.$(selector);
            if (element) {
              result = await element.screenshot(screenshotOptions);
            } else {
              throw new Error(`Element with selector "${selector}" not found`);
            }
          } else {
            result = await page.screenshot(screenshotOptions);
          }
          
          contentType = type === 'png' ? 'image/png' : 'image/jpeg';
          fileExtension = type;
        }
        
        await browser.close();
        
        return new Response(result, {
          headers: {
            'Content-Type': contentType,
            'Content-Disposition': `attachment; filename="${filename.replace('.pdf', '')}.${fileExtension}"`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
        
      } catch (error) {
        return new Response(JSON.stringify({
          error: `Error generating document: ${error.message}`,
          timestamp: new Date().toISOString()
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
    
    // Handle OPTIONS requests for CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    
    // Serve static assets for all other requests
    return env.ASSETS.fetch(request);
  }
};