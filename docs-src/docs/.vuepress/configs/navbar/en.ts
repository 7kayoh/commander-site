import type { NavbarConfig } from '@vuepress/theme-default'
export const en: NavbarConfig = [
    {
        text: 'Get Started',
        children: [
            '/home/intro.md',
            '/home/install.md',
            '/home/config.md',
        ]
    },
    {
        text: 'Guides',
        children: [
            {
                text: 'Configure',
                children: [
                    '/guides/config/intro.md',
                    '/guides/config/overview.md',
                    '/guides/config/admin.md',
                    '/guides/config/perm.md',
                    '/guides/config/ui.md',
                    '/guides/config/misc.md',
                ]
            },
            {
                text: 'Extension',
                children: [
                    '/guides/extension/pkg.md',
                    '/guides/extension/theme.md',
                ]
            },
            {
                text: 'Develop',
                children: [
                    '/guides/dev/conduct/README.md',
                    '/guides/dev/pkg/README.md',
                    '/guides/dev/submit/README.md'
                ]
            },
        ]
    },
    {
        text: 'Reference',
        children: [
            '/ref/api/README.md',
            '/ref/ui/README.md',
            '/ref/others/README.md'	
        ]
    }
]