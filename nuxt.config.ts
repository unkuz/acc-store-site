// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    "@vite-pwa/nuxt"
  ],
  colorMode: {
    preference: 'light',
  },
  css: ['~/assets/scss/index.scss'],
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },
})