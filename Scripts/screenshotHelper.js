/**
 * Universal SignalR Activity Tracking
 * Single source of truth for both MVC and React implementations
 * Works in both browser (UMD) and ES6 module contexts
 * 
 * CDN Deployment:
 * - Development: http://localhost:9999/Scripts/screenshotHelper.js
 * - Production: https://justinscoderepo.github.io/etalentercdn/screenshotHelper.js
 * 
 * Usage in MVC:
 *   <script src="/Scripts/screenshotHelper.js"></script>
 * 
 * Usage in React:
 *   Dynamically loaded from CDN/localhost in signalrService.js
 */

(function(global, factory) {
    // UMD pattern - works in both browser and module contexts
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        // CommonJS/Node.js
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals
        global.SignalRActivityTracker = factory();
    }
})(typeof window !== 'undefined' ? window : this, function() {
    'use strict';

    // Configuration constants
    const CONFIG = {
        SCREENSHOT_ENABLED: true,
        SCREENSHOT_QUALITY: 0.4,
        SCREENSHOT_PIXEL_RATIO: 0.3,
        SKIP_SCREENSHOT_URLS: ['liveactivity', 'liveDashboard', 'activity-dashboard'],
        EXTERNAL_IMAGE_PATTERNS: [
            'blob.core.windows.net',
            'cdn.',
            'github.io',
            'azureedge.net',
            'cloudfront.net',
            'googleusercontent.com'
        ],
        PERIODIC_TRACKING_INTERVAL: 60000, // 1 minute
        RECONNECT_DELAYS: [0, 2000, 10000, 30000, 60000]
    };

    /**
     * Check if URL is external/CORS-problematic
     */
    function isExternalImage(url) {
        if (!url || url.startsWith('data:')) return false;
        
        return CONFIG.EXTERNAL_IMAGE_PATTERNS.some(pattern => url.includes(pattern)) ||
               (!url.startsWith(window.location.origin) && url.startsWith('http'));
    }

    /**
     * Check if current URL should skip tracking
     */
    function shouldSkipTracking() {
        const currentUrl = window.location.href.toLowerCase();
        return CONFIG.SKIP_SCREENSHOT_URLS.some(pattern => 
            currentUrl.includes(pattern.toLowerCase())
        );
    }

    /**
     * Capture screenshot with CORS-safe image handling
     */
    async function captureScreenshot(htmlToImage) {
        if (!CONFIG.SCREENSHOT_ENABLED || shouldSkipTracking()) {
            return '';
        }

        try {
            if (!htmlToImage) {
                console.warn('⚠️ html-to-image library not loaded, skipping screenshot');
                return '';
            }

            if (!document.body) {
                console.error('❌ Document body is null');
                return '';
            }

            // Find all images and temporarily replace external sources
            const images = document.querySelectorAll('img');
            const modifiedImages = [];
            
            images.forEach(img => {
                const src = img.src || img.currentSrc || '';
                if (isExternalImage(src)) {
                    modifiedImages.push({
                        element: img,
                        originalSrc: src,
                        originalSrcset: img.srcset || ''
                    });
                    // Replace with transparent 1x1 pixel
                    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    img.srcset = '';
                }
            });

            try {
                // Capture screenshot without external images
                const dataUrl = await htmlToImage.toJpeg(document.body, {
                    quality: CONFIG.SCREENSHOT_QUALITY,
                    pixelRatio: CONFIG.SCREENSHOT_PIXEL_RATIO,
                    backgroundColor: '#ffffff',
                    skipFonts: true,
                    cacheBust: false
                });

                return dataUrl;
            } finally {
                // Restore all modified images immediately
                modifiedImages.forEach(({ element, originalSrc, originalSrcset }) => {
                    element.src = originalSrc;
                    if (originalSrcset) {
                        element.srcset = originalSrcset;
                    }
                });
            }
        } catch (err) {
            console.error('❌ Failed to capture screenshot:', err);
            return '';
        }
    }

    /**
     * SignalR Activity Tracker Class
     */
    class ActivityTracker {
        constructor(options = {}) {
            this.apiBaseUrl = options.apiBaseUrl || this.getDefaultApiUrl();
            this.signalR = options.signalR; // SignalR library reference
            this.htmlToImage = options.htmlToImage; // html-to-image library reference
            
            this.connection = null;
            this.isConnected = false;
            this.isConnecting = false;
            this.pendingConnection = null;
            this.reconnectAttempts = 0;
            this.periodicTrackingInterval = null;
            this.listeners = new Map();
        }

        getDefaultApiUrl() {
            if (typeof window !== 'undefined') {
                return window.location.hostname === 'localhost' 
                    ? 'http://localhost:8888' 
                    : (window.siteConfig?.apiUrl || 'https://localhost:7193');
            }
            return 'https://localhost:7193';
        }

        /**
         * Connect to SignalR hub
         */
        async connect(user, token) {
            if (this.isConnected) return;
            if (this.isConnecting && this.pendingConnection) {
                return this.pendingConnection;
            }

            this.isConnecting = true;
            this.pendingConnection = this._startConnection(user, token);

            try {
                await this.pendingConnection;
            } finally {
                this.isConnecting = false;
                this.pendingConnection = null;
            }
        }

        /**
         * Start SignalR connection
         */
        async _startConnection(user, token) {
            try {
                if (!this.signalR) {
                    throw new Error('SignalR library not provided');
                }

                // Clean up existing connection
                if (this.connection) {
                    try {
                        await this.connection.stop();
                    } catch (e) {
                        // Ignore
                    }
                }

                // Build connection
                this.connection = new this.signalR.HubConnectionBuilder()
                    .withUrl(`${this.apiBaseUrl}/appHub`, {
                        accessTokenFactory: () => token || ''
                    })
                    .withAutomaticReconnect({
                        nextRetryDelayInMilliseconds: (retryContext) => {
                            const index = Math.min(retryContext.previousRetryCount, CONFIG.RECONNECT_DELAYS.length - 1);
                            return CONFIG.RECONNECT_DELAYS[index];
                        }
                    })
                    .configureLogging(this.signalR.LogLevel.Warning)
                    .build();

                // Setup event handlers
                this.setupConnectionHandlers(user);
                this.setupEventListeners();

                // Start connection
                await this.connection.start();
                this.isConnected = true;
                this.reconnectAttempts = 0;

                // Register user
                if (!shouldSkipTracking()) {
                    await this.registerUser(user);
                    this.startPeriodicTracking(user.UId);
                }

            } catch (err) {
                console.error('❌ SignalR Connection Error:', err);
                this.isConnected = false;
                this.scheduleReconnect(user, token);
            }
        }

        setupConnectionHandlers(user) {
            this.connection.onreconnecting(() => {
                this.isConnected = false;
            });

            this.connection.onreconnected(() => {
                this.isConnected = true;
                this.registerUser(user);
            });

            this.connection.onclose((error) => {
                if (error) {
                    console.error('❌ SignalR connection closed:', error.message);
                }
                this.isConnected = false;
            });
        }

        setupEventListeners() {
            // Activity events (PascalCase)
            this.connection.on("UserConnected", (data) => this.emit("userConnected", data));
            this.connection.on("UserDisconnected", (data) => this.emit("userDisconnected", data));
            this.connection.on("PageView", (data) => this.emit("pageView", data));
            this.connection.on("FormSubmitted", (data) => this.emit("formSubmitted", data));

            // Lowercase versions for compatibility
            this.connection.on("userconnected", (data) => this.emit("userConnected", data));
            this.connection.on("userdisconnected", (data) => this.emit("userDisconnected", data));
            this.connection.on("pageview", (data) => this.emit("pageView", data));
            this.connection.on("formsubmitted", (data) => this.emit("formSubmitted", data));

            // Chat events (if needed)
            this.connection.on("ReceivePrivateMessage", (data) => this.emit("privateMessage", data));
            this.connection.on("ReceiveEventMessage", (data) => this.emit("eventMessage", data));
            this.connection.on("MessageSent", (data) => this.emit("messageSent", data));
            this.connection.on("UserTyping", (data) => this.emit("userTyping", data));
        }

        scheduleReconnect(user, token) {
            if (this.reconnectAttempts < 5) {
                this.reconnectAttempts++;
                const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
                setTimeout(() => this.connect(user, token), delay);
            }
        }

        /**
         * Register user with hub
         */
        async registerUser(user) {
            if (!this.connection || !this.isConnected || shouldSkipTracking()) return;

            try {
                const url = window.location.href;
                let screenshot = '';
                
                try {
                    screenshot = await captureScreenshot(this.htmlToImage);
                } catch (err) {
                    screenshot = '';
                }

                await this.connection.invoke('RegisterUser',
                    user.UId?.toString() || '',
                    user.UserRoleId?.toString() || '',
                    user.Name || 'Unknown',
                    user.RoleTitle || 'Guest',
                    user.Event?.toString() || '',
                    url,
                    screenshot
                );
            } catch (err) {
                console.error('❌ Failed to register user:', err);
            }
        }

        /**
         * Track page view
         */
        async trackPageView(userId, pageName, includeScreenshot = false) {
            if (!this.connection || !this.isConnected || shouldSkipTracking()) return;

            try {
                const url = window.location.href;
                let screenshot = '';
                
                if (includeScreenshot) {
                    try {
                        screenshot = await captureScreenshot(this.htmlToImage);
                    } catch (err) {
                        screenshot = '';
                    }
                }

                await this.connection.invoke('TrackPageView',
                    userId?.toString() || '',
                    pageName,
                    url,
                    screenshot
                );
            } catch (err) {
                console.error('❌ Failed to track page view:', err);
            }
        }

        /**
         * Start periodic tracking
         */
        startPeriodicTracking(userId) {
            if (this.periodicTrackingInterval) {
                clearInterval(this.periodicTrackingInterval);
            }

            this.periodicTrackingInterval = setInterval(async () => {
                if (this.isConnected) {
                    try {
                        const pageName = document.title || window.location.pathname;
                        await this.trackPageView(userId, pageName, true);
                    } catch (err) {
                        console.error('❌ Periodic tracking failed:', err);
                    }
                }
            }, CONFIG.PERIODIC_TRACKING_INTERVAL);
        }

        stopPeriodicTracking() {
            if (this.periodicTrackingInterval) {
                clearInterval(this.periodicTrackingInterval);
                this.periodicTrackingInterval = null;
            }
        }

        /**
         * Event emitter pattern
         */
        on(event, callback) {
            if (!this.listeners.has(event)) {
                this.listeners.set(event, []);
            }
            this.listeners.get(event).push(callback);
            
            return () => {
                const callbacks = this.listeners.get(event);
                if (callbacks) {
                    const index = callbacks.indexOf(callback);
                    if (index > -1) callbacks.splice(index, 1);
                }
            };
        }

        emit(event, data) {
            const callbacks = this.listeners.get(event) || [];
            callbacks.forEach(callback => {
                try {
                    callback(data);
                } catch (err) {
                    console.error(`Error in ${event} callback:`, err);
                }
            });
        }

        /**
         * Disconnect
         */
        async disconnect() {
            this.stopPeriodicTracking();

            if (this.isConnecting && this.pendingConnection) {
                try {
                    await this.pendingConnection;
                } catch (e) {
                    // Ignore
                }
            }

            if (this.connection) {
                try {
                    await this.connection.stop();
                } catch (err) {
                    console.error('Error stopping connection:', err);
                }
                this.connection = null;
            }
            
            this.isConnected = false;
            this.isConnecting = false;
            this.pendingConnection = null;
        }

        getConnectionState() {
            return {
                isConnected: this.isConnected,
                state: this.connection?.state || 'Disconnected'
            };
        }
    }

    // Return the class and utilities
    return {
        ActivityTracker,
        captureScreenshot,
        isExternalImage,
        shouldSkipTracking,
        CONFIG
    };
});
