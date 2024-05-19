// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxt/content', "@nuxt/fonts", "@nuxt/image"],
  colorMode: {
    preference: 'light'
  },
  css:['~/scss/index.scss']
});