import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://artintellico.com',
  i18n: {
    locales: ['uk', 'en', 'ru'],
    defaultLocale: 'uk',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/uk': '/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', ru: 'ru-UA', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Логотипы партнёров нужны вариантам файлами (<img src>), а не data-URI в каждой странице.
      assetsInlineLimit: (file) => (file.endsWith('.svg') ? false : undefined),
    },
  },
});
