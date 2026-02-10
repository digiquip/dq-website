# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DigiQuip website built with Docusaurus v3.5.2 - a React-based static site generator. The site is bilingual (Norwegian default, English supported) and deployed to GitHub Pages at digiquip.no.

## Commands

```bash
yarn start              # Start local development server
yarn build              # Build static site to /build
yarn serve              # Serve built site locally
yarn clear              # Clear Docusaurus cache
yarn deploy             # Deploy to gh-pages
yarn write-translations # Generate translation files
```

## Architecture

### Content Structure
- **docs/**: Markdown documentation files organized by topic (KVIPP, legal, technical, getting-started)
- **blog/**: Blog posts in dated folders
- **data/**: JavaScript files containing page content (product info, team lists, partner logos, form configurations) - content updates typically happen here rather than in components

### Source Code
- **src/pages/**: Page components (homepage, product pages, booking forms)
- **src/components/**: Reusable React components (Banner, SwiperSlider, ContactUs, etc.)
- **src/theme/**: Docusaurus theme overrides (BlogLayout, Navbar, DocItem, etc.)
- **src/css/custom.css**: Global styles and Infima theme variable overrides

### Configuration
- **docusaurus.config.js**: Main site configuration (navbar, footer, i18n, plugins)
- **sidebars.js**: Documentation sidebar structure (auto-generated from docs/)
- **i18n/**: Translation files for Norwegian (nb) and English (en)

### Static Assets
- **static/img/**: Images including brand assets, article images
- **static/team_imgs/**: Team member photos
- **static/fonts/**: Custom fonts (Lato, Sansita)

## Key Patterns

### Component Pattern
Components use Docusaurus conventions:
```javascript
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
```

### Animations
Homepage and product pages use GSAP with ScrollTrigger for scroll-based animations.

### Styling
- CSS variables defined in custom.css for theme colors
- Primary color: #112539 (navy), accent: #f05a09 (orange)
- Light mode only (dark mode disabled)

## Deployment

GitHub Actions handles deployment:
- Push to `main` triggers production deployment to gh-pages
- Pull requests run build validation only
