import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defaultVariant } from './src/variants/default.ts';

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
    // Вариант по умолчанию живёт на главной; его собственный адрес ведёт туда же.
    [`/${defaultVariant}`]: '/',
    [`/ru/${defaultVariant}`]: '/ru/',
    [`/en/${defaultVariant}`]: '/en/',
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
