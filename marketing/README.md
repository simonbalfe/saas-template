# Marketing Template

A modern marketing website template built with Astro, React, and Tailwind CSS v4. Designed for agencies, SaaS products, and service businesses.

## Tech Stack

- **Astro 5** - Static site generation with islands architecture
- **React 19** - Interactive components
- **Tailwind CSS v4** - Styling with the new Vite plugin
- **MDX** - Blog posts with component support
- **Motion** - Animations (Framer Motion)

## Quick Start

```bash
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── components/
│   ├── meta/         # SEO, favicons, analytics, theme
│   ├── molecules/    # Small reusable components (prose, dates, TOC)
│   ├── organisms/    # Page sections (hero, pricing, footer, etc.)
│   ├── templates/    # Full page templates
│   └── ui/           # Base UI components (buttons, cards, badges)
├── content/
│   └── blog/         # Markdown blog posts
├── layouts/          # Astro layouts (base, blog, page)
├── lib/              # Utilities and constants
├── pages/            # Routes
│   ├── blog/         # Blog listing and posts
│   └── index.astro   # Homepage
└── utils/            # Helper functions
```

## Configuration

All site-wide settings are in `src/consts.ts`:

- **SITE** - Name, URL, logo, description
- **METADATA** - SEO defaults, Open Graph, Twitter cards
- **NAVIGATION** - Header links and CTA
- **HERO** - Homepage hero section content
- **PRICING** - Pricing tiers and features
- **CTA** - Call-to-action section
- **APPS** - Feature flags (blog settings, etc.)

## Components

### Atomic Design

Components follow atomic design principles:

- **ui/** - Atoms: buttons, badges, cards, tables
- **molecules/** - Small compositions: formatted dates, prose wrapper
- **organisms/** - Page sections: hero, navigation, pricing, footer
- **templates/** - Full page layouts

### Key Components

| Component | Description |
|-----------|-------------|
| `hero.tsx` | Homepage hero with badge, headline, CTAs |
| `navigation.tsx` | Responsive header with mobile menu |
| `pricing.tsx` | Pricing cards with feature lists |
| `services.tsx` | Services/features showcase |
| `social-proof.tsx` | Testimonials and results |
| `footer.tsx` | Site footer with links |
| `blog-carousel.tsx` | Featured blog posts carousel |

## Blog

Blog posts live in `src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: "2024-01-15"
tags: ["tag1", "tag2"]
---

Content here...
```

## Customization

1. Update `src/consts.ts` with your content
2. Replace images in `public/images/`
3. Update `public/logo.svg` and `public/og-image.png`
4. Modify component styles in `src/global.css`

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm knip` | Find unused code |
