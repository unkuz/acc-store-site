// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    "@vite-pwa/nuxt",
    "@nuxtjs/seo"
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
  site:{
    url: 'https://www.webaccgiare.store/',
    name: 'Web Account Premium giá tốt',
    description: 'Ở đây cung cấp đăng kí tài khoản Spotify Premium, Youtube Premium, Elsa Pro/Premium, Google One, Duolingo, GPT Plus, ... Uy tín, chất lượng, giá tốt',
    defaultLocale: 'vi',
  }
})