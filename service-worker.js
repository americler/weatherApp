// service-worker.js

const CACHE_NAME = "weather-app-cache-v1";
const urlsToCache = [
  "/weatherApp/",
  "/weatherApp/index.html",
  "/weatherApp/manifest.json",
  "/weatherApp/assets/css/style.css",
  "/weatherApp/assets/images/avatar.png",
  "/weatherApp/assets/icons/thunder.svg",
  "/weatherApp/assets/sounds/thunder.wav",
  "/weatherApp/assets/images/logo144x144.png",
  "/weatherApp/assets/icons/sunrise.svg",
  // ... diğer eklenen URL'leri buraya ekleyin
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
