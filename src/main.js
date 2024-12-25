import { createApp } from 'vue'; // Vue 3 way of creating an app
import App from './App.vue'; // Your main Vue component
import router from './router'; // Your Vue Router setup
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS (optional, if you need JS features like modals, tooltips, etc.)

createApp(App).use(router).mount('#app'); // Create the Vue app, use the router, and mount it to the DOM
