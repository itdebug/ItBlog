import { defaultTheme } from '@vuepress/theme-default'

export default {
    title: '技术人休憩站',
    description: '技术人休憩站',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpg' }]
    ],
    dest: ".vuepress/dist",
    theme: defaultTheme({
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: ['/group/foo.md', '/group/bar.md'],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
        sidebar: [
            ['/', '简介'],
            {
                text: "车商通",
                collapsable: false,
                children: [
                    ['/cst/cst.md', '车商通'],
                    ['/cst/draft.md', '草稿箱'],
                    ['/cst/esc.md', '二手车']
                ]
            },
            {
                text: "新框架",
                collapsable: true,
                children: [
                    ['/new/testindex1.md', '发布新框架'],
                    ['/new/local/entry.md', '本地开发'],
                    ['/new/feedback/feedback.md', '问题反馈']
                ]
            },

            ['/feedback/feedback.md', '问题反馈']
        ]
    })
}