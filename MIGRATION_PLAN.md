# DigiQuip Website: Migration to Astro

> Plan created: March 2026. To be executed in a new repo when ready.

## Scope

Consolidate three platforms into one Astro site:

- **Docusaurus** (digiquip.no) -- 17 pages, 48 docs, 19 blog posts, bilingual
- **Squarespace** (kvipp.no + 1-2 others) -- parallax product pages
- **Elfsight** -- forms, price list widgets (replaced with native HTML forms)

## Key Decisions

- **Astro static output (SSG)** -- no server needed, deploys to GitHub Pages as today
- **Zero React** -- all components in `.astro` (HTML + scoped CSS + minimal JS)
- **Forms** -- plain HTML forms with [Formspree](https://formspree.io/) for email delivery (free tier: 50 submissions/month; paid: $10/month unlimited). No backend code needed
- **Parallax/scroll effects** -- CSS `scroll-snap` + Intersection Observer API (vanilla JS, no GSAP dependency)
- **i18n** -- Astro's [built-in i18n routing](https://docs.astro.build/en/guides/internationalization/) with `/en/` prefix for English, Norwegian as default
- **Markdown** -- Astro content collections for docs and blog (keeps all existing `.md` files as-is)
- **CSS** -- fresh, clean CSS written from scratch based on design tokens. The 114K-line `custom.css` is discarded entirely

## Design System Foundation

Based on existing brand:

- **Colors:** Primary navy `#112539`, accent orange `#f05a09`, white, light grays
- **Fonts:** Sansita (headings), Lato (body) -- loaded from `/fonts/`
- **Components:** Consistent spacing scale, border-radius, shadows, button styles
- CSS custom properties for all tokens so theming is centralized

## Architecture

```
src/
├── layouts/
│   ├── BaseLayout.astro          # Nav, footer, fonts, meta
│   ├── MarketingPage.astro       # Standard marketing page wrapper
│   ├── ParallaxPage.astro        # Parallax product page (kvipp.no style)
│   ├── DocLayout.astro           # Documentation with sidebar
│   └── BlogLayout.astro          # Blog list and post layouts
├── components/
│   ├── Hero.astro                # Hero / banner section
│   ├── Steps.astro               # Numbered steps section (for parallax pages)
│   ├── FAQ.astro                 # Accordion FAQ section
│   ├── Form.astro                # Reusable form component (Formspree)
│   ├── PriceTable.astro          # Native price table (replaces Elfsight widget)
│   ├── VideoEmbed.astro          # YouTube / video player
│   ├── LogoCarousel.astro        # Partner logo carousel
│   ├── DocSidebar.astro          # Auto-generated doc sidebar
│   ├── TagFilter.astro           # Blog tag filter
│   ├── SocialShare.astro         # Facebook / LinkedIn share
│   └── ...
├── content/
│   ├── docs/                     # Markdown docs (migrated from Docusaurus)
│   └── blog/                     # Markdown blog posts (migrated from Docusaurus)
├── pages/
│   ├── index.astro               # Homepage
│   ├── contact.astro             # Contact page
│   ├── price.astro               # Price page
│   ├── integrations.astro        # Integrations page
│   ├── signin.astro              # Sign in page
│   ├── kvipp.astro               # Kvipp product page (parallax)
│   ├── european-pledge.astro     # EU pledge page
│   ├── docs/[...slug].astro      # Dynamic doc routes
│   ├── blog/[...slug].astro      # Dynamic blog routes
│   └── en/                       # English locale mirror
├── data/
│   ├── team.js                   # Team member list
│   ├── partners.js               # Partner logos
│   ├── prices.js                 # Price data
│   └── navigation.js             # Nav items (both locales)
├── i18n/
│   ├── nb.json                   # Norwegian UI strings
│   └── en.json                   # English UI strings
└── styles/
    ├── global.css                # Reset, tokens, typography
    └── components/               # Component-specific styles (if needed)
```

## Pages to Build

### Marketing pages (from Docusaurus)

- Homepage (`/`) -- hero, features, customer stories, partner logos, CTA
- Contact (`/contact`) -- team list, contact form, company info
- Price (`/price`) -- price table (native HTML, replaces Elfsight widget)
- Integrations (`/integrations`) -- grid with expandable cards
- Sign in (`/signin`) -- links to DigiQuip and Kvipp login
- European Pledge (`/european-pledge`) -- static table
- Event pages (2) -- event info + registration form
- Order pages (3) -- order forms for Onlet, K-REG, Policy

### Parallax product pages (from Squarespace)

- Kvipp (`/kvipp`) -- numbered steps, FAQ accordions, video, CTAs
- 1-2 additional product pages using the same parallax template
- Existing product pages (Sånn, Trygg Maskin, Policy) can use either template

### Documentation (from Docusaurus)

- 48 pages with auto-generated sidebar from folder structure
- Admonitions (`:::note`, `:::tip`) via remark plugin
- Code syntax highlighting via Shiki (built into Astro)
- Tabs component for price page docs

### Blog (from Docusaurus)

- 19 posts with tag filtering, pagination, author info, reading time
- Social sharing (Facebook, LinkedIn)

## Forms (replacing Elfsight)

| Form                    | Fields                            | Destination          |
| ----------------------- | --------------------------------- | -------------------- |
| Contact                 | Name, email, company, message     | support@digiquip.no  |
| Book Demo               | Name, email, company, phone, role | sales@digiquip.no    |
| Order Onlet             | Name, email, company, details     | sales@digiquip.no    |
| Order K-REG             | Name, email, company, details     | sales@digiquip.no    |
| Order Policy            | Name, email, company, details     | sales@digiquip.no    |
| Event registration (x2) | Name, email, company             | sales@digiquip.no    |

All forms use one reusable `<Form>` Astro component with configurable fields. Formspree handles delivery -- no backend code needed.

## Migration Phases

### Phase 1: Foundation (days 1-3)

- Scaffold Astro project in new repo
- Set up design system (CSS tokens, fonts, base layout)
- Build navbar and footer
- Configure i18n routing
- Set up GitHub Actions for Pages deployment

### Phase 2: Marketing pages (days 4-7)

- Build reusable components (Hero, Form, PriceTable, VideoEmbed, LogoCarousel)
- Migrate all marketing pages
- Build native forms with Formspree
- Build price table

### Phase 3: Parallax product pages (days 8-10)

- Build parallax page template (hero, numbered steps, FAQ accordion, scroll animations)
- Recreate kvipp.no page
- Build 1-2 additional product pages

### Phase 4: Documentation (days 11-13)

- Set up content collections for docs
- Build doc layout with auto-generated sidebar
- Migrate all 48 doc pages (mostly copy `.md` files)
- Add admonition support via remark plugin
- Add code highlighting

### Phase 5: Blog (days 14-16)

- Set up blog content collection
- Build blog list (with tag filter), post detail, pagination
- Migrate 19 blog posts (copy `.md` files + images)
- Add reading time, author info, social share

### Phase 6: i18n and polish (days 17-19)

- Translate navigation, footer, UI strings
- Migrate English doc translations
- Test all bilingual routes
- Cross-browser QA, responsive testing, performance audit

### Phase 7: Cutover (day 20)

- Point digiquip.no DNS to new GitHub Pages deployment
- Set up redirects for any changed URLs
- Decommission Squarespace and Elfsight subscriptions

## What You Gain

- **One platform** instead of three (Docusaurus + Squarespace + Elfsight)
- **Zero third-party JS** for forms (faster loads, no Elfsight cost)
- **Clean CSS** instead of 114K lines of bloat
- **Full control** over product pages (no Squarespace limitations)
- **Simpler stack** -- HTML, CSS, minimal JS, Markdown
- **Same hosting** -- GitHub Pages, same deployment model

## Reference: Current Codebase Stats

| Category        | Count                                     |
| --------------- | ----------------------------------------- |
| Marketing pages | 17                                        |
| Blog posts      | 19 (March 2024 - December 2025)          |
| Doc pages       | 48                                        |
| Languages       | 2 (Norwegian default, English)            |
| i18n files      | 66                                        |
| React components| 19 (all replaced by Astro components)     |
| Theme overrides | 12 (eliminated -- Astro has no theme layer)|
| Elfsight widgets| 14+ embeds across pages and docs          |
| CSS lines       | 114,318 (replaced with clean ~1-2K lines) |
