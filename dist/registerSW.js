if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/PWA/dist/sw.js', { scope: '/PWA/dist/' })})}