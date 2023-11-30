import { createI18n } from 'vue-i18n'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof VI

const loadLocaleMessages = () => {
  const locales = import.meta.globEager('../locales/**/*.json')
  const messages = {}

  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\.json$/i)

    if (matched && matched.length === 3) {
      const [, locale, module] = matched
      if (!messages[locale]) messages[locale] = {}
      messages[locale][module] = locales[key]
    }
  })
  return messages
}

export const i18n = createI18n<[MessageSchema], 'en' | 'vi'>({
  legacy: false,
  locale: 'vi',
  messages: loadLocaleMessages(),
  fallbackLocale: 'en'
})
