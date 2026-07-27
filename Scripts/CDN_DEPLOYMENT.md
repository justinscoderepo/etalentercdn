# CDN Deployment Guide for screenshotHelper.js

## Overview
The `screenshotHelper.js` file is the universal SignalR Activity Tracking module used by both MVC and React applications.

## Deployment Locations

### Development (Localhost)
- **URL**: `http://localhost:9999/Scripts/screenshotHelper.js`
- **Usage**: Automatic when running on localhost
- **Server**: Run MVC app on port 9999 for development

### Production (CDN)
- **URL**: `https://justinscoderepo.github.io/etalentercdn/screenshotHelper.js`
- **Usage**: Automatic in production environment
- **Repository**: GitHub Pages (justinscoderepo/etalentercdn)

## How It Works

### MVC Application
- Script loaded directly via `@Html.Js("Scripts/screenshotHelper")`
- Available as `window.SignalRActivityTracker`
- Used by `signalRActivityTracking.js`

### React Application
- Dynamically loaded from URL in `signalrService.js`
- Detects environment (localhost vs production)
- Falls back to inline implementation if load fails
- Uses `loadExternalScript()` function

## Deploying to CDN

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Clone/create the CDN repository
git clone https://github.com/justinscoderepo/etalentercdn.git
cd etalentercdn

# 2. Copy the file
cp ../etalenterWeb/Web/wwwroot/Scripts/screenshotHelper.js ./screenshotHelper.js

# 3. Commit and push
git add screenshotHelper.js
git commit -m "Update screenshotHelper.js"
git push origin main

# 4. Enable GitHub Pages in repository settings (if not already)
# Settings > Pages > Source: main branch
```

### Option 2: Azure CDN
```bash
# Upload to Azure Blob Storage
az storage blob upload \
  --account-name etalentercdn \
  --container-name scripts \
  --name screenshotHelper.js \
  --file screenshotHelper.js \
  --content-type "application/javascript"
```

### Option 3: CloudFlare/Other CDN
Upload `screenshotHelper.js` to your CDN provider and update the URL in `signalrService.js`.

## Testing

### Test Localhost
```bash
# Terminal 1: Run MVC app on port 9999
cd etalenterWeb
dotnet run --urls="http://localhost:9999"

# Terminal 2: Run React app
cd etalenter-ironic
yarn start

# Check console for: "Loading tracker from: http://localhost:9999/Scripts/screenshotHelper.js"
```

### Test Production
1. Deploy `screenshotHelper.js` to CDN
2. Build React app for production: `yarn build:v2:prod`
3. Check browser console for CDN URL load

## Environment Detection
The React app automatically detects the environment:
```javascript
function getTrackerScriptUrl() {
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
  
  if (isLocalhost) {
    return 'http://localhost:9999/Scripts/screenshotHelper.js';
  } else {
    return 'https://justinscoderepo.github.io/etalentercdn/screenshotHelper.js';
  }
}
```

## Fallback Behavior
If the CDN/localhost script fails to load:
- React app uses inline screenshot implementation
- Same functionality, just not shared with MVC
- Console warning: "⚠️ Using fallback screenshot implementation"

## Version Control
- **Source**: `etalenterWeb/Web/wwwroot/Scripts/screenshotHelper.js`
- **CDN**: Manually deployed after changes
- **Versioning**: Consider adding version query string for cache busting
  - Example: `screenshotHelper.js?v=1.0.0`

## Troubleshooting

### CORS Errors
Ensure CDN headers allow cross-origin requests:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
```

### Script Not Loading
1. Check browser console for errors
2. Verify CDN URL is accessible
3. Check network tab for 404/CORS errors
4. Verify GitHub Pages is enabled (if using GH Pages)

### Outdated Script
1. Clear browser cache
2. Check CDN cache expiration
3. Add cache-busting query string
4. Hard refresh (Ctrl+Shift+R)

## Benefits
✅ Single source of truth for tracking logic  
✅ Consistent behavior across MVC and React  
✅ Easy updates - deploy once, used everywhere  
✅ Fallback ensures reliability  
✅ No bundling needed in React app  
