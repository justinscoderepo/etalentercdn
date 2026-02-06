/**
 * SignalR Activity Tracking for MVC Views
 * Single Source of Truth: Uses window.SignalRService from React build
 * Loaded via ViteHelper manifest system - no duplication
 */

(function () {
    'use strict';

    // Get user data from localStorage
    function getUserData() {
        try {
            const userJson = localStorage.getItem('user');
            if (!userJson) return null;
            const userData = JSON.parse(userJson);
            return {
                user: userData.user,
                token: userData.token
            };
        } catch (e) {
            console.error('Failed to parse user data:', e);
            return null;
        }
    }

    // Wait for SignalRService to be loaded (from React build)
    function waitForSignalRService(callback, maxAttempts = 50) {
        let attempts = 0;
        const checkInterval = setInterval(() => {
            attempts++;
            if (window.SignalRService) {
                clearInterval(checkInterval);
                callback();
            } else if (attempts >= maxAttempts) {
                clearInterval(checkInterval);
                console.error('❌ SignalRService not loaded after ' + maxAttempts + ' attempts');
            }
        }, 100);
    }

    // Initialize tracking using SignalRService
    function initializeTracking() {
        const userData = getUserData();
        if (!userData || !userData.user || !userData.token) {
            console.log('ℹ️ No user data found, skipping SignalR tracking');
            return;
        }

        waitForSignalRService(function() {
            console.log('✅ Using SignalRService from React build (single source of truth)');
            
            // Verify html-to-image library is available
            if (window.htmlToImage) {
                console.log('✅ html-to-image library loaded (screenshot capture enabled)');
            } else {
                console.warn('⚠️ html-to-image library not found (screenshot capture disabled)');
            }
            
            // Connect using the shared SignalR service
            window.SignalRService.connect(userData.user, userData.token);

            // Track initial page view after connection
            setTimeout(() => {
                if (window.SignalRService.isConnected) {
                    const pageName = document.title || window.location.pathname;
                    window.SignalRService.trackPageView(userData.user.UId, pageName, false);
                }
            }, 2000);

            // Track page views on navigation (for SPAs or AJAX navigation)
            let lastUrl = window.location.href;
            setInterval(() => {
                const currentUrl = window.location.href;
                if (currentUrl !== lastUrl) {
                    lastUrl = currentUrl;
                    const pageName = document.title || window.location.pathname;
                    window.SignalRService.trackPageView(userData.user.UId, pageName, false);
                }
            }, 1000);

            // Expose wrapper to global scope for backward compatibility
            window.signalRActivityTracking = {
                service: window.SignalRService,
                trackPageView: function (pageName) {
                    const userData = getUserData();
                    if (userData && userData.user) {
                        window.SignalRService.trackPageView(userData.user.UId, pageName, false);
                    }
                },
                isConnected: function () {
                    return window.SignalRService.isConnected;
                }
            };
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTracking);
    } else {
        initializeTracking();
    }

})();
