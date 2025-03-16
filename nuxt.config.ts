// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/index.scss'],
  modules: ['@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    langDir: "locales", 
    locales: [
        {
            code: 'en',
            language: 'en-US',
            file: 'en.json'
        }, { 
            code: 'fr',
            language: 'fr-FR',
            file: 'fr.json'
        }
    ],
    lazy: true,
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
  },
  }
})