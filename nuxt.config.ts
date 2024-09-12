// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'pinia-plugin-persistedstate',
        '@nuxt/test-utils',
        '@nuxt/eslint',
        '@nuxtjs/color-mode',
        'shadcn-nuxt',
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
    },
});
