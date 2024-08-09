import { createApp } from 'vue'
import App from './App.vue'

import { registerPlugins } from '@/plugins'

// Styles
import '@/assets/style/app.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
