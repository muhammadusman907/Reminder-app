const staticDevCoffee = "Namaz-reminder-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]
// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })

// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then(res => {
//       return res || fetch(fetchEvent.request)
//     })
//   )
// })


const myCache = 'WEB_APP_CACHE_NAME';

self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(myCache);
        await cache.addAll([
            '/'
        ]);
    }());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(myCache);
        const cacheNames = await cache.keys();
        await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
    }());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
        const networkPromise = fetch(event.request);
        const cachePromise = caches.open(myCache);

        try {
            const networkResponse = await networkPromise;
            cachePromise
                .then(cache => {
                    cache.put(event.request, networkResponse);
                });
            return networkResponse.clone();
        } catch (error) {
            const cache = await cachePromise;
            const cacheResponse = await cache.match(event.request);
            return cacheResponse;
        }
    }());
});





