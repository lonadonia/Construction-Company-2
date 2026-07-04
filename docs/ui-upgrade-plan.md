# UI Upgrade Plan — Aligning to the New References

Execution plan for evolving the current one-page site into the multi-page system defined by `01_Homepage.jpg` – `04_Residential.jpg`, while keeping everything that already works (design tokens, a11y, performance, JS behaviors, imagery).

---

## 1. Target architecture

```
index.html              Homepage            ← 01_Homepage.jpg
about.html              About               ← 02_About.jpg
services.html           Services hub        ← 03_Services.jpg
residential.html        Residential detail  ← 04_Residential.jpg
commercial.html         Commercial detail   ← 04 template, adapted
land-development.html   Land Dev detail     ← 04 template, adapted
contact.html            Contact + form + FAQ (preserves existing components)
```

**Navigation (all pages):** Home · About · Services · Projects (`index.html#projects`) · Process (`index.html#process`) · Contact + "Request Consultation" → `contact.html`. Active page marked with `.active` + `aria-current="page"` directly in each page's markup (no JS needed cross-page; scrollspy stays for on-page anchors on the homepage).

**Footer (all pages):** brand + description | Company (About, Projects, Our Process, Contact) | Services (Residential, Commercial, Land Development, All Services) | Contact (phone, email, site, "Licensed & insured", "20 years of experience") | bottom bar.

## 2. New shared components (CSS)

| Component | Spec |
|---|---|
| `.page-hero` | Photo bg (cover, scrim `90deg` dark→transparent), breadcrumb caps line, eyebrow, H1 `clamp(2.4–3.4rem)`, lede ≤62ch, button pair, `border-bottom: 4px solid orange`, min-height ≈ 460px desktop / auto mobile |
| `.crumbs` | `.72rem` caps, gray-300, "/" separators, current segment white |
| `.check-list` | flex rows; 22px circular chip `rgba(orange,.14)` + orange ✓; `.check-list--dark` variant for navy sections |
| `.trust-strip` | white band under home hero; 4 columns w/ hairline dividers; 44px chip (20 / ✓ / L6 / PM) + title + line; collapses 4→2→1 |
| `.media-card` + `.float-card` | rounded-16 photo w/ soft shadow; white mini-card overlapping bottom-right: big orange figure + 2 lines |
| `.stats-band` panel | inside dark section: `#1D2026` rounded-14 panel, 4 columns (20 / 100% / L6σ / PM), rgba-white column separators |
| `.pcard` grid | 6 numbered process cards, 3×2 → 2 → 1; hairline border, orange left accent, orange `01` label |
| `.chip` | 44px rounded-10, `rgba(orange,.14)` bg, orange-text glyph (number or letter), Archivo 800 |
| `.matrix` | table in `overflow-x:auto` wrapper (min-width 640px); caps header row on off-white; orange ✓ cells; nuance text in gray |
| `.duo-card` | white card w/ actual logo image (h≈40), title, description — About "Clear roles" |
| `.quote-card` | white, 5px orange left bar, 1.05–1.15rem quote, small caps attribution |
| `.flow-panel` | dark rounded panel, 4 columns: big display digit + label (service detail pages) |
| `.cta-glow` | navy band; layered radial-gradients bronze/orange glow right; flex head-left / button-right; stacks centered on mobile |
| `.portfolio-grid` | 3-col grid, `grid-auto-rows≈215px`; tile 1 spans 2×2; caption bar w/ title + one-liner over gradient scrim |
| `.value-card` / `.aud-card` | hairline-bordered minimal cards; audience cards get number chips |

## 3. Page builds

- **Homepage:** centered branded hero (transparent dual-logo lockup, headline, "Building Success Together" subline, LEARN MORE → services) → trust strip → intro split (checks, 2 CTAs, photo + "20+" float) → 3 service cards (cream band, EXPLORE → detail pages) → dark stats band → 6-step process grid (+ keep the orange communication banner) → 6-tile portfolio (`#projects`) → glow CTA → footer. Section ids preserved: `#about #services #process #projects` so old anchors keep working.
- **About:** hero → story split ("2" float) → duo cards → values 4-up → dark PM section + quote card → audience 6-grid → glow CTA.
- **Services:** hero → 6-card overview (R/C/L + 01/02/03) → capability matrix → dark discipline section (blueprint media + "4" float) → 3 detail-page cards (real links) → glow CTA.
- **Service details (3):** hero → approach split (6 checks + themed float card: HOME / WORK / LAND) → 6-service grid → dark 4-step flow panel → quality split (5 checks) → glow CTA. Commercial & Land adapt copy, imagery, and service lists from the residential template.
- **Contact:** compact hero → split: contact info + trust facts | existing form (validation intact) → FAQ accordion (moved from homepage, unchanged) → footer.

## 4. Copy rules

- All mockup meta-copy is replaced with production copy (e.g. "See how each area should be presented" → "Explore each service in depth."; portfolio meta-sub → real capability line).
- No invented facts: only 20 years, licensed & insured, Lean Six Sigma, professional PM, the four services, and the real contact details. "100%" in the stats band = "Licensed and insured" (a factual restatement, not a new claim).
- Keep the existing strong headlines where they beat the reference ("Building success. Together." stays as the homepage headline device inside the intro; hero follows the reference lockup treatment).

## 5. JS updates (`main.js`)

- Scrollspy: run only for same-page anchor nav links; skip on subpages (active state hardcoded).
- All existing behaviors (menu focus management, FAQ, form validation → mailto, reveals, header blur) stay and must work on every page; code already guards against missing elements.

## 6. QA gates (per page, before final report)

1. CDP render at 1440 and 390: zero console errors, zero failed requests, all images `naturalWidth > 0`.
2. `document.scrollWidth === viewport` at 390 (no horizontal overflow).
3. Every internal link resolves (programmatic check across all pages).
4. Focus/keyboard walk on header, menu, FAQ, form.
5. Visual review of renders at 1440 / 768 / 390.

Deliverable after implementation: `docs/final-ui-review.md`.
