import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/style/style.scss';

import Functions from './utils/functions';

import { registerCellType, NumericCellType } from 'handsontable/cellTypes';

import { registerPlugin, UndoRedo } from 'handsontable/plugins';

registerCellType(NumericCellType);
registerPlugin(UndoRedo);

const app = createApp(App);
app.use(store).use(router).use(Functions).mount('#app');
