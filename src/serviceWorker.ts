import { baseURL } from '../configs/constants';

export const localServiceWorkerRegister = function () {
  const swPath = `${baseURL}/serviceWorker.js`;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(swPath).then(registration => {
        console.log('Service worker registered');
      });
    });
  }
}