// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // # Allow you to use the cloudflared link.
  vite: {
    server: {
      allowedHosts: true, // allow all
    },
  }

})
