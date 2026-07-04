# BULADEV + ASA Construction — Site Structure & Build Plan

Companion to `design-analysis.md` (visual system) and `asset-strategy.md` (imagery). This file defines the sitemap, per-page section order, navigation, mobile strategy, SEO plan, and the project file structure.

---

## 1. Architecture decision: small multi-page static site

The reference design is unambiguous: the nav reads **Home · About · Services · Projects · Process** + a "Request Consultation" CTA, and the 4K asset sheet ships a *dedicated hero image per page* (`about-hero`, `services-hero`, `projects-hero`, `process-hero`, `contact-hero`, plus per-service heroes). That mandates a multi-page site, not a one-pager.

```
/
├── index.html        Home            (home-hero)
├── about.html        About           (about-hero)
├── services.html     Services hub    (services-hero)
├── projects.html     Projects        (projects-hero)
├── process.html      Process         (process-hero, blueprint style)
└── contact.html      Contact         (contact-hero)  ← CTA button target
```

The sheet also contains `residential-hero`, `commercial-hero`, and `land-development-hero`, so the design anticipates three **service detail pages** (`services/residential.html`, `services/commercial.html`, `services/land-development.html`). Recommendation: build the six core pages now with the three service cards deep-linking to anchored sections on `services.html` (`services.html#residential` …), and structure that page so the three sections can be split into standalone pages later without changing the nav or URLs on other pages. This keeps the contest deliverable focused while honoring the asset plan.

---

## 2. Global chrome (identical on every page)

**Utility trust bar** — slim, `--clr-black`, full-width, above the header:
`◆ 20 YEARS EXPERIENCE  ◆ LICENSED & INSURED  ◆ LEAN SIX SIGMA  ◆ PROFESSIONAL PROJECT MANAGEMENT` (left) · `(313) 444-9734` as `tel:` link (right). On mobile, collapses to `◆ 20 YEARS EXPERIENCE` + phone only.

**Header** — white, sticky, subtle bottom hairline (`--clr-line`), gains a soft shadow after ~40px scroll:
- Left: BULADEV lockup | thin vertical orange rule | ASA Construction mark (ASA hides ≤480px).
- Center/right: Home · About · Services · Projects · Process. Active page link in `--clr-orange-text` with a 2px orange underline offset below.
- Right: **Request Consultation** button → `contact.html` (per the button contrast rule in `design-analysis.md` §6).
- ≤900px: nav collapses to hamburger → full-screen `--clr-navy` overlay panel, large white links, contact info + dark-version logos at the panel foot.

**Footer** — `--clr-navy`, on every page:
1. Top row: dark-version dual logos + one-line positioning statement.
2. Columns: Services (Residential Construction, Commercial Construction, Land Development, Project Management) · Company (About, Projects, Process, Contact) · Contact ((313) 444-9734, bula@BULADEV.com, www.BULADEV.com).
3. Oversized low-opacity "BULADEV" watermark text behind the columns (as in the mockup), `aria-hidden="true"`.
4. Legal strip: © 2026 BULADEV Building & Land Development + ASA Construction LLC · "Building Success Together".

---

## 3. Per-page section order

### 3.1 `index.html` — Home (the showpiece)

| # | Section | Background | Content |
|---|---|---|---|
| 1 | **Hero** | `--clr-black` + diagonal orange CSS band + photo panel right (home hero photography) | Eyebrow `RESIDENTIAL · COMMERCIAL · DEVELOPMENT` → H1 "Building success. **Together.**" → 2-line supporting paragraph (20 years, disciplined leadership, concept-through-completion) → buttons **Start Your Project →** (primary) + **Explore Services** (outline) → floating white card bottom-right: "BUILT WITH PRECISION / From vision to delivery" |
| 2 | **Trust strip** | white | The four trust markers as compact icon+label items (reinforces utility bar for anyone who missed it) |
| 3 | **About teaser** | white | Eyebrow `ABOUT BULADEV + ASA` → H2 "Built on experience. Managed with precision." → image collage left with orange "20 YEARS" circular badge → 4-item checklist (residential & commercial expertise; development-focused planning; Lean Six Sigma efficiency; professional project leadership) → dark button "Discover Our Capabilities" → `about.html` |
| 4 | **Services** | `--clr-offwhite` | Eyebrow `WHAT WE BUILD` → H2 "Construction and development solutions." → three numbered cards (01 Residential Construction / 02 Commercial Construction / 03 Land Development), each: photo top, title, 2-line copy, `EXPLORE SERVICE →` in `--clr-orange-text` → `services.html#…` |
| 5 | **Quality / Lean Six Sigma** | `--clr-navy` + blueprint texture | Eyebrow `THE BULADEV ADVANTAGE` → H2 "Better systems create better builds." → intro on certification & PM discipline → 2×2 white cards: 01 Define · 02 Measure · 03 Analyze · 04 Control → orange-dot callout "Quality is managed — not left to chance." |
| 6 | **Process preview** | white | Eyebrow `HOW WE WORK` → H2 "A clear path from concept to completion." → horizontal 4-step timeline: 01 Discover → 02 Plan → 03 Build → 04 Deliver (step 02 filled orange in the mock; on the live site the filled state can progress on scroll) → orange banner strip: `CLOSE COMMUNICATION AT EVERY STAGE — Scope · Schedule · Cost · Quality · Safety · Closeout` → link to `process.html` |
| 7 | **Projects preview** | white | Eyebrow `FEATURED WORK` → H2 "Spaces built for purpose and performance." → asymmetric 3-image grid with caption overlays ("Homes designed for lasting value", "Modern business environments", "Coordinated from the ground up") → button to `projects.html` |
| 8 | **CTA band** | `--clr-black` + diagonal accent | H2 "Ready to build **something successful?**" → one supporting line → phone button `(313) 444-9734` + outline button `bula@BULADEV.com` |
| 9 | Footer | `--clr-navy` | as §2 |

### 3.2 `about.html`
Hero (about-hero photography, scrim, H1 "Built on experience. Managed with precision.") → company story (BULADEV = development arm, ASA = construction arm — the partnership explained) → the four trust markers expanded to short paragraphs → leadership/values → Lean Six Sigma section (reuse home §5 component) → CTA band → footer.

### 3.3 `services.html`
Hero (services-hero) → intro → three full-width alternating sections, each an anchor target:
`#residential` (residential-hero imagery) · `#commercial` (commercial-hero) · `#land-development` (land-development-hero) — each: H2, deliverables list, "what's included" bullets, mini-CTA. → **Professional Project Management** section (the 4th core service — runs across all three, styled distinctly on navy) → CTA band → footer.

### 3.4 `projects.html`
Hero (projects-hero) → filterable-looking grid (Residential / Commercial / Development categories; static grid is fine — no JS filter needed for v1) → each card: photo, category tag in orange, caption → process cross-link band → CTA → footer. *Note: only generic photography is available; caption projects as capability statements ("Modern business environments"), never as named fake case studies.*

### 3.5 `process.html`
Hero (process-hero blueprint art, navy) → the 4 phases as full detail rows (Discover / Plan / Build / Deliver — each with numbered marker, what happens, what the client receives) → "Close communication at every stage" banner → DMAIC quality grid (reuse component) → CTA → footer.

### 3.6 `contact.html`
Hero (contact-hero, short) → two-column: left = contact form (name, email, phone, project type select [Residential / Commercial / Land Development / Other], message) with a `mailto:`-composing fallback since there's no backend; right = direct contact card on navy (phone, email, website, service area) → trust markers strip → footer. The mock's final frame "Let's create **something successful.**" is the H1.

---

## 4. Mobile strategy (the contest title says *Responsive* — this is graded)

- **Breakpoints:** 480 / 768 / 900 / 1200px, mobile-first CSS. Fluid type via `clamp()` (scale in `design-analysis.md` §4); fluid section padding `clamp(3rem, 8vw, 6.5rem)`.
- **Hero on mobile:** single column — dark background keeps a *narrower, steeper* diagonal band as a right-edge accent (per the phone mockups in the walkthrough: the band survives, reduced). Photo panel becomes a scrimmed background or a cropped strip below the copy. Floating card becomes a static full-width card under the buttons.
- **Utility bar:** one trust marker + phone link only. Header: logo + hamburger; ASA mark hides ≤480px.
- **Cards:** 3-up → 1-up stack (2-up at 768px). DMAIC 2×2 → 1×4. Process timeline rotates vertical: numbers become a left rail with a connecting line.
- **Projects grid:** asymmetric grid → single column, preserving image aspect ratios via `aspect-ratio`.
- **CTA band:** phone button becomes full-width and first (thumb-reachable); tap targets ≥44px everywhere.
- **Performance on mobile:** hero image served via `srcset` (640/1024/1600/2400w), `<link rel="preload">` for the hero, `loading="lazy"` + `decoding="async"` below the fold, fonts loaded with `font-display: swap` and preconnect. Target: LCP < 2.5s on 4G, CLS ≈ 0 (all images with explicit `width`/`height`).
- Test matrix: 360×800 (small Android), 390×844 (iPhone), 768 (tablet portrait), 1024 (tablet landscape), 1440+, plus landscape-phone for the hero.

---

## 5. SEO strategy

- **Local signal:** the (313) area code is Detroit, Michigan. Confirm the service area with the client; assuming Detroit metro, target "construction company Detroit MI", "land development Michigan", "residential construction Detroit", "commercial general contractor Detroit". Bake the confirmed city into titles, H1-adjacent copy, and schema `areaServed`.
- **Per-page `<title>` / meta description** (unique, ≤60/≤155 chars), e.g.:
  - Home: `BULADEV + ASA Construction | Building & Land Development — Detroit, MI`
  - Services: `Residential, Commercial & Land Development Services | BULADEV`
  - Process: `Our 4-Phase Construction Process | BULADEV + ASA Construction`
- **One `<h1>` per page**, keyword-bearing; section `<h2>`s follow the copy deck above.
- **JSON-LD** on every page: `GeneralContractor` (subtype of LocalBusiness) with `name`, `telephone: +13134449734`, `email`, `url`, `slogan: "Building Success Together"`, `areaServed`, `knowsAbout` (residential/commercial/land development/project management), plus `BreadcrumbList` on subpages.
- **Open Graph + Twitter cards** with a 1200×630 branded share image (dark bg, dual logo, tagline — to be produced in the asset step).
- `sitemap.xml`, `robots.txt`, `rel=canonical` on each page, clean root-relative URLs, no hash-only navigation for primary pages.
- Descriptive `alt` text on content images (per-asset table in `asset-strategy.md`); background/decorative images excluded from the accessibility tree.
- Performance is ranking: compressed WebP/AVIF, preloaded LCP, zero render-blocking JS (single small deferred `main.js`).

---

## 6. Proposed project structure

```
Construction Company Needs Responsive Website/
├── Backgrounds_4K_Preview.jpg            ← original — untouched
├── Logos_HD_Preview.jpg                  ← original — untouched
├── WhatsApp Image ... 10.22.05 PM.jpeg   ← original — untouched
├── WhatsApp Image ... 10.22.21 PM.jpeg   ← original — untouched
├── docs/
│   ├── design-analysis.md
│   ├── site-structure.md
│   └── asset-strategy.md
├── index.html
├── about.html
├── services.html
├── projects.html
├── process.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── main.css          (tokens :root block first, then base → layout → components → pages)
│   ├── js/
│   │   └── main.js           (nav toggle, sticky header, scroll reveal w/ reduced-motion guard — <5KB)
│   └── img/
│       ├── logos/            (logo-light.png, logo-dark.png, asa-light.png, asa-dark.png, favicon.svg)
│       ├── heroes/           (home-hero-{640,1024,1600,2400}.webp + .jpg fallback, about-hero-…, etc.)
│       ├── cards/            (card-residential.webp, card-commercial.webp, card-land.webp, …)
│       ├── textures/         (blueprint-navy.webp — from process-hero art)
│       └── og/               (og-share-1200x630.jpg)
├── sitemap.xml
└── robots.txt
```

Conventions: kebab-case filenames; one CSS file (small enough not to warrant a build step); no framework, no jQuery, no CSS library — hand-written CSS is required to hit this design precisely and keeps the contest deliverable dependency-free and instantly hostable.

---

## 7. Build order (when the build step is approved)

1. Extract/derive assets per `asset-strategy.md` (crops, WebP pipeline, logo cutouts).
2. `main.css` design tokens + base typography + the global chrome (utility bar, header, mobile nav, footer).
3. Home hero with the CSS diagonal band — the hardest visual; get it pixel-faithful at all breakpoints first.
4. Remaining home sections top-to-bottom (each becomes a reusable component for subpages).
5. Subpages (about → services → process → projects → contact), reusing components.
6. SEO layer (titles, meta, JSON-LD, sitemap, OG image), accessibility pass (keyboard walk, contrast audit, reduced-motion), performance pass (Lighthouse ≥90 on all four categories).
