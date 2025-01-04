import { createPinia } from 'pinia'
import { i18n } from './i18n'
import router from '../router'
import renderToast from './toast'

import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.provide('$toast', renderToast)
  app.use(router).use(i18n).use(createPinia())
}
