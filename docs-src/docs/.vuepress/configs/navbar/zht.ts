import type { NavbarConfig } from '@vuepress/theme-default'
export const zht: NavbarConfig = [
    {
        text: '立即開始',
        children: [
            '/zht/home/intro.md',
            '/zht/home/install.md',
            '/zht/home/config.md',
        ]
    },
    {
        text: '指南',
        children: [
            {
                text: '設置',
                children: [
                    '/zht/guides/config/intro.md',
                    '/zht/guides/config/overview.md',
                    '/zht/guides/config/admin.md',
                    '/zht/guides/config/perm.md',
                    '/zht/guides/config/ui.md',
                    '/zht/guides/config/misc.md',
                ]
            },
            {
                text: '插件',
                children: [
                    '/zht/guides/extension/pkg.md',
                    '/zht/guides/extension/theme.md',
                ]
            },
            {
                text: '開發者',
                children: [
                    '/zht/guides/dev/conduct/README.md',
                    '/zht/guides/dev/pkg/README.md',
                    '/zht/guides/dev/submit/README.md'
                ]
            },
        ]
    },
    {
        text: 'API指南',
        children: [
            '/zht/ref/api/README.md',
            '/zht/ref/ui/README.md',
            '/zht/ref/others/README.md'	
        ]
    }
]