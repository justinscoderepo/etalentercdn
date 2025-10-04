import puppeteer from "@cloudflare/puppeteer";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle screenshot requests (following Cloudflare guide)
    if (url.pathname === '/screenshot') {
      const targetUrl = url.searchParams.get("url");
      
      if (!targetUrl) {
        return new Response("Please add an ?url=https://example.com/ parameter", {
          status: 400,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      try {
        const normalizedUrl = new URL(targetUrl).toString();
        
        // Check KV cache first
        let img = null;
        if (env.BROWSER_KV_DEMO) {
          img = await env.BROWSER_KV_DEMO.get(normalizedUrl, { type: "arrayBuffer" });
        }
        
        if (img === null) {
          // Generate new screenshot
          const browser = await puppeteer.launch(env.MYBROWSER);
          const page = await browser.newPage();
          await page.goto(normalizedUrl);
          img = await page.screenshot();
          
          // Cache the screenshot for 24 hours
          if (env.BROWSER_KV_DEMO) {
            await env.BROWSER_KV_DEMO.put(normalizedUrl, img, {
              expirationTtl: 60 * 60 * 24,
            });
          }
          
          await browser.close();
        }
        
        return new Response(img, {
          headers: {
            "content-type": "image/jpeg",
            'Access-Control-Allow-Origin': '*'
          },
        });
        
      } catch (error) {
        return new Response(`Error taking screenshot: ${error.message}`, {
          status: 500,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
    
    // Handle PDF generation requests (enhanced version)
    if (url.pathname === '/generate-pdf') {
      try {
        // Get parameters from query string or POST body
        let params = {};
        
        if (request.method === 'POST') {
          try {
            params = await request.json();
          } catch {
            const formData = await request.formData();
            for (const [key, value] of formData.entries()) {
              params[key] = value;
            }
          }
        } else {
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
          selector = null,
          fullPage = 'true',
          omitBackground = 'false',
          quality = 100,
          type = 'pdf'
        } = params;
        
        // Check cache for PDFs too
        const cacheKey = `pdf_${JSON.stringify(params)}`;
        let result = null;
        
        if (env.BROWSER_KV_DEMO && type === 'pdf') {
          result = await env.BROWSER_KV_DEMO.get(cacheKey, { type: "arrayBuffer" });
        }
        
        if (result === null) {
          const browser = await puppeteer.launch(env.MYBROWSER);
          const page = await browser.newPage();
          
          if (width && height) {
            await page.setViewport({
              width: parseInt(width),
              height: parseInt(height)
            });
          }
          
          await page.goto(targetUrl, { 
            waitUntil: waitUntil,
            timeout: 30000 
          });
          
          let contentType;
          let fileExtension;
          
          if (type === 'pdf') {
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
            
            if (width && height) {
              pdfOptions.width = width;
              pdfOptions.height = height;
              delete pdfOptions.format;
            }
            
            result = await page.pdf(pdfOptions);
            contentType = 'application/pdf';
            fileExtension = 'pdf';
            
            // Cache PDF for 1 hour
            if (env.BROWSER_KV_DEMO) {
              await env.BROWSER_KV_DEMO.put(cacheKey, result, {
                expirationTtl: 60 * 60,
              });
            }
            
          } else {
            const screenshotOptions = {
              fullPage: fullPage === 'true',
              omitBackground: omitBackground === 'true',
              type: type
            };
            
            if (type === 'jpeg') {
              screenshotOptions.quality = parseInt(quality);
            }
            
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
        } else {
          // Using cached result
          contentType = 'application/pdf';
          fileExtension = 'pdf';
        }
        
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
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response('Asset serving not available', { status: 404 });
  }
};