import puppeteer from "@cloudflare/puppeteer";

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
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