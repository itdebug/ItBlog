import { defaultTheme } from '@vuepress/theme-default'

export default {
    title: 'Long Long Ago',
    description: '很久很久以前',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpg' }]
    ],
    dest: ".vuepress/dist",
    theme: defaultTheme({
        navbar: [
            // NavbarItem
            {
                text: 'Java',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'Spring',
                children: [
                    {
                        text: 'Spring 手撸专栏',
                        link: '/md/spring/develop-spring/001.md'
                        // link: 'https://mp.weixin.qq.com/s/olrwapkSTQMyIGpR10ZDzA'
                    }],
            },
            {
                text: '部署',
                link: '/',
            },
        ],
        sidebar: {
            '/md/spring/develop-spring/': [
                {
                    text: '介绍',
                    collapsible: false,
                    children: [{
                        text: 'Spring 手撸专栏',
                        link: '/md/spring/develop-spring/002.md'
                    }],
                },

                {
                    text: '计划',
                    collapsible: false,
                    children: [{
                        text: '2023计划',
                        link: '/md/spring/develop-spring/003.md'
                    }],
                },
            ],
        },
    })
}