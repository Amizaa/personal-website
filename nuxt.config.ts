// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
  css: ['./app/assets/styles/main.css'],
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
