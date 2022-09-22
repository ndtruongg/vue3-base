import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/style/style.scss';

import Functions from './utils/functions';

const app = createApp(App);
app.use(store).use(router).use(Functions).mount('#app');
