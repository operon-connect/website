# Operon Connect — Website

Official marketing site for **[Operon Connect](https://operonconnect.com)** — static, bilingual (Myanmar / English), and tuned for performance and SEO.

[![Astro](https://img.shields.io/badge/Astro-4-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

---

## Overview

This repository contains the source for **operonconnect.com**: brand homepage, VPN product page, and about content. The site is built as **fully static HTML** (no server runtime in-repo) and is designed to deploy on **Cloudflare Pages** or any static host.

| Concern | Approach |
|--------|------------|
| **i18n** | JSON dictionaries under `src/i18n/`; default locale Myanmar (`my`), English under `/en/` |
| **SEO** | Organization / product JSON-LD, Open Graph, Twitter cards, sitemap, `robots.txt` |
| **Security** | No secrets in source; `public/_headers` for baseline HTTP headers on Cloudflare Pages |

---

## Tech stack

- **[Astro](https://astro.build)** 4.x — static site generation
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap generation with i18n hints
- **CSS** — global tokens and layout in `public/styles/global.css`
- **Fonts** — Google Fonts (Bebas Neue, DM Sans, JetBrains Mono, Noto Sans Myanmar)

---

## Requirements

- **Node.js** 18.x or newer (LTS recommended)
- **npm** (ships with Node)

---

## Getting started

```bash
# Install dependencies
npm install

# Local development (http://localhost:4321)
npm run dev

# Production build → ./dist
npm run build

# Preview the production build locally
npm run preview
```

### npm scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Astro dev server with hot reload |
| `npm run build` | Static export to `dist/` |
| `npm run preview` | Serve `dist/` locally |

---

## Project layout

```
├── public/
│   ├── _headers          # Cloudflare Pages security / policy headers
│   ├── robots.txt
│   ├── scripts/main.js   # Minimal client JS (nav scroll, reveal)
│   └── styles/global.css
├── src/
│   ├── components/       # Nav, Footer, VpnPageContent, theme & language UI
│   ├── i18n/             # en.json, my.json, loaders, VPN schema helpers
│   ├── layouts/Base.astro
│   └── pages/
│       ├── index.astro           # /
│       ├── about/index.astro     # /about
│       ├── vpn/index.astro       # /vpn
│       └── [lang]/               # /en, /en/about, /en/vpn
├── astro.config.mjs
└── package.json
```

Content strings live in **`src/i18n/en.json`** and **`src/i18n/my.json`**. Routing follows Astro’s `i18n` config in `astro.config.mjs` (`prefixDefaultLocale: false` for Myanmar).

---

## Deployment (Cloudflare Pages)

Connect the repository and use:

| Setting | Value |
|--------|--------|
| **Framework preset** | None (or Astro if you prefer; build is standard npm) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (repository root) |
| **Environment variables** | None required for this project |

Custom domains and TLS are managed in the Cloudflare dashboard. The **`public/_headers`** file is emitted into `dist/` and applied by Pages.

---

## SEO & structured data

- **Organization** JSON-LD on the home pages (`sameAs` includes public GitHub assets)
- **Software / VPN** and **FAQ** JSON-LD on VPN routes where applicable
- **hreflang** alternates in `Base.astro` for Myanmar vs English URLs
- **Sitemap** — `sitemap-index.xml` (and locale entries) via `@astrojs/sitemap`

---

## Related repositories

Public assets and documentation on GitHub:

| Repository | Role |
|------------|------|
| [operon-connect/website](https://github.com/operon-connect/website) | This site |
| [operon-connect/docs](https://github.com/operon-connect/docs) | Public documentation |
| [operon-connect/brand](https://github.com/operon-connect/brand) | Brand kit & logos |

---

## Contact & product links

- **Website:** [operonconnect.com](https://operonconnect.com)
- **VPN (Telegram):** [@OperonConnectBot](https://t.me/OperonConnectBot)
- **Support (Telegram):** [@OperonSupportBot](https://t.me/OperonSupportBot)

---

## License

**Proprietary.** © Operon Connect. All rights reserved.

This repository is published for transparency around the public website source. Redistribution or reuse of the code or assets is not granted unless you have explicit permission from the rights holder.
