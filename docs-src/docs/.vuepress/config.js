module.exports = {
	lang: 'en-US',
	title: '',
	description: 'Moderation reimagined',
	themeConfig: {

		logo: 'images/Logo.png',
		logoDark: '/images/DarkLogo.png',
		// git repo
		repo: '7kayoh/commander',
		repoLabel: 'GitHub',
		
		// docs git repo
		docsRepo: '7kayoh/commander-site',
		docsDir: 'docs-src/v1',
		editLinks: true,
		editLinkText: 'Edit Page',
		
		// docs configurations
		sidebar: 'auto',
		lastUpdated: 'Last Updated',
		smoothScroll: true,

		// sidebar
		sidebar: {
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
		},

		// nav
		navbar: [
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
	},

	plugins: [
		[
			'@vuepress/plugin-search',
			{
			  // exclude the homepage
			  isSearchable: (page) => page.path !== '/',
			},
		],
	],
	dest: 'public'
}
