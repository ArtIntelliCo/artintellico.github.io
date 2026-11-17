import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defaultVariant } from './src/variants/default.ts';

export default defineConfig({
  site: 'https://artintellico.com',
  i18n: {
    locales: ['en', 'de', 'fr', 'es', 'pt', 'it', 'uk', 'ru'],
    defaultLocale: 'uk',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/uk': '/',
    // Вариант по умолчанию живёт на главной; его собственный адрес ведёт туда же.
    ...Object.fromEntries(
      ['', 'ru/', 'en/', 'de/', 'fr/', 'es/', 'pt/', 'it/'].map((prefix) => [`/${prefix}${defaultVariant}`, `/${prefix}`])
    ),
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: { uk: 'uk-UA', ru: 'ru-UA', en: 'en-US', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', pt: 'pt-PT', it: 'it-IT' },
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
