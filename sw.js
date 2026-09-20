const CACHE_NAME = 'higher-weather-shell-v5';
const APP_SHELL = [
  './',
  './index.html',
  './HigherWeather.html',
  './higher-weather.css',
  './higher-weather.js',
  './manifest.webmanifest',
  './logo.png',
  './logo-nav-visible.png',
  './app-icon-192.png',
  './app-icon-512.png',
  './app-icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request).then(
        (cached) => cached || (request.mode === 'navigate'
          ? caches.match('./HigherWeather.html')
          : Response.error())
      ))
  );
});
