// Empty Service Worker to resolve 404 dev server errors from old PWA registrations
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
