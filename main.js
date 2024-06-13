import {App} from './src/js/app.js';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then(() => console.log('service worker registered'))
        .catch((err) => console.log('service worker not registered', err));
}


customElements.define('app-component',App);
const app = document.getElementById('app');
app.innerHTML = `<app-component></app-component>`;
