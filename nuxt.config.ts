// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "@nuxt/icon", '@nuxtjs/i18n'],
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['./app/assets/styles/main.css'],
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default', 
    locales: [
      { code: 'en', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'fa', language: 'fa-IR', dir: 'rtl', file: 'fa.json' },
    ],
  },
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        // https://nuxt.com/blog/v3-5#bundler-module-resolution
        moduleResolution: "node",
        paths: {
          "@": ["./app"],
          "@/*": ["./app/*"],
        },
      },
    },
  },
})