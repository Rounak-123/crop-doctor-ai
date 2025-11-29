const CACHE_NAME = "cropgpt-cache-v1";
const toCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/model/model.json",
  "/model/weights.bin",
  "/model/metadata.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(toCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
