// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/styles/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   typescript: {
    // Extend or override Nuxt's TS compiler options
    tsConfig: {
      compilerOptions: {
        resolveJsonModule: true,
        esModuleInterop: true,
        types: ["@types/node"]
      },
      include: [
        "app/types/**/*.d.ts",
        "app/data/**/*.json",
        "app/components/**/*.vue",
        "app/pages/**/*.vue"
      ]
    }
  }
})
