export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/scss/main.scss'],
  app: {
    head: {
      titleTemplate: '%s - Nuxt Job Board',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { property: 'og:type', content: 'website'}
      ]
    }
  }
})
