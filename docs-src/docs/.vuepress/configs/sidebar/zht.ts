import type { SidebarConfig } from '@vuepress/theme-default'

export const zht: SidebarConfig = {
    '/zht/home/': [
        {
            text: '立即開始',
            children: ['/zht/home/intro.md', '/zht/home/install.md', '/zht/home/config.md']
        }
    ],
    '/zht/guides/extension/': [
        {
            text: '插件',
            children: ['/zht/guides/extension/pkg.md', '/zht/guides/extension/theme.md']
        }
    ],
    '/zht/guides/dev/': [
        {
            text: '開發者',
            children: ['/zht/guides/dev/conduct/', '/zht/guides/dev/pkg/', '/zht/guides/dev/submit/']
        }
    ],
    '/zht/guides/config/': [
        {
            text: '設置',
            children: ['/zht/guides/config/intro.md', '/zht/guides/config/overview.md', '/zht/guides/config/admin.md', '/guides/config/perm.md', '/guides/config/ui.md', '/guides/config/misc.md']
        }
    ],
    '/zht/ref/': [
        {
            text: 'API指南',
            children: ['/zht/ref/api/', '/zht/ref/ui/', '/zht/ref/others/']
        }
    ]
}