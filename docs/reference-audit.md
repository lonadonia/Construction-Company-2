# Reference Audit — New Design References vs. Current Implementation

**Date:** 2026-07-04
**References:** `01_Homepage.jpg` (1440×6580) · `02_About.jpg` (1440×4927) · `03_Services.jpg` (1440×4682) · `04_Residential.jpg` (1440×4282)
**Current implementation:** single-page `index.html` + `assets/css/style.css` + `assets/js/main.js`

---

## 1. What the references are

Four complete 1440px page designs for a **multi-page site**: Homepage, About, Services hub, and a Residential service-detail page (the exemplar for all service detail pages). Shared nav across all four: **Home · About · Services · Projects · Process · Contact** + orange "Request Consultation" pill. Shared footer: brand column + Company / Services / Contact columns + closing bar.

### Reference-wide design language (consistent across all four)

- **Utility bar:** phone + email left (orange diamond markers), "20 Years Experience · Licensed & Insured · Lean Six Sigma Certified" right.
- **Page heroes (About/Services/Residential):** full-width photo, left-weighted dark scrim, small breadcrumb caps line ("BULADEV + ASA CONSTRUCTION / …"), orange overline, bold H1, one short lede, button pair (orange primary + white secondary), **4px orange rule closing the hero's bottom edge**.
- **Homepage hero:** centered and cinematic — large dual-logo lockup over a composite construction photo, centered headline "Residential & Commercial Construction", orange subline "Building Success Together", one centered LEARN MORE button.
- **Check-bullet lists** everywhere: small orange circular check chips + one-line items (3–6 per list).
- **Photo cards with floating mini-cards:** rounded-corner photography with a small white card overlapping the lower edge, carrying one big orange figure ("20+", "2", "4", "HOME") + two supporting lines.
- **Chip-numbered card grids:** soft-orange rounded square chips (numbers 01–06 or letters R/C/L) top-left, bold title, 2–3 line description, hairline borders, generous padding. Used for process (6), audiences (6), service overview (6), residential services (6).
- **Dark panels inside dark sections:** rounded slightly-lighter panels holding stat rows (20 / 100% / L6σ / PM) and flow rows (1–4 with labels).
- **Capability matrix (Services):** a real table — capabilities × Residential/Commercial/Land Development with orange checks and nuance text ("As project requires", "When applicable").
- **Quote card (About):** white card, thick orange left bar, italicized philosophy quote + attribution.
- **CTA bands:** deep navy with a **large soft bronze/orange curved glow** on the right, headline + one line + a single orange button.
- **Rhythm:** white → warm cream (`~#F4EFE9`-ish) → white → near-black alternation; much airier and more white-dominant than the current site.
- **Radius:** ~10–16px on cards and imagery; buttons ~6–8px.
- **Shadows:** soft, low-contrast, reserved for photo cards and floating cards; flat hairline borders carry most card definition.

---

## 2. Page-by-page: structure and quality notes

### 01_Homepage
Hero (centered, branded) → 4-up **trust strip** with icon chips and hairline dividers → split **intro** ("One coordinated team from concept to completion." + checks + 2 CTAs + photo card w/ "20+" float) → **Core services** on cream (3 photo cards: Residential / Commercial / Land Development with EXPLORE links) → **dark stats band** ("Experience supported by disciplined processes." + 20/100%/L6σ/PM panel) → **6-step process** grid (Consultation, Scope & Review, Plan & Estimate, Mobilize, Build & Control, Closeout) → **6-tile portfolio** (large commercial + 5 captioned tiles incl. a dark blueprint "Planning" tile) → glow CTA ("Ready to build with confidence?") → footer.

**Doing well:** immediate brand statement in the hero; credibility strip right under the fold; process expanded to real client-facing stages; portfolio breadth.
**Can be elevated:** hero headline is generic ("Residential & Commercial Construction") — keep the stronger existing "Building success. Together." energy in supporting copy; some section subs are mockup meta-copy that must be replaced with production copy.

### 02_About
Page hero ("Built on Experience. Driven by Process.") → **Our story** split (checks + photo card w/ "2" float) → **Clear roles. Shared standards.** (two company cards with actual logos: BULADEV = Building & Land Development, ASA = Construction Delivery) → **Values** 4-up (Integrity, Quality, Efficiency, Value) → **dark PM section** ("Project management is part of the service, not an afterthought." + checks + quote card) → **Who we serve** 6-up (Homeowners, Business Owners, Investors, Developers, Property Managers, Landowners) → glow CTA → footer.

**Doing well:** finally explains the two-company relationship explicitly; audience grid converts visitors by letting them self-identify.
**Can be elevated:** values cards are visually thin; give them the chip treatment for consistency.

### 03_Services
Page hero ("Construction & Development Services") → **Service overview** 6 cards (R/C/L letter chips + 01/02/03: Renovations, Pre-Construction, Project Management) → **capability matrix** table on cream → **dark section** ("A disciplined approach across every service." + 5 checks + blueprint panel w/ "4 core controls" float) → 3 service-page preview cards → glow CTA ("Not sure which service fits?") → footer.

**Doing well:** the matrix is a genuinely differentiating, engineering-minded artifact; the 6-card overview separates *what* (R/C/L) from *how* (renovations, pre-con, PM).
**Can be elevated:** "See how each area should be presented" + "VIEW DESIGN" are mockup meta-copy → becomes real links into actual service detail pages; matrix needs a mobile scroll treatment.

### 04_Residential (template for all service detail pages)
Page hero ("Residential Construction") → **approach** split (6 checks + photo card w/ "HOME" float) → **6 residential services** (New Homes, Additions, Whole-Home Renovation, Kitchens & Baths, Basements, Investment Properties) → **dark flow panel** ("Fewer surprises through better preparation." + 4-step 1–4 panel) → **quality split** (photo left, "Details that support long-term satisfaction." + 5 checks right) → glow CTA ("Planning a residential project?") → footer.

**Doing well:** homeowner-language service grid; the 4-step flow panel is a compact, reassuring artifact.
**Can be elevated:** clone this template for Commercial and Land Development so the "VIEW PAGE" links on Services resolve to real pages (references only show the residential exemplar).

---

## 3. Current implementation vs. references

### What already matches (keep / refine)
- Brand tokens: palette, Archivo/Inter, orange discipline, diamond markers — all match.
- Header behavior (sticky, scrolled blur, orange CTA), mobile menu (numbered, polished), hamburger a11y.
- Card system foundations (service cards, hover lifts, number badges), FAQ accordion, contact form + validation, reveal-on-scroll system, footer bones (columns, watermark, orange hairline).
- Imagery: the `-hq` WebP set covers every photographic need of the references (heroes, cards, portfolio, blueprint, CTA backgrounds).

### What is structurally different (the real work)
| Area | Current | References |
|---|---|---|
| Architecture | One page, 8 sections | Multi-page: Home, About, Services, service detail(s), + Contact |
| Homepage hero | Left-aligned split w/ CSS diagonal band | Centered cinematic branded hero |
| Trust | Black utility bar only | Utility bar **plus** 4-up icon trust strip under hero |
| About | One teaser section | Full page: story, two-company cards, values, PM section, audiences |
| Services | 4 equal cards | 3 primary paths + 6-card overview + capability matrix + detail pages |
| Process | 4 steps (Discover/Plan/Build/Deliver) | 6 client-facing stages (Consultation → Closeout) |
| Portfolio | 3 tiles | 6 tiles incl. dark blueprint "Planning" tile |
| Stats | None | Dark 20 / 100% / L6σ / PM band |
| CTA sections | Full contact split on-page | Compact glow CTA bands per page; contact gets its own page |
| Checklists | Prose paragraphs | Orange check-chip bullet lists |
| Floating stat cards | One hero card | Systematic device on every split section |

### What is weak today (regardless of references)
- Single page limits SEO surface and makes "Services" feel thin vs. the four-service promise.
- The about teaser never explains the BULADEV/ASA relationship — the About reference fixes exactly this.
- No numeric proof anywhere (stats band solves it).
- Process's four abstract verbs are less persuasive than the six concrete stages clients actually experience.

### What must NOT be lost in the upgrade
- FAQ accordion + full contact form (references omit them; they move to `contact.html`).
- Accessibility layer (focus states, aria wiring, reduced-motion, no-JS safety), performance layer (responsive WebP, preload, lazy), SEO layer (meta/OG/JSON-LD — now per page).
- The orange "close communication" banner and the trust facts — nothing invented, nothing dropped.
- Mockup meta-copy ("how project pages should look", "VIEW DESIGN") must be rewritten as production copy, not transcribed.
