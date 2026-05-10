# Operon Connect — Website

> operonconnect.com official website  
> Built with [Astro](https://astro.build) — Static Site Generator

## Structure

```
src/
├── layouts/
│   └── Base.astro          # Base layout with SEO meta tags
├── components/
│   ├── Nav.astro            # Navigation
│   └── Footer.astro         # Footer
└── pages/
    ├── index.astro          # Brand homepage (/)
    ├── vpn/
    │   └── index.astro      # VPN service page (/vpn)
    ├── about/
    │   └── index.astro      # About page (/about)

public/
├── styles/global.css
├── scripts/main.js
├── robots.txt
└── favicon.svg
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Brand Home | `/` | Operon Connect brand homepage |
| VPN Service | `/vpn` | VPN service page with plans |
| About | `/about` | Mission, vision, values |

## Setup

```bash
npm install
npm run dev      # localhost:4321
npm run build    # output to ./dist/
npm run preview  # preview build
```

## Deploy

Recommended: **Cloudflare Pages** (free)

```
Build command: npm run build
Output dir: dist
```

## SEO

- Structured data (Organization, SoftwareApplication, FAQPage)
- Open Graph + Twitter Card
- Auto sitemap via @astrojs/sitemap
- robots.txt
- Semantic HTML
- Myanmar + English bilingual

## Add New Service Page

```bash
# Create new service folder
mkdir src/pages/new-service
# Copy vpn/index.astro as template
cp src/pages/vpn/index.astro src/pages/new-service/index.astro
# Edit content
```

## Telegram bots

- VPN / signup: [@OperonConnectBot](https://t.me/OperonConnectBot)
- Support: [@OperonSupportBot](https://t.me/OperonSupportBot)
