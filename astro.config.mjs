// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://michaelvanhorn.me',
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'vi', 'es', 'oj'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [sitemap()],
});
