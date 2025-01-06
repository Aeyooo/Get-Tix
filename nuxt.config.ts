// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],
  colorMode: {
    preference: 'light'
  },
  supabase: {
    redirect: false
    }
})
