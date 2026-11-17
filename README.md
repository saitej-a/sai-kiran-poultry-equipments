# Sai Kiran Poultry Equipments

Marketing and catalog site for a poultry equipment manufacturer in Sangareddy, Telangana.
Next.js 15 (App Router) + React 19 + Tailwind CSS 3 + Framer Motion, exported as static HTML
with `output: "export"`. No backend, no CMS, no runtime dependencies beyond the build.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run typecheck  # tsc --noEmit, strict mode
```

The build pre-renders every route, including all 5 category pages and 11 product pages, from
`generateStaticParams`. Deploy the contents of `out/` to any static host (Cloudflare Pages,
Netlify, S3 + CDN, Nginx). No server runtime is required.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, category bento, turnkey EC showcase, why-us, featured carousel, testimonials |
| `/products` | Master catalog with category index and full grid |
| `/products/[category]` | Category listing, generated from `categories` |
| `/products/[category]/[slug]` | Product detail: gallery, advantages, spec table, WhatsApp block |
| `/turnkey-solutions` | EC tunnel vs open house comparison, shed parameter guide, worked ROI |
| `/downloads` | Brochure and manual cards |
| `/about` | Works profile, process, quality gates |
| `/contact` | Validated inquiry form, WhatsApp, addresses, map slot |
| `/sitemap.xml`, `/robots.txt` | Generated at build from the same data |

## Structure

```
src/
  app/                     routes, layout, metadata, sitemap, robots, icon
  components/
    layout/                header, footer, quote banner
    hero/                  hero copy + SVG airflow schematic
    home/                  bento grid, turnkey showcase, why-us, carousel, testimonials
    product/               product card, gallery
    contact/               inquiry form
    ui/                    icon set, logo, breadcrumbs, spec table, reveal, placeholder
    seo/                   JSON-LD renderer
  data/products.ts         categories, products, testimonials, brochures, shed data
  lib/site.ts              contact constants, WhatsApp builders, navigation
  types/product.ts         Product / Category / Testimonial / Brochure types
public/
  brochures/               placeholder PDFs (generated, see below)
  og.png                   OpenGraph card
scripts/
  make-brochures.mjs       writes the placeholder PDFs in public/brochures
  make-og.mjs              renders public/og.png from SVG
```

## Content model

`src/data/products.ts` is the single source of truth. Each product carries the PRD schema
(`id`, `slug`, `name`, `category`, `categorySlug`, `shortDescription`, `description`, `image`,
`advantages`, `specifications`, `brochureUrl`, `isFeatured`) plus a `sku` used on spec sheets
and placeholders. Adding a product automatically adds its route, sitemap entry, category count
and JSON-LD.

## Replace before launch

1. **Product photography.** `ProductImage` renders the labelled studio placeholder (sweep,
   crop marks, category glyph, SKU). Drop real files into `public/images/products/<slug>/` and
   swap the component usage for `next/image` — the `image` field already holds the intended path.
   Keep the 4:3 crop and the same art direction so the catalog grid still aligns.
2. **Brochures.** The eight PDFs in `public/brochures/` are generated one-page placeholders.
   Replace them with the printed artwork at the same filenames, or update `brochures` in the data
   file. Regenerate placeholders with `node scripts/make-brochures.mjs`.
3. **Contact details.** Phone, email and both addresses live in `src/lib/site.ts`. The WhatsApp
   number (`919876543210`) and pre-filled message templates are in the same file.
4. **Works facts.** Established year, floor area, team size, dispatch reach and the quality-gate
   table are editorial copy in `about/page.tsx`; confirm them with the client.
5. **Form endpoint.** Copy `.env.example` to `.env.local`:
   - `NEXT_PUBLIC_FORM_ENDPOINT` — any JSON POST endpoint (Web3Forms, Formspree, Apps Script).
   - `NEXT_PUBLIC_WEB3FORMS_KEY` — only when using the Web3Forms fallback endpoint.
   - `NEXT_PUBLIC_SITE_URL` — canonical origin for sitemap, canonical and OG URLs.
   With no endpoint configured the form posts to Web3Forms without a key, so a submission shows
   the inline error state and the WhatsApp fallback. Set the key (or your own endpoint) to go live.

## Design system

- Neutral paper/ink palette with a single emerald accent (`brand` in `tailwind.config.ts`).
- Archivo for copy and headings, IBM Plex Mono for specs, labels and figures (`next/font`).
- 12-column grid, 1280px max width, 8pt spacing rhythm, 6–10px radii.
- Buttons are square-ish, never pills; cards use hairline borders rather than shadows.
- Dense `spec-table` styling with mono labels and single-pixel row rules.
- Motion: staggered hero entrance, `whileInView` reveals at 420ms, 1.02 bento hover, scroll-snap
  carousel, and a single stroke-draw of the hero schematic. Everything is disabled or reduced
  under `prefers-reduced-motion`.

## Placeholder assets

`public/og.png` was rendered with a temporary `@resvg/resvg-js` install (fonts downloaded into
`.oggen/`, which is git-ignored and removed after generation). To regenerate, reinstall that
package and the two font files as the script expects, then `node scripts/make-og.mjs`.

## Accessibility

Semantic landmarks and headings, skip link, labelled form fields with inline errors and
`aria-invalid`, `aria-pressed` gallery thumbnails, keyboard-operable menu and dropdown with
Escape handling, visible focus rings, and no motion under reduced-motion preferences.
