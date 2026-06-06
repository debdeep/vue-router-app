import { createApp } from 'vue';
import './assets/main.css';

// Import Bootstrap CSS and JS bundles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import App from './App.vue';
import router from './router';

const app = createApp(App)
app.use(router)

// mount after the initial router navigation is ready as  navigations are asynchronous in Vue Router
await router.isReady()
app.mount('#app')
