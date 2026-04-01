# FinancePro — Claude Code Project Instructions

## Project Overview
FinancePro is a free online finance calculator web app monetized via Google AdSense.
It has two parts built as a single Next.js project:
1. **Landing Page** (SEO-optimized homepage at `/`)
2. **Calculator App** (interactive tool suite at `/calculators`)

Target audience: Global (US, UK, CA) for high AdSense CPC.
Stack: Next.js 14 (App Router), Tailwind CSS, deployed on Vercel.

---

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Cormorant Garamond + DM Mono)
- **Deployment**: Vercel
- **SEO**: next-sitemap, next/head meta tags
- **Ads**: Google AdSense (script in layout, ins tags in pages)

---

## Project File Structure
Build exactly this structure:

```
financepro/
├── CLAUDE.md                        ← this file
├── package.json
├── next.config.js
├── next-sitemap.config.js
├── vercel.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.ico
├── app/
│   ├── layout.jsx                   ← Root layout with AdSense script + Google Fonts
│   ├── page.jsx                     ← Landing page (import FinanceProLanding)
│   ├── calculators/
│   │   └── page.jsx                 ← Calculator app (import FinanceCalc)
│   └── globals.css
├── components/
│   ├── FinanceProLanding.jsx        ← Full SEO landing page component
│   └── FinanceCalc.jsx              ← Full calculator suite component
└── lib/
    └── metadata.js                  ← Shared SEO metadata helpers
```

---

## Coding Standards
- Use React functional components with hooks only
- No class components
- All styling via Tailwind utility classes OR inline styles (match existing component style)
- No TypeScript — plain JSX only
- Keep components self-contained (no prop drilling)
- Mobile-first responsive design

---

## Color Palette (Brand)
- Background: `#080d16`
- Gold accent: `#c9a84c`
- Gold dim: `rgba(201,168,76,0.15)`
- Gold border: `rgba(201,168,76,0.25)`
- Text muted: `#556677`
- Text sub: `#8899aa`
- Card bg: `rgba(255,255,255,0.025)`
- Card border: `rgba(255,255,255,0.07)`

---

## AdSense Placement Rules
Place AdSense `<ins>` tags (or placeholder divs during dev) at these locations:

### Landing Page (`/`):
- Below hero section → 728×90 leaderboard
- Between calculator grid and FAQ → 336×280 rectangle
- Above footer → 728×90 leaderboard

### Calculator App (`/calculators`):
- Above calculator card → 728×90 leaderboard
- Below calculator results → 300×250 rectangle

Use this placeholder div during development:
```jsx
<div className="adsense-placeholder" style={{
  width: '100%', maxWidth: '728px', height: '90px',
  border: '1px dashed rgba(201,168,76,0.25)', borderRadius: '6px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'rgba(201,168,76,0.02)', margin: '0 auto'
}}>
  <span style={{ fontSize: '0.6rem', color: '#334455', letterSpacing: '0.1em' }}>
    ADSENSE 728×90
  </span>
</div>
```

Replace with real AdSense `<ins>` tags after AdSense approval.

---

## SEO Requirements

### Meta tags for `/` (landing page):
```
title: "Free Finance Calculator — Loan, Mortgage, Tax & Investment Tools | FinancePro"
description: "Free online finance calculators for loans, mortgages, compound interest, tax brackets and currency. No signup. Instant results. Trusted by thousands."
keywords: "loan calculator, mortgage calculator, compound interest calculator, tax bracket calculator 2024, currency converter, EMI calculator"
og:title, og:description, og:image, og:url
canonical URL
```

### Meta tags for `/calculators`:
```
title: "Finance Calculators — EMI, Mortgage, Tax, Investment | FinancePro"
description: "Use FinancePro's free calculators: Loan EMI, Mortgage, Compound Interest, US Tax Bracket 2024, and Currency Converter. Instant results, no login required."
```

### Sitemap
Generate `/sitemap.xml` and `/robots.txt` using `next-sitemap`.
Include: `/`, `/calculators`

---

## Performance Requirements
- Lighthouse score target: 90+ on all metrics
- Fonts loaded via `next/font/google`
- Images optimized via `next/image`
- No render-blocking scripts (AdSense loads async)

---

## Git Workflow
After completing each major task, run:
```bash
git add .
git commit -m "descriptive message"
```

Commit messages should follow:
- `feat: add compound interest calculator`
- `seo: add meta tags and sitemap`
- `fix: mobile responsive nav`
- `chore: configure vercel deployment`

---

## Do Not
- Do not use TypeScript
- Do not use Redux or Zustand
- Do not use any paid UI library
- Do not add authentication
- Do not add a database
- Do not remove AdSense placeholder divs
- Do not change the color palette

---

## Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://financepro.io
```

Reference in layout.jsx:
```jsx
<Script
  async
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```
