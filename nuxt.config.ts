// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'NatureJab Dashboard',
            meta: [
                { name: 'theme-color', content: '#000000' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
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
        '@nuxt/icon',
        '@vueuse/nuxt',
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
    },
});
