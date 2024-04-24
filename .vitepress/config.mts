import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Los Santos County Roleplay",
    description: "Oficijalna Vikipedija",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Wiki', link: '/docs/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Wiki',
                items: [
                    {text: 'Markdown Examples', link: '/docs/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/docs/api-examples'}
                ]
            },
            {
                text: 'Pravila',
                items: [
                    {text: 'Server pravila', link: '/docs/server-rules'},
                    {text: 'Pravila računa', link: '/docs/account-rules'},
                    {text: 'Pravila fakcija', link: '/docs/faction-rules'},
                    {text: 'Rules of Engagement', link: '/docs/roe'}
                ]
            },
            {
                text: 'Uslovi i pravila',
                items: [
                    {text: 'Politika privatnosti', link: '/docs/privacy-policy'},
                    {text: 'Uslovi korišćenja', link: '/docs/terms-of-service'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        notFound: {
            title: 'Stranica nije pronadjena',
            quote: 'Ali ako ne promenite pravac i ako nastavite da tražite, možda ćete završiti tamo gde ste krenuli.',
            linkText: 'Vodi me kući'
        },

        docFooter: {
            prev: 'Prethodna stranica',
            next: 'Sledeća stranica',
        },
        outlineTitle: 'Na ovoj stranici',
        lastUpdatedText: 'Zadnja izmena',
        returnToTopLabel: 'Nazad na vrh',
        darkModeSwitchTitle: 'Tamni režim',
        lightModeSwitchTitle: 'Svetli režim',
    },

    lastUpdated: true,
})
