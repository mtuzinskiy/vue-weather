import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Weather from './pages/Weather.vue';
import About from './pages/About.vue';
import Subscribe from './pages/Subscribe.vue';
import Settings from './pages/Settings.vue';
import App from './App.vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import './styles/main.css';

const routes = [
  { path: '/', component: Weather },
  { path: '/about', component: About },
  { path: '/Subscribe', component: Subscribe },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

const googleMapApp = createApp(App);
googleMapApp
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_API_KEY_COMES_HERE'
    }
  })
  .mount('#appMap');
