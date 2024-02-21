import '@/assets/style/app.scss'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import App from './App.vue'
import router from './router'
import { i18n } from '@/plugins/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VuePlyr, {
  plyr: {}
})

app.mount('#app')
