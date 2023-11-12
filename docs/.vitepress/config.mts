import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'front-standard',
	description: '工程化配置',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '使用指南', link: '/guide' }
		],

		sidebar: [],

		socialLinks: [{ icon: 'github', link: 'https://github.com/f5l5y5/sunrise-utils-monorepo' }]
	}
})
