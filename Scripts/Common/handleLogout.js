// Handle logout with cache and session storage clearing
function handleLogout(event, logoffUrl) {
    event.preventDefault();

    // Clear session storage
    try {
        sessionStorage.clear();
    } catch (e) {
        console.error('Error clearing sessionStorage:', e);
    }

    // Clear local storage cache
    try {
        localStorage.clear();
    } catch (e) {
        console.error('Error clearing localStorage:', e);
    }

    // Clear service worker cache if available
    if ('caches' in window) {
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        }).then(function () {
            console.log('All caches cleared');
        }).catch(function (err) {
            console.error('Error clearing caches:', err);
        });
    }

    // Redirect to logout URL after a brief delay to ensure cleanup
    setTimeout(function () {
        window.location.href = logoffUrl;
    }, 100);
}
