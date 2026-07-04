# Image Quality Review

Review date: 2026-07-04

## Scope

Scanned the full website for image usage in `index.html` and `assets/css/style.css`. The active layout uses raster images for the hero, about section, service cards, project cards, CTA background, logos, and Open Graph preview, plus SVG decorative assets for the favicon, blueprint grid, orange pattern, and diagonal accents.

## Findings

The main photographic assets were visually weak because they were derived from low-resolution preview/contact-sheet tiles. Several files were declared at large display dimensions but originated from roughly `550x266` crops, causing softness and a scaled-up look on desktop. The same commercial/excavator crop was reused across multiple sections, which made the site feel repetitive and less premium. The CTA image was a dark collage rather than a polished construction background.

The logo PNGs were retained. They are not ideal final brand sources compared with true SVG/transparent client logo files, but they render acceptably at the small header/footer sizes and should not be AI-regenerated because that would risk changing the brand marks. Decorative SVG assets were also retained because they are vector-based and remain sharp.

## Replacements

| Section / Use | Previous asset | New asset | Reason |
|---|---|---|---|
| Hero image | `hero-bg.webp` | `hero-bg-hq.webp` plus `-1024` and `-640` variants | Replaced preview-derived commercial crop with a sharper premium construction/development scene. |
| About image | `about-image.webp` | `about-image-hq.webp` plus `-640` variant | Replaced repeated excavator crop with a project-management/site-planning visual. |
| Residential card / inset | `residential-card.webp` | `residential-card-hq.webp` plus `-480` variant | Replaced soft house crop with a sharper premium residential construction image. |
| Commercial card | `commercial-card.webp` | `commercial-card-hq.webp` plus `-480` variant | Replaced repeated commercial crop with a dedicated commercial construction image. |
| Land development card | `land-card.webp` | `land-card-hq.webp` plus `-480` variant | Replaced preview crop with a clearer site grading/development scene. |
| Project management card / dark background | `process-bg.webp` | `process-bg-hq.webp` plus `-1024` and `-640` variants | Replaced thin blueprint placeholder with a richer planning-table/blueprint image. |
| Featured commercial project | `projects-commercial.webp` | `projects-commercial-hq.webp` plus `-640` variant | Replaced repeated construction crop with a polished commercial portfolio image. |
| Featured residential project | `projects-residential.webp` | `projects-residential-hq.webp` plus `-640` variant | Replaced reused residential crop with a distinct custom-home portfolio image. |
| Featured land project | `projects-land.webp` | `projects-land-hq.webp` plus `-640` variant | Replaced repeated land crop with a broader development-site image. |
| CTA background | `cta-bg.webp` | `cta-bg-hq.webp` plus `-1024` and `-640` variants | Replaced collage-style image with a darker, polished construction background suitable for overlay text. |
| Social preview | `og-image.jpg` | `og-image-hq.jpg` | Refreshed the preview graphic to use the new hero image and existing logo lockup. |

## Optimization

All new photographic assets were generated as high-resolution masters, then cropped to the existing layout aspect ratios and exported as WebP at quality `88` with light sharpening after resize. Responsive variants were preserved for the same breakpoints already used by the markup. The Open Graph image was exported as an optimized progressive JPEG.

Original root/reference files and older generated crops were not overwritten.
