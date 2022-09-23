import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import '@/assets/style/style.scss';

import Functions from './utils/functions';

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(Functions).mount('#app');
