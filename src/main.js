/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import './index.css'
// Composables
import { createApp } from 'vue'
import router from './router'

// Plugins
import { registerPlugins } from '@/plugins'
import { VueQueryPlugin } from 'vue-query';
const app = createApp(App)

registerPlugins(app)

createApp(App).use(router).use(VueQueryPlugin);

app.mount('#app')
