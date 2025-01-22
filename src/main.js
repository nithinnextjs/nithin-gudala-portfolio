import { createApp } from 'vue'; // Vue 3 way of creating an app
import App from './App.vue'; // Your main Vue component
import router from './router/index.js'; // Your Vue Router setup
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Optionally, import Bootstrap JS (if needed for components like modals, tooltips, etc.)
import 'bootstrap';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Particles from 'vue3-particles';


createApp(App).use(router).use(Particles).mount('#app'); // Create the Vue app, use the router, and mount it to the DOM
