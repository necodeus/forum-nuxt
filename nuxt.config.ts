// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: true,
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: {
            Poppins: true,
        },
    },
})
