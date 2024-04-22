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
                  { text: 'Generalna pravila', link: '/docs/rules/general' },
                  { text: 'Server pravila', link: '/docs/rules/general' },
                  { text: 'Roleplay pravila', items: [{text: 'Metagaming', link: '/docs/rules/rp/mg'}]},
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
        ]
    }
})
