import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001'
    }
  },
  typescript: {
    shim: false
  },
  css: [
    '~/assets/css/main.css'
  ],

})