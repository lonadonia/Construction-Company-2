# Image Regeneration Report

Date: 2026-07-04

## 1. Images Found During Audit

Reference/source files in the project root:

- `01_Homepage.jpg`
- `02_About.jpg`
- `03_Services.jpg`
- `04_Residential.jpg`
- `Backgrounds_4K_Preview.jpg`
- `Logos_HD_Preview.jpg`
- `WhatsApp Image 2026-06-17 at 10.22.05 PM.jpeg`
- `WhatsApp Image 2026-06-17 at 10.22.21 PM.jpeg`

Reference copies under `assets/images/reference/`:

- `Backgrounds_4K_Preview.jpg`
- `Logos_HD_Preview.jpg`
- `WhatsApp Image 2026-06-17 at 10.22.05 PM.jpeg`
- `WhatsApp Image 2026-06-17 at 10.22.21 PM.jpeg`

Existing production/legacy generated assets found under `assets/images/generated/`:

- Logo/fav assets: `logo-light.png`, `logo-dark.png`, `buladev-light.png`, `buladev-dark.png`, `asa-light.png`, `asa-dark.png`, `og-image.jpg`, `og-image-hq.jpg`
- Legacy contact-sheet crops: `home-hero.jpg`, `about-hero.jpg`, `services-hero.jpg`, `residential-hero.jpg`, `commercial-hero.jpg`, `land-development-hero.jpg`, `contact-hero.jpg`, `projects-hero.jpg`, `process-hero.jpg`, `card-about.jpg`, `card-residential.jpg`, `card-commercial.jpg`, `card-land.jpg`, `card-process.jpg`, `card-projects.jpg`
- Previous WebP production set: `hero-bg*`, `about-image*`, `residential-card*`, `commercial-card*`, `land-card*`, `process-bg*`, `projects-commercial*`, `projects-residential*`, `projects-land*`, `cta-bg*`
- Previous decorative assets: `blueprint-grid.svg`, `diagonal-orange.svg`, `orange-pattern.svg`

The raw client/reference files were not overwritten.

## 2. Replacement Summary

| Previous active role | New final asset | Why replaced/regenerated |
|---|---|---|
| Homepage hero: `hero-bg-hq.webp` | `homepage-hero.webp` + `-1024` / `-640` | Replaced with a stronger premium development scene and clearer semantic filename. |
| Homepage about: `about-image-hq.webp` | `homepage-about.webp` + `-640` | Replaced reused site imagery with a project-management visual matching the about copy. |
| Residential card: `residential-card-hq.webp` | `service-residential.webp` + `-480` | Regenerated for sharper premium residential curb appeal. |
| Commercial card: `commercial-card-hq.webp` | `service-commercial.webp` + `-480` | Regenerated as a dedicated active commercial construction image. |
| Land card: `land-card-hq.webp` | `service-land.webp` + `-480` | Regenerated as a cleaner, more legible grading/site-prep scene. |
| Process/planning: `process-bg-hq.webp` | `service-process.webp` + `-1024` / `-640` | Regenerated as a crisp blueprint/tablet planning visual. |
| About hero: `about-image-hq.webp` | `about-hero.webp` + `-1024` / `-640` | Replaced support-image reuse with a wide partnership/site-execution hero. |
| About support: `commercial-card-hq.webp` | `about-support.webp` + `-640` | Matched the story section to planning and project coordination. |
| Services hero: `cta-bg-hq.webp` | `services-hero.webp` + `-1024` / `-640` | Replaced dark CTA imagery with a believable residential/commercial/land development scene. |
| Residential hero: `projects-residential-hq.webp` | `residential-hero.webp` + `-1024` / `-640` | Gave the residential page its own wide hero image. |
| Residential support: `projects-residential-hq.webp` | `residential-support.webp` + `-640` | Added a detail-oriented quality/craftsmanship image. |
| Commercial hero: `projects-commercial-hq.webp` | `commercial-hero.webp` + `-1024` / `-640` | Added a wider hero-specific export instead of stretching a portfolio crop. |
| Commercial support/portfolio: `commercial-card-hq.webp`, `projects-commercial-hq.webp` | `service-commercial.webp`, `portfolio-commercial.webp` + variants | Split active-construction support from completed-building portfolio use. |
| Land hero: `projects-land-hq.webp` | `land-development-hero.webp` + `-1024` / `-640` | Added a wide development-site hero with better large-screen coverage. |
| Land portfolio/support: `projects-land-hq.webp`, `land-card-hq.webp` | `portfolio-land.webp`, `service-land.webp` + variants | Split site-prep card imagery from aerial/portfolio imagery. |
| Portfolio residential: `projects-residential-hq.webp` | `portfolio-residential.webp` + `-640` | Replaced repeated residential image with a distinct completed-home portfolio visual. |
| CTA/contact background: `cta-bg-hq.webp` | `cta-background.webp` + `-1024` / `-640` | Replaced busy collage-style background with a darker, cleaner CTA background. |
| Decorative SVGs: `blueprint-grid.svg`, `diagonal-orange.svg` | `blueprint-pattern.svg`, `structural-grid.svg`, `orange-diagonal-accent.svg` | Rebuilt as sharper, purpose-named responsive vector overlays. |
| Social image: `og-image-hq.jpg` | `og-image-premium.jpg` | Refreshed Open Graph preview using the new hero image and existing brand lockup. |

## 3. Source / Reference Used

- Visual direction: `01_Homepage.jpg`, `02_About.jpg`, `03_Services.jpg`, `04_Residential.jpg`
- Brand/logo source: existing `logo-light.png`, `logo-dark.png`, and the original `Logos_HD_Preview.jpg`
- Layout/aspect references: current HTML image dimensions, `srcset` breakpoints, and CSS object-fit containers
- Generation source: AI-generated masters saved under `C:\Users\Admin\.codex\generated_images\019f2b5c-40df-7751-b38b-8538d0e7b45d`

No unrelated stock imagery was introduced.

## 4. Processing Applied

- Generated role-specific photorealistic masters for construction/development, residential, commercial, land development, planning, and CTA imagery.
- Cropped each image using cover crops matched to the site layout:
  - Homepage hero: `1600x1000`, `1024x640`, `640x400`
  - Page heroes: `1600x900` or `1440x810`, plus `1024` and `640` variants
  - Service cards: `920x575`, `480x300`
  - Support and portfolio images: `1100x720`, `1200x900`, or `1200x800` plus responsive variants
- Applied light contrast balancing, slight color control, and post-resize sharpening.
- Exported final web assets as WebP with responsive variants.
- Rebuilt decorative blueprint/grid/orange accents as SVG so they remain sharp at every viewport.
- Composed `og-image-premium.jpg` from the new homepage hero and existing transparent logo.

## 5. Final Asset Usage

| Asset | Used in |
|---|---|
| `homepage-hero.webp` | `index.html` homepage hero preload and hero image |
| `homepage-about.webp` | `index.html` intro/about support image |
| `service-residential.webp` | Homepage service card, services detail card, residential support card, portfolio small residential tile |
| `service-commercial.webp` | Homepage service card, services detail card, commercial support card |
| `service-land.webp` | Homepage service card, services detail card, land support card |
| `service-process.webp` | Services process image, homepage planning portfolio tile, CSS `.why` background |
| `about-hero.webp` | `about.html` hero preload and hero image |
| `about-support.webp` | `about.html` story support image |
| `services-hero.webp` | `services.html` hero preload and hero image |
| `residential-hero.webp` | `residential.html` hero preload and hero image |
| `residential-support.webp` | `residential.html` quality section |
| `commercial-hero.webp` | `commercial.html` hero preload and hero image |
| `portfolio-commercial.webp` | Homepage portfolio and commercial quality section |
| `land-development-hero.webp` | `land-development.html` hero preload and hero image |
| `portfolio-land.webp` | Homepage portfolio and land quality section |
| `portfolio-residential.webp` | Homepage portfolio completed-spaces tile |
| `cta-background.webp` | Homepage portfolio mixed tile and CSS contact/CTA background |
| `blueprint-pattern.svg` | Process/contact texture overlays |
| `structural-grid.svg` | Dark section texture overlay |
| `orange-diagonal-accent.svg` | Diagonal accent bands |
| `og-image-premium.jpg` | Open Graph/social metadata and JSON-LD image |

## 6. Performance / Optimization Notes

- Hero images remain eager-loaded and preloaded with `fetchpriority="high"`.
- Non-critical content images remain `loading="lazy"` and `decoding="async"`.
- Every `srcset` width descriptor was validated against the actual exported image width.
- All referenced image paths in HTML/CSS resolve successfully.
- The largest eager-loaded image is the land-development hero, compressed more aggressively because it is displayed under a dark page-hero scrim.
- Existing original/reference files remain untouched; old generated assets remain available but are no longer referenced by the active HTML/CSS.
