if ("serviceWorker" in navigator) {
    // Register the service worker with a version query string to ensure the latest version is fetched
    navigator.serviceWorker
        .register("/service-worker.js?" + window.cacheName, { scope: "/" })
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);

            // Optional: Unregister the service worker for testing purposes (remove in production)
            // registration.unregister().then((boolean) => {
            //     console.log("Service worker unregistered:", boolean);
            // });
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });

    // Handle beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault(); // Prevent the default install prompt
        const installPromptEvent = event; // Store the event for later use

        if (!localStorage.getItem("appDisabled")) {

            // // Custom alert or prompt to ask users if they want to install
            // let localStorageuser = localStorage.getItem("user");
            // if (localStorageuser && JSON.parse(localStorageuser)?.user?.Role == "5") {
            //     alert("Do you want to install etalenter app to access directly from the system?", function () {
            //         // Store the event for later use
            //         installPromptEvent.prompt();
            //     },
            //         function () {
            //             localStorage.setItem("appDisabled", true);
            //         },
            //         "confirm",
            //         "c");
            // }

        }
    });
    // Handle appinstalled event (when the app is installed)
    window.addEventListener('appinstalled', () => {
        console.log("App successfully installed!");
    });
}







