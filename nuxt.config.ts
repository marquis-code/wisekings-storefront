export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n'],
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000/api/v1',
            firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
            firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
        },
    },
    app: {
        head: {
            title: 'WiseKings — Premium Products',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Shop premium products at WiseKings. Quality guaranteed.' },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
            ],
            script: [
                {
                    src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY || '' || ''}&libraries=places`,
                    async: true,
                    defer: true,
                },
            ],
        },
    },
    typescript: { strict: true },
    tailwindcss: { cssPath: '~/assets/css/main.css' },
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
            { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
            { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
        ],
        langDir: 'locales',
        defaultLocale: 'en',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'en',
        },
    },
    googleFonts: {
    families: {
      "Inter": [400, 500, 600, 700],
      "Poppins": [400, 500, 600, 700],
      "Onest": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    preload: true,
  },
  css: ['/assets/font/stylesheet.css', "/assets/css/main.css"],
})
