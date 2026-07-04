# BULADEV + ASA Construction — Asset Strategy

Companion to `design-analysis.md` and `site-structure.md`. This file maps every reference file to its role in the build, defines the extraction/optimization pipeline, and lists asset-specific rules.

---

## 1. Inventory — what we actually have

| File | Dimensions | Nature | Preservation |
|---|---|---|---|
| `Backgrounds_4K_Preview.jpg` | 1680×1730 | **Contact sheet** of 15 named background assets (3 cols × 5 rows, labeled tiles) | Original untouched — crops are new files |
| `Logos_HD_Preview.jpg` | 2400×1500 | **Contact sheet**: dual-logo lockup on white (top half) and on navy `#111B25` (bottom half) | Original untouched |
| `WhatsApp Image … 10.22.05 PM.jpeg` | 1280×720 | Homepage hero mockup — **design reference only** | Never shipped as a site asset |
| `WhatsApp Image … 10.22.21 PM.jpeg` | 768×1080 | 10-frame full-site walkthrough — **design reference only** | Never shipped as a site asset |

**The critical fact:** both "preview" files are *previews*. The real individual 4K background files and vector/transparent logo files exist on the client side (the sheet titles say "All background images used in the latest website design"). 

**Two-track plan:**
- **Track A (now):** crop tiles from the preview sheets as working assets so the build can proceed and the contest entry looks complete. Tiles are ≈550×280px — acceptable for cards and scrimmed/darkened backgrounds at moderate sizes.
- **Track B (before final delivery):** request from the client (1) the individual 4K background JPG/PNGs matching the tile names, and (2) the logos as SVG or transparent PNG. Swap them in — filenames and markup are designed so this is a drop-in replacement with zero HTML/CSS changes.

---

## 2. Tile map of `Backgrounds_4K_Preview.jpg`

Grid: 3 columns × 5 rows below a ~105px title band; each cell ≈ 553–560px wide, image ≈270–280px tall, followed by a label strip. Exact crop rectangles should be scripted (Python/Pillow or ImageMagick) by detecting the white label strips rather than hardcoding — but the logical map is:

| Row | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| 1 | `about-hero` — excavator before glass commercial building | `card-about` — same scene, tighter crop | `card-commercial` — glass commercial building |
| 2 | `card-land` — excavator earthworks + orange band | `card-process` — navy blueprint grid + orange curve | `card-projects` — collage (commercial + residential, orange diagonals) |
| 3 | `card-residential` — suburban house at golden hour + orange band | `commercial-hero` — glass building + excavator, wide | `contact-hero` — house roofline against sky |
| 4 | `home-hero` — ⚠️ **branded composite with baked-in logos/headline/button** | `land-development-hero` — excavator site work | `process-hero` — dark navy blueprint + orange data curve |
| 5 | `projects-hero` — multi-photo collage with orange diagonals | `residential-hero` — house front elevation | `services-hero` — house + excavator split collage |

---

## 3. Usage mapping — which image goes where

### Heroes (page-top backgrounds, scrimmed per `design-analysis.md` §6)

| Page | Asset | Treatment |
|---|---|---|
| `index.html` | ⚠️ NOT `home-hero` (baked text). Use `commercial-hero` or `about-hero` photography inside the hero's right-side photo panel; the dark zone + diagonal band are pure CSS | Photo panel only, `object-fit: cover`; dark gradient scrim on its left edge where it meets the band |
| `about.html` | `about-hero` | Full-bleed, `rgba(17,24,27,0.55→0.75)` left-weighted scrim |
| `services.html` | `services-hero` | Same scrim recipe |
| `projects.html` | `projects-hero` | Collage already busy → heavier scrim `0.65+` |
| `process.html` | `process-hero` | Navy blueprint art — already dark, light scrim only; white text passes contrast natively |
| `contact.html` | `contact-hero` | Shorter hero (~45vh), standard scrim |

### Cards & section imagery

| Component | Asset |
|---|---|
| Home services card 01 Residential | `card-residential` |
| Home services card 02 Commercial | `card-commercial` |
| Home services card 03 Land Development | `card-land` |
| About teaser collage (home §3) | `card-about` (+ `card-residential` as the smaller inset, per the mock's two-image collage) |
| Quality / Six Sigma section background (home §5, process page) | `card-process` tiled/blurred as texture, or a CSS-rebuilt blueprint grid on `--clr-navy` (preferred — resolution-independent; keep the thin orange curve as an inline SVG) |
| Projects grid (home §7 + projects page) | `card-residential`, `card-commercial`, `card-land`, `card-projects`, plus tight alternate crops of the hero tiles for variety |
| Services page `#residential` / `#commercial` / `#land-development` section images | `residential-hero` / `commercial-hero` / `land-development-hero` |
| Footer / final CTA band background | **No photo.** The mock's CTA sits on flat `--clr-black`/`--clr-navy` with the diagonal CSS accent; the walkthrough's final frame uses `contact-hero` heavily darkened — acceptable alternative at `0.8` scrim. Default: flat dark + CSS band (cleaner, lighter, matches mock frame 8) |
| OG share image (1200×630) | Compose new: `--clr-navy` bg + dark-version dual logo + "Building Success Together" + thin orange diagonal |

### Logos (from `Logos_HD_Preview.jpg`)

| Derived file | Source region | Used in |
|---|---|---|
| `logos/logo-light.png` | Top half — BULADEV lockup on white | Header (white), light sections. White bg crop is fine since it only ever sits on white; convert to transparent by thresholding the flat white if needed for `--clr-offwhite` surfaces |
| `logos/asa-light.png` | Top half — ASA mark | Header right of divider |
| `logos/logo-dark.png` | Bottom half — BULADEV on `#111B25` | Footer, mobile nav overlay, dark CTA. Flat-navy crop is safe **only** on surfaces set to exactly `#111B25`; on `#17181B` sections request/derive transparent versions |
| `logos/asa-dark.png` | Bottom half — ASA mark | Footer |
| `logos/favicon.svg` (or 32/180px PNG) | Orange building glyph from the BULADEV icon | Favicon + apple-touch-icon |

Cropping the lockups is low-risk because both sit on perfectly flat backgrounds — but transparent PNG/SVG from the client (Track B) replaces all of these.

### The two WhatsApp mockups
Design reference only: layout measurement, spacing ratios, copy deck (all headline strings in `site-structure.md` §3 were transcribed from them). They never ship in `assets/` and are never linked from HTML.

---

## 4. Optimization pipeline

Every derived raster goes through this pipeline (scriptable with `sharp`/`squoosh`/ImageMagick):

1. **Crop** from source sheet → master PNG (lossless working copy) in a local `assets/img/_masters/` folder (git-ignored if repo is created).
2. **Resize ladder:** heroes → 640 / 1024 / 1600 (and 2400 once Track B originals arrive); cards → 400 / 800; logos → 1x/2x PNG at rendered size (or SVG).
3. **Encode:** WebP q≈80 primary (+ AVIF q≈50 optional), JPEG q≈78 fallback. `<picture>` with `type="image/webp"` sources + `srcset/sizes`.
4. **Dimensions in markup:** explicit `width`/`height` on every `<img>` (CLS = 0).
5. **Loading:** home hero photo `fetchpriority="high"` + `<link rel="preload">`; everything below the fold `loading="lazy" decoding="async"`.
6. **Budget:** ≤200KB per hero variant served at 1600w, ≤60KB per card. Total image payload on first load of `index.html` ≤ 600KB.

Until Track B lands, upscaling beyond ~1100px display width is forbidden — instead lean on the scrim + `--clr-black` sections so the ~550px crops render at ≤800px width where their softness is invisible.

---

## 5. Alt-text plan

Backgrounds under scrims are decorative → CSS `background-image` or `alt=""` + `aria-hidden`. Content images get factual alt text (no keyword stuffing):

| Asset (as content img) | Alt |
|---|---|
| `card-residential` | "New two-story residential home with stone and siding exterior at sunset" |
| `card-commercial` | "Modern glass-and-steel commercial office building" |
| `card-land` | "Excavator performing site grading on a land development project" |
| `card-about` collage | "Excavator working in front of a newly constructed commercial building" |
| Logos | "BULADEV Building & Land Development" / "ASA Construction LLC" (the header lockup links home → alt describes destination-bearing identity, no 'logo' suffix needed) |
| `card-process` / blueprint art | decorative → `alt=""` |

---

## 6. Asset-specific warnings

1. **`home-hero` tile is radioactive** — logos, "Residential & Commercial Construction", tagline and a LEARN MORE button are baked into pixels. Composition reference only. Shipping it = duplicated logos, unlocalizable text, fake button. 
2. **Never upscale preview crops to full-bleed 4K.** ≈550px sources; the softness reads instantly as low-quality on a premium brand.
3. **Do not crop through the orange bands** inside the tile photography in ways that leave amputated orange slivers at container edges — either keep a band fully inside the crop or crop it out entirely; the *live* diagonals are CSS.
4. **Do not place flat-navy logo crops on `#17181B`** — the `#111B25` rectangle will ghost. Match surface exactly or use transparent versions.
5. **Do not compress the logos as JPEG/WebP-lossy** — wordmark edges artifact. PNG/SVG only.
6. **Do not re-encode the original four files, ever** — all pipeline output is new files under `assets/img/`. Originals stay byte-identical in the project root.
7. **Do not fabricate project photos from elsewhere** (stock sites) without flagging it — the client supplied a coherent AI-generated/branded set; mixing obviously different stock breaks the visual system and may violate contest rules.

---

## 7. Track B — request list for the client (verbatim, ready to send)

> To finalize at full quality, please send:
> 1. The 15 individual background images from "BULADEV + ASA — Enhanced 4K Website Assets" as separate full-resolution files (the names shown on the sheet: home-hero.jpg, about-hero.jpg, …).
> 2. Both logos (BULADEV and ASA Construction) as SVG or transparent-background PNG, light and dark versions.
> 3. Confirmation of the primary service area / city for local SEO (we assume Detroit, MI from the 313 number).
> 4. Any real project photos you'd like featured on the Projects page, with one-line captions.
