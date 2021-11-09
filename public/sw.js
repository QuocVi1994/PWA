/* eslint-disable no-restricted-globals */
var cacheName = 'bs-0-2-0';
var cacheFiles = ['/'].concat(global.serviceWorkerOption.assets).map(path => {
  return '/PWA/build' + path;
});

self.addEventListener('install', function (e) {
  console.log('Service Worker 状态： install');
  console.log(cacheFiles)
  var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFiles);
  });
  e.waitUntil(cacheOpenPromise);
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (cache) {
      return cache || fetch(e.request);
    }).catch(function (err) {
      console.log(err);
      return fetch(e.request);
    })
  )
});

self.addEventListener('activate', function (e) {
  console.log('Service Worker 状态：activate');
  var cachePromise = caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (key) {
      if (key !== cacheName) {
        return caches.delete(key);
      }
    }));
  });
  e.waitUntil(cachePromise);
  return self.clients.claim();
})