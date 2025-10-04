if ("serviceWorker" in navigator) {
    console.log("PWA: Service Worker supported, starting registration...");

    // Register the service worker with a version query string to ensure the latest version is fetched
    navigator.serviceWorker
        .register("/service-worker.js?" + window.cacheName, { scope: "/" })
        .then((registration) => {
            console.log("PWA: Service Worker registered with scope:", registration.scope);

            // Optional: Unregister the service worker for testing purposes (remove in production)
            // registration.unregister().then((boolean) => {
            //     console.log("Service worker unregistered:", boolean);
            // });
        })
        .catch((error) => {
            console.error("PWA: Service Worker registration failed:", error);
        });

    let deferredPrompt;
    let installButton = null;

    // Check manifest loading
    fetch('/manifest.json')
        .then(response => response.json())
        .then(manifest => {
            console.log("PWA: Manifest loaded successfully:", manifest);
            console.log("PWA: Icons in manifest:", manifest.icons);
        })
        .catch(error => {
            console.error("PWA: Failed to load manifest:", error);
        });

    // Handle beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
        console.log("PWA: beforeinstallprompt event fired");
        event.preventDefault(); // Prevent the default install prompt
        deferredPrompt = event; // Store the event for later use

        // Show the install button
        installButton = document.getElementById('installAppButton');
        if (installButton) {
            console.log("PWA: Install button found, showing it");
            installButton.style.display = 'block';
        } else {
            console.log("PWA: Install button not found in DOM");
        }
    });

    // Install app function
    window.installApp = function () {
        console.log("PWA: Install button clicked");
        if (deferredPrompt) {
            console.log("PWA: Showing install prompt");
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                console.log("PWA: User choice:", choiceResult.outcome);
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA: User accepted the install prompt');
                } else {
                    console.log('PWA: User dismissed the install prompt');
                }
                deferredPrompt = null;
                if (installButton) {
                    installButton.style.display = 'none';
                }
            });
        } else {
            console.log("PWA: No deferred prompt available");
        }
    };

    // Handle appinstalled event (when the app is installed)
    window.addEventListener('appinstalled', () => {
        console.log("App successfully installed!");
        if (installButton) {
            installButton.style.display = 'none';
        }
        deferredPrompt = null;
    });
}







