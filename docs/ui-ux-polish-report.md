# BULADEV + ASA Construction — UI/UX Polish Report

Final design-refinement pass on the one-page website, performed like a studio pre-delivery review: rendered and inspected at real viewports (1440 / 768 / 390 / 360), instrumented in Chrome via DevTools Protocol (console, network, per-image load state, layout overflow measurement), then refined in place. No rebuild, no brand-direction change, no functionality removed.

---

## 1. What was improved and why

### Bugs found by rendering the real page

| Fix | What was wrong | Why it mattered |
|---|---|---|
| **Stray orange bar on mobile hero** | At ≤1040px the floating hero card switched to `position: static`, so its decorative orange `::before` bar (absolutely positioned) escaped the card and painted as a full-height orange strip at the left edge of the hero on every phone. Fixed by making the card `position: relative` in the mobile breakpoint. | Visible defect on every mobile visit — the highest-traffic viewport for a local contractor site. |
| **Scroll-reveal was inert** | `.reveal` elements were permanently visible, so the IntersectionObserver reveal system in `main.js` had no visual effect. Restored a gentle 0.55s rise/fade — but gated behind an `html.js` class stamped by a tiny inline script, so content can never be trapped invisible if JS is missing (plus the existing `<noscript>` fallback and a reduced-motion override). | Sections now settle into place with the staggered timing the design system already defined (`--rd` delays), without any risk to accessibility or no-JS rendering. |
| **Clipped FAQ focus ring** | FAQ items use `overflow: hidden` for the open/close animation, which clipped the keyboard focus outline on the question buttons. `outline-offset: -3px` keeps the ring fully visible inside the item. | Keyboard users always see where focus is. |

### Verified as non-issues (worth recording)

- **Horizontal overflow:** measured `document.scrollWidth === 390` at a 390px viewport — no horizontal scrolling. The only elements extending past the viewport are intentional clipped decorations (hero band, contact band, footer watermark), each inside an `overflow: hidden` parent.
- **Console:** zero errors, zero warnings, zero failed network requests at desktop and mobile.
- **Lazy loading:** every below-fold image loads correctly on scroll; earlier "blank image" renders were headless-screenshot artifacts, confirmed by CDP image-state instrumentation (`complete` / `naturalWidth` per image).

### Visual & interaction refinements

| Area | Change | Rationale |
|---|---|---|
| Typography | Display headline tracking `-0.02em`, section headings `-0.012em` | Large Archivo weights set loose read "default"; tightening matches the logo lockup's compact grotesque feel — the single cheapest premium signal on the page. |
| Header | On scroll: translucent white + `backdrop-filter: blur(10px)` alongside the existing shadow | The sticky header now feels layered over content rather than pasted above it. |
| About | Subtle white→`#FAFBFB` gradient; diagonal accent made narrower/crisper (72px, opacity .32 instead of a wide washed band); credential icons in soft orange chips; credential cards gain hover lift + orange border | The section previously read flat white with a faded peach smear; now the accent looks deliberate and the credential row rewards attention. |
| Why choose us | Added inline CTA "See how we deliver — explore our process →" after the quality callout | Guides the visitor down the intended flow (Why → Process) instead of dead-ending a dark section. |
| Projects | Added centered "Discuss Your Project →" button under the grid | The portfolio is the natural moment of conviction; before, the next CTA was two sections away. |
| Mobile menu | Numbered links (01–07) with orange indices and hairline separators | Reads as designed navigation, not a default stacked list. |
| FAQ | Hover state on items (orange border tint) | Signals interactivity before the click. |
| Footer | 3px orange gradient hairline across the top | Bookends the page with the brand accent; the footer now opens with intent. |
| Buttons | `:active` press state (returns to baseline translate) | Completes the hover → press interaction arc. |
| Copy | About paragraph now ends "…with clear communication and full project control at every stage." | Adds the two remaining message pillars (communication, project control) in a natural sentence. |

### Asset quality (parallel upgrade, now fully wired)

All photography now uses the `-hq` WebP set (sharper sources, responsive `-640` / `-1024` / `-480` variants, correct `srcset`/`sizes`), including the CSS backgrounds for the dark quality section and the contact section, plus the upgraded `og-image-hq.jpg` for social sharing. Hero image preloads with `fetchpriority="high"`; everything below the fold stays `loading="lazy"`.

---

## 2. Before / after observations

- **Mobile hero:** stray orange strip + cramped left edge → clean margins, right-side diagonal band, card with its orange bar correctly attached.
- **Page motion:** static page → subtle staggered reveals that respect `prefers-reduced-motion` and no-JS.
- **About:** washed peach smear and flat white → crisp accent, warm gradient, tactile credential cards.
- **Conversion path:** CTAs existed only in header/hero/contact → added mid-page prompts at the two natural decision moments (after "why us", after portfolio) without cluttering any section.
- **Typography:** loose display setting → tight, confident, closer to the reference lockup.

---

## 3. Remaining optional improvements (not blocking)

1. **True brand photography.** Current images are the client-supplied AI-enhanced set; replacing with real project photos (same crops/filenames) is a drop-in upgrade.
2. **Form backend.** The form validates and composes a `mailto:`; a serverless endpoint (Formspree/Netlify Forms) would remove reliance on the visitor's email client.
3. **Self-hosted fonts.** Archivo/Inter come from Google Fonts (the one external dependency); self-hosting would remove third-party requests entirely.
4. **`hero-bg-hq-1024.webp` intrinsic width** measures 748px despite its `1024w` descriptor — harmless (displayed ≤770px) but worth regenerating for strict correctness.
5. **Detroit/Michigan local-SEO copy** once the client confirms service area (area code 313 suggests Detroit).

---

## 4. Final QA checklist

- [x] No horizontal overflow at 1440 / 1280 / 1040 / 768 / 430 / 390 / 360 (measured, not eyeballed)
- [x] Zero console errors / warnings / failed requests (CDP-verified, desktop + mobile)
- [x] All 12 in-page images + 2 CSS background images load (CDP-verified `naturalWidth > 0`)
- [x] Mobile menu: keyboard accessible (focus moves in, Esc closes, focus returns), `aria-expanded` synced
- [x] FAQ: `aria-expanded` + `aria-controls`, keyboard operable, focus ring visible, one-open-at-a-time
- [x] Form: required-field + email/phone validation, inline errors with `aria-invalid`/`aria-describedby`, status via `role="status"`
- [x] Scrollspy highlights the active nav link on scroll (desktop nav + mobile menu)
- [x] Reveal animations: IntersectionObserver only, staggered, disabled under `prefers-reduced-motion`, safe without JS
- [x] Alt text meaningful on content images; decorative elements `alt=""`/`aria-hidden`
- [x] Contrast: orange-on-white text uses the darkened `#B4540A`; buttons use charcoal-on-orange (6.6:1)
- [x] SEO: title, meta description, canonical, Open Graph + Twitter card, `GeneralContractor` JSON-LD
- [x] Brand: dark charcoal/black + orange + white, diagonal shapes, dual-logo identity, all six message pillars present (experience, licensed & insured, Lean Six Sigma, project management, quality/communication, project control)
