export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle PDF generation requests
    if (url.pathname === '/generate-pdf') {
      try {
        const browser = await env.pdfgenerator.launch();
        const page = await browser.newPage();
        
        // Get the URL to convert to PDF from query params
        const targetUrl = url.searchParams.get('url') || 'https://example.com';
        
        await page.goto(targetUrl, { waitUntil: 'networkidle0' });
        
        const pdf = await page.pdf({
          format: 'A4',
          printBackground: true,
          margin: {
            top: '1cm',
            right: '1cm',
            bottom: '1cm',
            left: '1cm'
          }
        });
        
        await browser.close();
        
        return new Response(pdf, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="document.pdf"'
          }
        });
      } catch (error) {
        return new Response(`Error generating PDF: ${error.message}`, {
          status: 500
        });
      }
    }
    
    // Serve static assets for all other requests
    return env.ASSETS.fetch(request);
  }
};