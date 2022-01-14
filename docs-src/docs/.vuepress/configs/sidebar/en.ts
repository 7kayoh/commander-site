import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/home/': [
        {
            text: 'Get Started',
            children: ['/home/intro.md', '/home/install.md', '/home/config.md']
        }
    ],
    '/guides/extension/': [
        {
            text: 'Extension',
            children: ['/guides/extension/pkg.md', '/guides/extension/theme.md']
        }
    ],
    '/guides/dev/': [
        {
            text: 'Develop',
            children: ['/guides/dev/conduct/', '/guides/dev/pkg/', '/guides/dev/submit/']
        }
    ],
    '/guides/config/': [
        {
            text: 'Configure',
            children: ['/guides/config/intro.md', '/guides/config/overview.md', '/guides/config/admin.md', '/guides/config/perm.md', '/guides/config/ui.md', '/guides/config/misc.md']
        }
    ],
    '/ref/': [
        {
            text: 'Reference',
            children: ['/ref/api/', '/ref/ui/', '/ref/others/']
        }
    ]
}