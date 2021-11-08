/* eslint-disable no-restricted-globals */

self.addEventListener('install', function (e) {
  console.log('Service Worker 状态： install');
});

self.addEventListener('message', async (event) => {
  console.log('Got message in the service worker', event);
});