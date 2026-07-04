# BULADEV + ASA Construction — Design Analysis

**Project:** Responsive website for BULADEV Building & Land Development + ASA Construction LLC
**Tagline / core message:** *Building Success Together*
**Date:** 2026-07-04
**Status:** Pre-build analysis. No production code exists yet — this document defines the visual system the build must follow.

---

## 1. What the references tell us

This is **not** a blank-slate brief. The reference material contains a fully resolved design direction that the build must reproduce faithfully:

| File | What it is | Resolution |
|---|---|---|
| `WhatsApp Image 2026-06-17 at 10.22.05 PM.jpeg` | High-fidelity homepage hero mockup (in browser chrome) | 1280×720 |
| `WhatsApp Image 2026-06-17 at 10.22.21 PM.jpeg` | 10-frame walkthrough of the entire site (all pages + mobile) | 768×1080 |
| `Backgrounds_4K_Preview.jpg` | Contact sheet of 15 named background assets (one per page/card) | 1680×1730 |
| `Logos_HD_Preview.jpg` | Dual-logo lockup on white and on dark navy | 2400×1500 |

The walkthrough shows: home hero → about ("Built on experience. Managed with precision.") → services (3 numbered cards) → dark Lean Six Sigma quality section ("Better systems create better builds.") → 4-step process timeline ("A clear path from concept to completion.") → projects grid ("Spaces built for purpose and performance.") → dark CTA + footer ("Ready to build something successful?") → responsive mockups. **The build target is this design, executed as real, responsive, accessible HTML/CSS.**

---

## 2. Visual language decoded

The mockups establish a consistent set of motifs. Every one of these is a deliberate signature and should appear in the build:

1. **Dark-anchored premium base.** The hero and key sections sit on near-black (`#17181B`) or dark navy-charcoal (`#111B25` — the exact logo panel color). This is what makes it read "premium construction," not "local contractor."
2. **The diagonal orange band.** A wide orange (`#F47820`) slash cuts through the hero at roughly 15–20° off vertical, separating the dark text zone from the photography zone. Thinner diagonal orange ribbons recur across the background assets (cards, project collages). This is the single strongest brand device — it must be built with CSS (`clip-path` / skewed pseudo-elements), not baked into images, so it stays sharp at every viewport.
3. **Alternating dark / white rhythm.** Sections alternate: dark hero → white about → white services → **dark** quality/Six Sigma → white process → white projects → **dark** CTA + footer. The white sections are clean, airy, corporate; the dark ones carry emotional weight and CTAs.
4. **Two-tone headline device.** Display headlines break across lines with the final word in orange: "Building success. **Together.**" / "Ready to build **something successful?**" Reuse this pattern for section headers sparingly (hero + final CTA).
5. **Orange kicker + uppercase eyebrow.** Every section opens with a short orange rule (≈40px) plus a small, letterspaced, uppercase eyebrow label ("RESIDENTIAL · COMMERCIAL · DEVELOPMENT", "HOW WE BUILD", "FEATURED WORK").
6. **Numbered structure everywhere.** Services are 01/02/03; the process is 01 Discover → 02 Plan → 03 Build → 04 Deliver; the Six Sigma section shows a 4-card Define/Measure/Analyze/Control grid. Numbers signal project-management discipline — the brand's core differentiator.
7. **Floating white cards over dark imagery.** The hero carries a floating white card ("BUILT WITH PRECISION / From vision to delivery"). Cards have generous radius (~12px), soft shadow, orange eyebrow.
8. **Utility trust bar.** A slim black bar above the header lists the four trust markers with small orange diamond (◆) bullets: 20 Years Experience · Licensed & Insured · Lean Six Sigma · Professional Project Management, with the phone number right-aligned.
9. **Dual-logo header.** BULADEV (primary, left) and ASA Construction LLC (secondary) sit side by side separated by a thin vertical orange rule — an equal-partners identity, with BULADEV visually leading.
10. **Blueprint texture for process content.** The `process-hero` / `card-process` assets are dark navy blueprint grids with a thin orange data curve — used only behind process/quality content, never behind photography sections.

### How the final site must feel

Premium, serious, engineered. Closer to a national developer's site than a handyman page. Trust is communicated structurally — numbered phases, certifications, disciplined typography — not with badges and stars. Generous whitespace in light sections; confident density in dark ones. Almost no decoration that isn't the diagonal band, the orange rule, or a number.

---

## 3. Color palette (extracted from the actual files)

Colors below were pixel-sampled from the logo sheet and hero mockup, then normalized. **Do not substitute other hues.**

```css
:root {
  /* ── Brand core ───────────────────────────────────────────── */
  --clr-orange:       #F4791F; /* primary accent — sampled from hero band (#F47820) and CTA buttons */
  --clr-orange-deep:  #D9640E; /* hover states, gradient ends, pressed buttons */
  --clr-orange-text:  #B4540A; /* the ONLY orange for small text/links on white (≈5.0:1 contrast) */
  --clr-terracotta:   #B5682A; /* logo subtitle tone — sparing use: eyebrows on dark, fine rules */

  /* ── Darks ────────────────────────────────────────────────── */
  --clr-black:        #17181B; /* hero + dark section background (sampled from mockup) */
  --clr-navy:         #111B25; /* logo dark panel, footer, blueprint/process surfaces (sampled) */
  --clr-charcoal:     #1F2025; /* headings & body-strong on white (sampled from wordmark) */

  /* ── Lights ───────────────────────────────────────────────── */
  --clr-white:        #FFFFFF; /* light section background, cards */
  --clr-offwhite:     #F5F6F7; /* alternate light background, card wells */
  --clr-gray-300:     #C9CDD3; /* body text on dark backgrounds */
  --clr-gray-600:     #5A6069; /* secondary text on white */
  --clr-line:         #E4E6E9; /* hairline borders, dividers on white */

  /* ── Semantic aliases (use these in components) ───────────── */
  --bg-page:          var(--clr-white);
  --bg-dark:          var(--clr-black);
  --bg-footer:        var(--clr-navy);
  --accent:           var(--clr-orange);
  --accent-hover:     var(--clr-orange-deep);
  --text-on-light:    var(--clr-charcoal);
  --text-on-dark:     var(--clr-gray-300);
  --heading-on-dark:  var(--clr-white);
}
```

**Distribution rule of thumb:** ~60% white/off-white, ~30% black/navy, ~8% orange, ~2% terracotta. Orange is an accent, never a background for long-form content.

---

## 4. Typography direction

The logo wordmark and mockup headlines are a heavy geometric/neo-grotesque sans with tight tracking. Recommended pairing (Google Fonts, with full system fallback so nothing breaks offline):

```css
:root {
  --font-display: "Archivo", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-body:    "Inter",   -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

- **Archivo** (weights 600–900, variable) for headlines, nav, buttons, big numbers. Its grotesque cut matches the wordmark; Archivo Black/800 reproduces the mockup's display weight. Use slightly negative tracking on display sizes (`letter-spacing: -0.02em`).
- **Inter** (400/500/600) for body copy, cards, forms. Neutral, highly legible at small sizes.
- If the client requires zero external requests: fall back to the system stack alone — `Segoe UI Bold`/`Helvetica Bold` degrade acceptably.

**Scale (fluid, via `clamp()`):**

| Token | Size | Use |
|---|---|---|
| `--fs-display` | `clamp(2.5rem, 6vw, 4.5rem)` | H1 hero, 800–900 weight, line-height 1.05 |
| `--fs-h2` | `clamp(1.75rem, 3.5vw, 2.75rem)` | Section headings, 700–800 |
| `--fs-h3` | `clamp(1.2rem, 2vw, 1.5rem)` | Card titles, 700 |
| `--fs-body` | `1rem / 1.0625rem` | Paragraphs, line-height 1.65 |
| `--fs-eyebrow` | `0.8125rem` | Uppercase, `letter-spacing: 0.14em`, 600 |
| `--fs-small` | `0.875rem` | Utility bar, captions, footer meta |

Body copy is **never** all-caps and never condensed. Uppercase is reserved for eyebrows, the utility bar, and small labels.

---

## 5. Logo usage rules

The logo sheet provides two lockups; each has exactly one valid context:

| Context | Version | Notes |
|---|---|---|
| White/off-white backgrounds (header, light sections) | **Light version** (charcoal wordmark, orange icon, terracotta subtitle) | Top half of `Logos_HD_Preview.jpg` |
| Dark backgrounds (`#17181B`/`#111B25` — footer, dark CTA) | **Dark version** (white wordmark, orange icon) | Bottom half of the sheet; the sheet's own panel color `#111B25` is the canonical dark surface |

Hard rules:
- **Never** place the light version on dark, or the dark version on light.
- **Never** recolor, skew, add effects to, or rebuild the logos as HTML text. They are images (ideally SVG/transparent PNG from the client; see `asset-strategy.md` for the crop fallback).
- Dual lockup (BULADEV | ASA) in the header and footer, separated by a 1px vertical orange rule, BULADEV first. On very narrow screens the ASA mark may drop from the header, but both must appear in the footer.
- Minimum clear space: the height of the "B" on all sides. Minimum render width for the BULADEV lockup: ~140px (below that the subtitle becomes unreadable — hide the subtitle rather than shrink further, only if a cropped raster forces it).
- Favicon: the orange building glyph from the BULADEV mark alone.

---

## 6. Accessibility strategy

**Contrast (measured against WCAG 2.1 AA):**

| Combination | Ratio | Verdict |
|---|---|---|
| `#F4791F` orange text on white | ≈2.7:1 | ❌ Fails even large-text AA. Display/decoration only, never for information carried by text alone |
| `#B4540A` dark orange on white | ≈5.0:1 | ✅ Use for orange links/small orange text on light backgrounds |
| White on `#F4791F` (buttons) | ≈2.7:1 | ❌ As-is. Buttons must either use charcoal `#17181B` text on orange (≈6.6:1 ✅) **or** darken the button surface to `#D9640E`+ and keep text bold ≥18.66px |
| `#C9CDD3` body on `#17181B` | ≈9:1 | ✅ |
| White headings on `#17181B` / `#111B25` | ≥15:1 | ✅ |
| `#1F2025` on white | ≈15:1 | ✅ |

Decision: **buttons use bold white text on `--clr-orange-deep` (#D9640E) at large size, or charcoal text on `--clr-orange`** — pick one and use it everywhere. The orange word in headlines ("Together.") sits on near-black, where `#F4791F` achieves ≈4.9:1 at display size — ✅ fine.

**Beyond contrast:**
- Semantic landmarks: one `<header>`, `<nav aria-label>`, `<main>`, `<footer>`; one `<h1>` per page; sections introduced by `<h2>` in order (no skipped levels).
- All imagery is decorative-or-described: hero/section backgrounds as CSS backgrounds or `alt=""`; meaningful project photos get real alt text (specified per-asset in `asset-strategy.md`).
- Text over photography always sits on a guaranteed-contrast layer: dark gradient scrim (`rgba(17,24,27,0.55)`+) — never raw text on a photo.
- Keyboard: visible focus ring (2px orange outer + offset) on all interactive elements; skip-to-content link; mobile menu focus-trapped and `Esc`-closable; hamburger is a real `<button aria-expanded>`.
- `prefers-reduced-motion: reduce` disables all scroll reveals and transitions.
- Touch targets ≥44×44px; phone number and email are `tel:`/`mailto:` links everywhere they appear.
- Form fields (contact): visible `<label>`s, `autocomplete` attributes, error text tied via `aria-describedby`, never placeholder-as-label.

---

## 7. Warning list — things NOT to do

1. **Do not use `home-hero.jpg` (from the 4K sheet) as an actual hero background.** It has logos, headline copy, and a "LEARN MORE" button *baked into the pixels*. All text must be live HTML. Use it only as a composition reference.
2. **Do not stretch tiles cropped from `Backgrounds_4K_Preview.jpg` to full-bleed hero size.** Each tile is only ≈550×280px — fine as dev placeholders and small cards, blurry mush as a 1920px hero. Request the true 4K originals (the sheet proves they exist) before final delivery.
3. **Do not overwrite, move, rename, or edit the four original reference files.** All derived crops are new files in `assets/img/`.
4. **Do not introduce new hues.** No blue CTAs, no green success accents, no gradients into other colors. The palette is orange + terracotta + neutrals, full stop.
5. **Do not use `#F4791F` for small text on white** — it fails contrast. Use `--clr-orange-text` (#B4540A).
6. **Do not rebuild the logos in CSS/HTML text** or set them in Archivo. Image assets only.
7. **Do not put the light logo on dark backgrounds or vice versa.**
8. **Do not bake the diagonal band into images.** It's a CSS device (`clip-path`), otherwise it aliases, breaks responsively, and can't sit behind live text.
9. **Do not make it a generic contractor template** — no Bootstrap-default look, no stock "handshake" imagery, no star-rating badges, no carousel hero. The walkthrough is the spec; match it.
10. **Do not animate heavily.** Maximum: subtle fade/rise on scroll (staggered ≤100ms), button hover transitions ≤200ms, and nothing else. No parallax, no auto-playing sliders, no counters spinning endlessly, no cursor effects. All gated behind `prefers-reduced-motion`.
11. **Do not flatten it into a single thin landing page.** The architecture is a real multi-page corporate site (see `site-structure.md`); each nav item resolves to a real page with its own hero, title, and meta.
12. **Do not use uppercase or condensed type for paragraphs.**
13. **Do not lazy-load the hero image** (it's the LCP element — preload it instead); do lazy-load everything below the fold.
14. **Do not ship uncompressed JPEGs.** Every raster goes through the WebP/AVIF + responsive `srcset` pipeline in `asset-strategy.md`.
15. **Do not put raw text directly over photos** without a scrim layer.
16. **Do not invent trust claims.** Exactly these four: 20 Years of Experience · Licensed & Insured · Certified Lean Six Sigma · Professional Project Managers. No fake review counts, fake awards, or fabricated project names presented as real.
