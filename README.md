# Operon Connect — Website

Official marketing site for **[Operon Connect](https://operonconnect.com)** — static, bilingual (Myanmar / English), and tuned for performance and SEO.

[![CI](https://github.com/operon-connect/website/actions/workflows/ci.yml/badge.svg)](https://github.com/operon-connect/website/actions/workflows/ci.yml)
[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Node](https://img.shields.io/badge/node-24_LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

---

## Overview

This repository contains the source for **operonconnect.com**: brand homepage, VPN product page, and about content. The site is built as **fully static HTML** (no server runtime in-repo) and is designed to deploy on **Cloudflare Pages** or any static host.

| Concern      | Approach                                                                                |
| ------------ | --------------------------------------------------------------------------------------- |
| **i18n**     | JSON dictionaries under `src/i18n/`; default locale English (`/`), Myanmar under `/my/` |
| **SEO**      | Organization / product JSON-LD, Open Graph, Twitter cards, sitemap, `robots.txt`        |
| **Security** | No secrets in source; `public/_headers` for baseline HTTP headers on Cloudflare Pages   |

---

## Tech stack

- **[Astro](https://astro.build)** 6.x — static site generation
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap generation with i18n hints
- **CSS** — global tokens and layout in `public/styles/global.css`
- **Fonts** — Google Fonts (Bebas Neue, DM Sans, JetBrains Mono, Noto Sans Myanmar)

---

## Requirements

- **Node.js** 24.x (LTS)
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

| Script                 | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start Astro dev server with hot reload                        |
| `npm run build`        | Static export to `dist/`                                      |
| `npm run preview`      | Serve `dist/` locally                                         |
| `npm run check`        | Type-check with `astro check`                                 |
| `npm run lint`         | ESLint (Astro + TypeScript)                                   |
| `npm run format`       | Format with Prettier                                          |
| `npm run format:check` | Verify formatting (CI-friendly)                               |
| `npm run validate`     | `format:check` → `lint` → `check` → `build` (run before push) |
| `npm run audit`        | Report known vulnerabilities in all dependencies              |
| `npm run audit:prod`   | Audit production dependencies only (CI-aligned)               |
| `npm run audit:ci`     | Fail on high+ severity (used in CI security job)              |

### CI & security

GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) runs on every push and pull request to `main`:

| Job                   | What it runs                                        |
| --------------------- | --------------------------------------------------- |
| **Quality**           | `npm run validate` (format, lint, typecheck, build) |
| **Security**          | `npm run audit:prod` and `npm run audit:ci`         |
| **Dependency review** | GitHub dependency review on pull requests           |

[Dependabot](.github/dependabot.yml) opens weekly npm update PRs (patch/minor; Astro major upgrades are ignored until you opt in).

`audit:ci` fails on **moderate** or worse (all dependencies). Production-only checks use `npm run audit:prod`. A `yaml` override in `package.json` pins a patched version for `@astrojs/check`’s language-server toolchain.

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
│       └── [lang]/               # /my, /my/about, /my/vpn
├── astro.config.mjs
└── package.json
```

Content strings live in **`src/i18n/en.json`** and **`src/i18n/my.json`**. Routing follows Astro’s `i18n` config in `astro.config.mjs` (`defaultLocale: en`, Myanmar prefixed at `/my/`).

---

## Deployment (Cloudflare Pages)

Connect the repository and use:

| Setting                    | Value                                                         |
| -------------------------- | ------------------------------------------------------------- |
| **Framework preset**       | None (or Astro if you prefer; build is standard npm)          |
| **Build command**          | `npm run build`                                               |
| **Build output directory** | `dist`                                                        |
| **Root directory**         | `/` (repository root)                                         |
| **Node.js version**        | `24` (match CI and `.node-version`)                           |
| **Install command**        | `npm ci --omit=dev` (or `npm ci --omit=dev --ignore-scripts`) |
| **Environment variables**  | None required for this project                                |

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

| Repository                                                          | Role                 |
| ------------------------------------------------------------------- | -------------------- |
| [operon-connect/website](https://github.com/operon-connect/website) | This site            |
| [operon-connect/docs](https://github.com/operon-connect/docs)       | Public documentation |
| [operon-connect/brand](https://github.com/operon-connect/brand)     | Brand kit & logos    |

---

## Contact & product links

- **Website:** [operonconnect.com](https://operonconnect.com)
- **VPN (Telegram):** [@OperonConnectBot](https://t.me/OperonConnectBot)
- **Support (Telegram):** [@OperonSupportBot](https://t.me/OperonSupportBot)

---

## License

**Proprietary.** © Operon Connect. All rights reserved.

This repository is published for transparency around the public website source. Redistribution or reuse of the code or assets is not granted unless you have explicit permission from the rights holder.
