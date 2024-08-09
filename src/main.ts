import { createApp } from 'vue'
import App from './App.vue'

import { registerPlugins } from '@/plugins'

// Styles
import '@styles/app.scss'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@/@iconify/icons-bundle'
import 'boxicons/css/boxicons.min.css'
import 'vue3-perfect-scrollbar/style.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
