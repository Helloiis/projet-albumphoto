import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import de Vue Router

const app = createApp(App);

app.use(router); // Ajout de Vue Router à l'application
app.mount('#app');
