export default function LocalServiceWorkerRegister() {
  console.log(process.env, 1111)
  const swPath = `${process.env.PUBLIC_URL}/sw.js`;
  if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'production') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(swPath).then(registration => {
        console.log('Service worker registered');
      });
    });
  }
}