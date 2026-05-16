import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://operonconnect.com',

  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Locale keys must be BCP47-style (e.g. my-mm). Routing uses my/en in astro.i18n;
      // hreflang is handled in Base.astro. Plain "my"/"en" keys skip sitemap generation.
      i18n: {
        defaultLocale: 'en-us',
        locales: {
          'my-mm': 'my-MM',
          'en-us': 'en-US',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'my'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  compressHTML: true,
});
