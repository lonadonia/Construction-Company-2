# BULADEV + ASA Construction — Website

A premium, responsive one-page website for **BULADEV Building & Land Development** and **ASA Construction LLC** — residential construction, commercial construction, land development, and professional project management.

**Core message:** *Building Success Together*

Built with plain **HTML + CSS + vanilla JavaScript**. No frameworks, no build step, no libraries. The only external request is Google Fonts (Archivo + Inter), with full system-font fallbacks.

---

## Open the website locally

No server required — double-click `index.html` or open it in any modern browser.

For a local server (nicer URLs, correct MIME types):

```bash
# from this folder — pick whichever you have
python -m http.server 8080
npx serve .
```

Then visit `http://localhost:8080`.

---

## Folder structure

```
├── index.html                  Homepage (hero, trust strip, services, stats, process, portfolio)
├── about.html                  About — the two companies, values, PM philosophy, audiences
├── services.html               Services hub — overview, capability matrix, detail links
├── residential.html            Residential construction detail page
├── commercial.html             Commercial construction detail page
├── land-development.html       Land development detail page
├── contact.html                Contact form + FAQ
├── README.md
├── Backgrounds_4K_Preview.jpg  ┐
├── Logos_HD_Preview.jpg        │ original client reference files
├── WhatsApp Image … .jpeg (×2) ┘ (untouched — do not edit or delete)
├── assets/
│   ├── css/style.css           design tokens + all styling
│   ├── js/main.js              menu, smooth scroll, scrollspy, FAQ,
│   │                           form validation, scroll reveals
│   └── images/
│       ├── favicon.svg
│       ├── reference/          byte-identical copies of the originals
│       └── generated/          all production imagery (see below)
└── docs/
    ├── design-analysis.md      brand/visual system decoded from references
    ├── site-structure.md       architecture & section plan
    ├── asset-strategy.md       image usage & optimization strategy
    ├── generated-assets.md     per-asset provenance table
    ├── ui-ux-polish-report.md  final design-review pass
    └── final-checklist.md      pre-delivery QA checklist
```

## Generated assets (in `assets/images/generated/`)

- **Logos:** `logo-light.png` (header, transparent), `logo-dark.png` (footer, transparent)
- **Hero:** `hero-bg-hq.webp` + `-1024` / `-640` responsive variants (preloaded)
- **Sections:** `about-image-hq`, `residential-card-hq`, `commercial-card-hq`, `land-card-hq`, `process-bg-hq`, `projects-commercial-hq`, `projects-residential-hq`, `projects-land-hq`, `cta-bg-hq` (each with responsive variants)
- **Decor:** `blueprint-grid.svg`, `diagonal-orange.svg`, `orange-pattern.svg`
- **Social:** `og-image-hq.jpg` (1200×630 Open Graph card)
- Earlier non-`hq` crops and the raw tile crops from the reference sheet are kept as source material; they are not loaded by the page.

Full provenance table: `docs/generated-assets.md`.

---

## Design notes

- **Palette** (pixel-sampled from the client's own assets): orange `#F4791F` (+`#D9640E` deep, `#B4540A` text-safe), near-black `#17181B`, navy `#111B25`, charcoal `#1F2025`, white/off-white neutrals. All defined as CSS variables at the top of `style.css`.
- **Type:** Archivo (display, 600–900) + Inter (body). Fluid scale steps down at 1100 / 720 / 600px.
- **Signature motifs:** diagonal orange bands (pure CSS, never baked into layout images), alternating dark/white section rhythm, numbered structure (services 01–04, process 01–04), floating white cards, blueprint-grid textures on dark sections.
- **Accessibility:** WCAG-checked contrast, visible focus states, keyboard-operable menu/FAQ/form, `prefers-reduced-motion` honored, semantic landmarks, meaningful alt text.

## Customization notes

- **Colors/spacing:** edit the `:root` tokens at the top of `assets/css/style.css`.
- **Copy:** all text lives in `index.html` — sections are clearly commented (`===== 3. Hero =====` etc.).
- **Images:** replace files in `assets/images/generated/` keeping the same filenames and approximate aspect ratios; nothing else needs to change.
- **Form destination:** the form composes an email to `bula@BULADEV.com` via `mailto:` (see the bottom of `main.js`). To use a form service instead, point the form `action` at your endpoint and remove the `mailto:` block.
- **Nav/pages:** the site is multi-page (see structure above). Header/footer are repeated per page — when editing them, apply the change to all seven HTML files. Homepage sections keep ids (`#about #services #process #projects`) so the nav's Projects/Process anchors and old links continue to work.

## Contact information used on the site

- Phone: **(313) 444-9734** (`tel:+13134449734`)
- Email: **bula@BULADEV.com**
- Website: **www.BULADEV.com**

## Deployment (static hosting)

The site is fully static — upload the folder (minus `docs/` and the root reference JPGs if you want a minimal deploy; `index.html` + `assets/` is sufficient) to any static host:

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder or connect a repo; no build command, publish directory = root.
- **GitHub Pages:** push and enable Pages on the repo root.
- **Classic hosting (cPanel/FTP):** upload `index.html` and `assets/` to `public_html/`.

Post-deploy checklist: point `www.BULADEV.com` at the host, confirm HTTPS, and update the `og:url`/`canonical` tags if the final domain differs. `index.html` references assets with relative paths, so the site works from any subdirectory.
