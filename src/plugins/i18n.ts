import { createI18n } from 'vue-i18n'

import EN from '@/locales/en.json'
import VI from '@/locales/vi.json'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof VI

export const i18n = createI18n<[MessageSchema], 'en' | 'vi'>({
  legacy: false,
  locale: 'vi',
  messages: {
    vi: VI,
    en: EN
  },
  fallbackLocale: 'en'
})
