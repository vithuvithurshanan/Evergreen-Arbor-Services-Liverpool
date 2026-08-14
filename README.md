# Evergreen Arbor Services Liverpool — Website

A React + TypeScript + Vite website for Evergreen Arbor Services, a professional
tree surgery and arborist company based in Liverpool, Merseyside.

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Local Development Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in the values
3. `npm install`
4. `npm run dev`
5. Open http://localhost:5173

## Production Build

```bash
npm run build       # output goes to dist/
npm run preview     # serve the production build locally
```

## Deployment (Vercel)

1. Push to GitHub
2. Connect the repo to the Vercel dashboard
3. Add environment variables from `.env.example` in the Vercel dashboard
4. Deploy (Vercel auto-detects Vite and runs `npm run build`)

The `vercel.json` at the project root configures:
- SPA fallback rewrites (all paths → `/index.html`)
- Long-lived cache headers for hashed static assets
- Security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

## Environment Variables

See `.env.example` for all required variables. Key variables:

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for quote-form emails |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS email template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_GA4_MEASUREMENT_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |

> **Note:** All `VITE_` prefixed variables are inlined at build time by Vite.
> Never store secrets (private keys, passwords) in `VITE_` variables — they are
> visible in the browser.

## Updating Content

### Contact Details

Edit `src/config/site.ts` — update the `phone`, `email`, `address`, and any
other fields in the `SITE_CONFIG` object. Changes propagate automatically to
the Navbar, Footer, Contact section, and schema markup.

### Gallery Photographs

Edit `src/data/gallery.ts` — add or remove `GalleryImage` entries.

Place image files in `public/images/gallery/`. Use descriptive filenames
(e.g. `crown-reduction-woolton-2024.jpg`). Recommended size: 800 × 600 px JPEG.

### Testimonials

Edit `src/data/testimonials.ts` — add or remove `Testimonial` entries.
Each entry has a `name`, `location`, `rating` (1–5), and `body` (review text).

### Service Descriptions

Edit `src/data/services.ts` — update the `shortDescription` or `fullDescription`
fields for any `ServiceItem`. The `title` field is also used as the option label
in the Quote Request Form dropdown.

## Running Tests

```bash
npm test            # run all unit and property-based tests once
npm run test:watch  # watch mode for development
```

Tests use Vitest + React Testing Library. Property-based tests use fast-check.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Forms:** react-hook-form + Zod
- **Email:** EmailJS (`@emailjs/browser`)
- **Analytics:** Google Analytics 4 (via gtag)
- **Animation:** Framer Motion
- **Routing:** React Router v6
- **SEO:** react-helmet-async + JSON-LD schema markup
- **Testing:** Vitest + React Testing Library + fast-check
