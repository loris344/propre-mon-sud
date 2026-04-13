const CACHE_NAME = 'sos-diogene-v1';
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Only cache same-origin static assets
  if (url.origin !== location.origin) return;
  if (!/\.(webp|png|jpg|jpeg|svg|js|css|woff2?)$/i.test(url.pathname)) return;

  e.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(e.request);
      if (cached) {
        const cachedDate = cached.headers.get('sw-date');
        if (cachedDate && Date.now() - Number(cachedDate) < CACHE_DURATION) {
          return cached;
        }
      }
      const response = await fetch(e.request);
      if (response.ok) {
        const headers = new Headers(response.headers);
        headers.set('sw-date', String(Date.now()));
        const clone = new Response(await response.blob(), { status: response.status, headers });
        cache.put(e.request, clone);
      }
      return response;
    })
  );
});
