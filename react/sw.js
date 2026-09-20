/*
 * Service worker for the installable (PWA) desktop app.
 *
 * It exists only to satisfy the browsers that still require a worker with a fetch
 * handler before they offer "Install app" - it deliberately caches NOTHING. The
 * standalone shell resolves its bundle at runtime from the CDN manifest and every
 * response is sent no-cache on purpose, so a caching worker would hand users a stale
 * bundle after each release. Every request goes straight to the network.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Intentionally empty: default network behaviour.
});
