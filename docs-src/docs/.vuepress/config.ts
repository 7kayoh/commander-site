import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
	base: '/',

	head: [
		['meta', { name: 'application-name', content: 'Commander'}]
	],

	locales: {
		'/': {
			lang: 'en-US',
			title: '',
			description: 'Commander, Open Source Administration Panel'
		},
		'/zht/': {
			lang: 'zh-TW',
			title: '',
			description: '指揮官，Roblox 開源管理面板'
		}
	},

	themeConfig: {
		logo: '/images/logo.png',
		logoDark: '/images/dlogo.png',
		repo: '7kayoh/commander',
		docsRepo: '7kayoh/commander-site',
		docsDir: 'docs-src/v1',
		
		locales: {
			'/': {
				navbar: navbar.en,
				sidebar: sidebar.en,
				editLinkText: 'Edit this page on GitHub'
			},

			'/zht/': {
				navbar: navbar.zht,
				selectLanguageName: '繁體中文',
				selectLanguageText: '選擇語言',
				selectLanguageAriaLabel: '選擇語言',

				sidebar: sidebar.zht,

				editLinkText: '在 GitHub 上編輯此頁',
				lastUpdatedText: '最近更新日期',
				contributorsText: '貢獻者',

				tip: '提示',
				warning: '注意事項',
				danger: '警告',

				notFound: [
					'這裏空空如也的，什麼都沒有',
				],

				backToHome: '返回主頁',

				openInNewWindow: '在新窗口打開',
				toggleDarkMode: '切換深色主題',
				toggleSidebar: '打開/關閉側邊欄',
			}
		}
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
})