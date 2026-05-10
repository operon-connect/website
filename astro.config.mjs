import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://operonconnect.com',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'my',
        locales: {
          my: 'my_MM',
          en: 'en_US',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'my',
    locales: ['my', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  compressHTML: true,
  output: "hybrid",
  adapter: cloudflare()
});