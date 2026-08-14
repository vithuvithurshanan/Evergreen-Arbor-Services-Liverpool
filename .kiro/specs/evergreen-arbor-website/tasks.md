# Implementation Plan: Evergreen Arbor Services Liverpool Website

## Overview

Incremental build of a React 18 + Vite + TypeScript + Tailwind CSS marketing website. Tasks are ordered so that foundational scaffolding and data are in place before UI components consume them, and that each deliverable is immediately testable. Property-based tests (fast-check) validate the invariants defined in the design Correctness Properties section.

---

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Initialise Vite + React 18 + TypeScript project
    - Run `npm create vite@latest` with the `react-ts` template
    - Install all dependencies listed in the design (`react-router-dom`, `react-helmet-async`, `react-hook-form`, `zod`, `@hookform/resolvers`, `framer-motion`, `@emailjs/browser`, `lucide-react`, `dialog-polyfill`)
    - Install dev dependencies (`tailwindcss`, `@tailwindcss/forms`, `vite-imagetools`, `vite-plugin-sitemap`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `fast-check`, `jsdom`)
    - Configure `tailwind.config.ts` with the green/gray design tokens and the `content` glob
    - Configure `vite.config.ts` with `@vitejs/plugin-react`, `imagetools()`, and `sitemap()` plugins; add manual chunk splits for `react-vendor`, `framer-motion`, and `form`
    - Configure `tsconfig.json` with strict mode and path aliases (`@/` → `src/`)
    - Configure Vitest in `vite.config.ts` (`environment: 'jsdom'`, `setupFiles: ['./src/test/setup.ts']`)
    - Add `.env.example` listing all `VITE_*` environment variables with placeholder values
    - _Requirements: 9.6, 11.9, 13.4_

  - [x] 1.2 Create `src/config/site.ts` and `src/types/index.ts`
    - Implement the `SITE_CONFIG` constant with all fields from the design (phone, email, address, SEO defaults, social URLs)
    - Define and export all TypeScript interfaces: `ServiceItem`, `Testimonial`, `GalleryImage`, `QuoteFormData`, `LocalBusinessSchema`, `SiteConfig`, address/geo sub-types
    - _Requirements: 8.1, 8.2, 13.4_

- [x] 2. Static data files
  - [x] 2.1 Create `src/data/services.ts` with all 9 `ServiceItem` entries
    - Tree Felling, Crown Reduction, Crown Thinning, Tree Pruning, Stump Grinding/Removal, Emergency Tree Surgery, Hedge Trimming and Shaping, Tree Planting and Aftercare, Arboricultural Surveys and Reports
    - Each entry must have a unique Lucide React icon, `shortDescription` ≥ 40 words, `fullDescription` ≥ 80 words, and a `schemaName`
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 2.2 Create `src/data/testimonials.ts` with ≥ 6 `Testimonial` entries and `AGGREGATE_RATING`
    - Each testimonial must have `customerName` (first name + initial), `serviceReceived`, `rating` (1–5), and `reviewText`
    - Export `AGGREGATE_RATING` calculated from the array
    - _Requirements: 6.1, 6.4, 6.6_

  - [ ]* 2.3 Write unit test asserting `TESTIMONIALS.length >= 6` (Property 10)
    - **Property 10: Testimonial Minimum**
    - **Validates: Requirements 6.1**

  - [x] 2.4 Create `src/data/gallery.ts` with ≥ 12 `GalleryImage` entries
    - Each entry requires `src`, `srcFallback`, non-empty `alt`, `width`, and `height`
    - Use placeholder image paths until real images are available
    - _Requirements: 5.1, 5.5, 8.7_

  - [ ]* 2.5 Write unit test asserting every gallery image has a non-empty `alt` (Property 9)
    - **Property 9: Gallery Alt Coverage**
    - **Validates: Requirements 5.5, 8.7**

- [x] 3. Context providers and custom hooks
  - [x] 3.1 Implement `CookieConsentContext` (`src/context/CookieConsentContext.tsx`)
    - State: `consent: 'pending' | 'accepted' | 'declined'`
    - On mount: read `localStorage.getItem('cookie_consent')` and hydrate state
    - `accept()`: sets state to `'accepted'`, writes to `localStorage`, dynamically injects GA4 `<script>` tag using `VITE_GA4_MEASUREMENT_ID`
    - `decline()`: sets state to `'declined'`, writes to `localStorage`, does not inject GA4
    - _Requirements: 11.5, 11.6, 11.7, 14.1_

  - [ ]* 3.2 Write property-based test for cookie consent persistence (Property 6)
    - **Property 6: Cookie Consent Persistence**
    - After `accept()` → `localStorage.getItem('cookie_consent') === 'accepted'`
    - After `decline()` → `localStorage.getItem('cookie_consent') === 'declined'`
    - On re-initialisation with stored value, `CookieConsentBanner` must not render
    - **Validates: Requirements 11.5, 11.6, 11.7**

  - [x] 3.3 Implement `LightboxContext` (`src/context/LightboxContext.tsx`)
    - State: `isOpen`, `currentIndex`
    - `open(index)`: sets `isOpen = true`, `currentIndex = index`, stores `triggerElementRef`
    - `close()`: sets `isOpen = false`, returns focus to `triggerElementRef.current`
    - `next()` / `prev()`: increment/decrement `currentIndex` with wrap-around using `GALLERY_IMAGES.length`
    - _Requirements: 5.2, 5.3, 5.4_

  - [ ]* 3.4 Write property-based test for lightbox wrap-around navigation (Property 5)
    - **Property 5: Lightbox Wrap-Around**
    - For any `n >= 1` and `currentIndex` in `[0, n-1]`: `next()` at `n-1` → `0`; `prev()` at `0` → `n-1`; all other moves shift by exactly ±1
    - Use fast-check `fc.integer` generators for `n` and `currentIndex`
    - **Validates: Requirements 5.3**

  - [x] 3.5 Implement `useActiveSection` hook (`src/hooks/useActiveSection.ts`)
    - Uses `IntersectionObserver` with threshold `0.4` to track the most-visible section `id`
    - Returns `string` — the `id` of the currently active section
    - Disconnects observer on cleanup
    - _Requirements: 1.8_

  - [x] 3.6 Implement `useClickOutside` hook (`src/hooks/useClickOutside.ts`)
    - Accepts a `RefObject<HTMLElement>` and a `handler` callback
    - Attaches `mousedown` and `touchstart` listeners on `document`
    - Calls `handler` only when the event target is outside the referenced element
    - Removes listeners on cleanup
    - _Requirements: 1.4, 1.9_

  - [x] 3.7 Implement `useScrollLock` hook (`src/hooks/useScrollLock.ts`)
    - Accepts a `boolean` `isLocked`
    - Toggles `document.body.style.overflow = 'hidden'` / `''` reactively
    - Restores original overflow value on cleanup
    - _Requirements: 5.2_

- [x] 4. Layout components
  - [x] 4.1 Implement `SkipLink` component (`src/components/layout/SkipLink.tsx`)
    - `<a href="#main-content">` styled with `sr-only focus:not-sr-only` Tailwind classes
    - Becomes visible on keyboard focus at `z-[9999]` above all other content
    - _Requirements: 10.5_

  - [x] 4.2 Implement `Navbar` component (`src/components/layout/Navbar.tsx`)
    - Sticky positioning (`sticky top-0 z-50`)
    - Company logo top-left, desktop nav links, hamburger toggle for `< 768px`
    - `isMenuOpen` local state; mobile menu `aria-expanded`, `aria-controls="mobile-menu"`, `aria-hidden={!isMenuOpen}`
    - `useActiveSection` to highlight the active nav link with a visually distinct style
    - `useClickOutside` to close the menu when clicking outside
    - Close menu on: toggle click, nav link click, outside click
    - `<nav role="navigation" aria-label="Main navigation">`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9_

  - [x] 4.3 Implement `Footer` component (`src/components/layout/Footer.tsx`)
    - Business name, tagline, phone (`<a href="tel:…">`), email (`<a href="mailto:…">`), service area
    - Facebook and Instagram icon links with `aria-label`, `target="_blank" rel="noopener noreferrer"`, minimum 44×44 px tap target
    - Links to `/privacy-policy` and `/cookie-policy`
    - Copyright notice
    - _Requirements: 1.5, 15.1, 15.2, 15.3_

- [x] 5. UI utility components
  - [x] 5.1 Implement `StarRating` component (`src/components/ui/StarRating.tsx`)
    - Props: `rating: number`, `maxRating?: number` (default 5), `ariaLabel?: string`
    - Renders filled/half/empty SVG stars using Lucide React `Star` icon
    - Accessible `aria-label` for screen reader announcement of the numeric rating
    - _Requirements: 6.1, 6.4_

  - [x] 5.2 Implement `SchemaMarkup` component (`src/components/ui/SchemaMarkup.tsx`)
    - Props: `schema: Record<string, unknown>`
    - Injects `<script type="application/ld+json">` via `react-helmet-async`
    - _Requirements: 8.3, 8.4_

  - [ ]* 5.3 Write unit test for Schema completeness (Property 8)
    - **Property 8: Schema Completeness**
    - Assert that the `LocalBusiness` JSON-LD object has truthy values for: `name`, `address`, `telephone`, `geo`, `areaServed`, `openingHoursSpecification`, `url`
    - **Validates: Requirements 8.3**

  - [x] 5.4 Implement `ErrorBoundary` component (`src/components/ui/ErrorBoundary.tsx`)
    - Class component catching render-phase errors
    - Renders a friendly fallback (no stack traces, no HTTP codes) in production
    - _Requirements: 16.3, 16.4_

  - [x] 5.5 Implement `CookieConsentBanner` component (`src/components/ui/CookieConsentBanner.tsx`)
    - Fixed bottom bar, visible only when `consent === 'pending'`
    - Accept and Decline buttons with equal visual prominence, neither pre-selected
    - Link to `/cookie-policy`
    - Calls `CookieConsentContext.accept()` / `decline()` on button click
    - _Requirements: 11.5, 11.6, 11.7_

- [x] 6. Home page sections — Hero and Services
  - [x] 6.1 Implement `Hero` section (`src/components/sections/Hero.tsx`)
    - `<section id="hero" aria-labelledby="hero-heading">`
    - `<h1 id="hero-heading">` containing "Evergreen Arbor Services"
    - Sub-headline referencing "Liverpool" and tree surgery, ≤ 100 characters
    - Two CTA `<a>` links: "Get a Free Quote" → `#contact`, "Our Services" → `#services`
    - Background `<picture>` with AVIF → WebP → JPEG sources; `fetchpriority="high"` on `<img>`
    - CSS fallback background colour ensuring ≥ 4.5:1 contrast if image fails (Req 2.6)
    - Mobile: single-column stacked layout below 768px
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [x] 6.2 Implement `ServiceCard` component (`src/components/ui/ServiceCard.tsx`)
    - Props: `service: ServiceItem`, `isExpanded: boolean`, `onToggle: () => void`
    - Renders Lucide icon, `<h3>` title, short description
    - Toggle button with `aria-expanded`, `aria-controls` pointing to the accordion panel
    - Accordion panel: `role="region"`, `aria-labelledby` linked to toggle button
    - Framer Motion `AnimatePresence` + `motion.div` for expand/collapse animation
    - Start in collapsed state on mount
    - _Requirements: 3.2, 3.4_

  - [x] 6.3 Implement `Services` section (`src/components/sections/Services.tsx`)
    - `<section id="services" aria-labelledby="services-heading">`
    - `expandedCardId: string | null` local state — only one card open at a time
    - Grid of 9 `<ServiceCard>` components: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
    - Single-column layout below 768px
    - Bottom CTA linking to `#contact`
    - Inject one `<SchemaMarkup>` per service (Service JSON-LD)
    - _Requirements: 3.1, 3.3, 3.4, 3.5, 3.6, 8.4_

  - [ ]* 6.4 Write property-based test for accordion exclusivity (Property 4)
    - **Property 4: Accordion Exclusivity**
    - For any sequence of `onToggle` calls, `expandedCardIds.filter(Boolean).length <= 1` must hold after each call
    - Use fast-check `fc.array(fc.integer({ min: 0, max: 8 }))` as the sequence of toggle indices
    - **Validates: Requirements 3.4**

- [x] 7. Home page sections — About and Gallery
  - [x] 7.1 Implement `About` section (`src/components/sections/About.tsx`)
    - `<section id="about" aria-labelledby="about-heading">`
    - Establishment year, years in service, mission description ≥ 50 words
    - Qualifications list: NPTC/Lantra, Arboricultural Association membership, public liability insurance details
    - Team photograph with descriptive `alt` text
    - Geographic service area: Liverpool and Merseyside
    - H&S statement referencing PPE, BS 3998/HSWA 1974, risk assessments
    - Trust indicators: insurance amount in GBP and trade association logo
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 7.2 Implement `LightboxModal` component (`src/components/ui/LightboxModal.tsx`)
    - Native `<dialog>` element with `aria-modal="true"`, `aria-label="Image gallery lightbox"`
    - Full-viewport overlay; current image fits viewport without cropping
    - Previous / Next buttons with `aria-label`; wrap-around at array boundaries
    - Close button and Escape key handler (via `useEffect` on `keydown`)
    - On open: focus moves to close button; on close: focus returns to triggering thumbnail
    - `useScrollLock` prevents background scroll while open
    - Import `dialog-polyfill` for Safari < 15.4
    - Lazy-loaded via `React.lazy` — only included in bundle on first interaction
    - _Requirements: 5.2, 5.3, 5.4, 10.2_

  - [x] 7.3 Implement `Gallery` section (`src/components/sections/Gallery.tsx`)
    - `<section id="gallery" aria-labelledby="gallery-heading">`
    - Responsive grid: `grid-cols-2 md:grid-cols-3`; no horizontal overflow at any breakpoint
    - First 3 images omit `loading="lazy"`; all others use `loading="lazy"`
    - Each thumbnail is a `<button>` wrapping `<img>` with `width`, `height`, and `alt` attributes
    - On thumbnail click: call `LightboxContext.open(index)`; store thumbnail ref for focus restore
    - Render `<LightboxModal>` via `LightboxContext` when `isOpen`
    - _Requirements: 5.1, 5.2, 5.5, 5.6, 5.7, 9.3_

- [x] 8. Checkpoint — core sections verified
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Home page sections — Testimonials and Contact
  - [x] 9.1 Implement `TestimonialCard` component (`src/components/ui/TestimonialCard.tsx`)
    - Props: `testimonial: Testimonial`
    - `<article>` with `<StarRating>`, review text, customer name, service received
    - _Requirements: 6.1_

  - [x] 9.2 Implement `Testimonials` section (`src/components/sections/Testimonials.tsx`)
    - `<section id="testimonials" aria-labelledby="testimonials-heading">`
    - Aggregate star rating displayed above the first testimonial card
    - Desktop (≥ 1024px): horizontally scrollable carousel with `useEffect` / `setInterval` auto-rotate every 5 s; pause on hover and keyboard focus
    - Mobile (< 768px): single-column stacked list
    - If `VITE_GOOGLE_PLACES_API_KEY` is set, attempt Google Places API fetch; fall back silently to static data on failure
    - CTA "Leave a Google Review" linking to `SITE_CONFIG.googleBusinessProfileUrl`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

  - [x] 9.3 Implement Zod schema and EmailJS utility
    - Create `src/utils/emailjs.ts` exporting `sendQuoteEmail(data: QuoteFormData): Promise<void>`
    - Define `quoteFormSchema` with `UK_PHONE_REGEX` in `src/components/forms/QuoteRequestForm.tsx` (or a shared schema file)
    - UK phone regex must NOT use the global flag (Property 3)
    - _Requirements: 7.3, 7.4, 7.6, 7.7, 11.8_

  - [ ]* 9.4 Write property-based test for honeypot rejection (Property 2)
    - **Property 2: Form Honeypot Rejection**
    - For any `QuoteFormData` where `_hp` is a non-empty string (arbitrary `fc.string({ minLength: 1 })`), `sendQuoteEmail` must never be called
    - **Validates: Requirements 11.8**

  - [ ]* 9.5 Write property-based test for UK phone regex idempotency (Property 3)
    - **Property 3: UK Phone Validation Idempotency**
    - For all strings matching `UK_PHONE_REGEX`, a second call to `UK_PHONE_REGEX.test(s)` must also return `true`
    - Use fast-check `fc.constantFrom(...validSamples)` with a representative corpus of valid UK numbers
    - **Validates: Requirements 7.7**

  - [x] 9.6 Implement `QuoteRequestForm` component (`src/components/forms/QuoteRequestForm.tsx`)
    - `useForm<QuoteFormData>` with `zodResolver(quoteFormSchema)` and `mode: 'onBlur'`
    - All 7 fields (Full Name, Phone, Email, Service Address, Service Type `<select>`, Description `<textarea>`, Preferred Contact radio group)
    - Honeypot `_hp` field: off-screen, `aria-hidden="true"`, `tabIndex={-1}`
    - ARIA live region (`role="alert" aria-live="polite"`) summarising validation error count
    - Inline error messages with `role="alert"` beneath each invalid field
    - Submit button `disabled={isSubmitting}` / re-enabled after settle
    - `submitStatus: 'idle' | 'success' | 'error'` state; success and error inline messages
    - Privacy notice with link to `/privacy-policy`
    - GA4 conversion event on success via `trackConversionEvent()`
    - _Requirements: 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.10, 7.11, 10.6, 10.8, 11.8, 14.2_

  - [x] 9.7 Implement `Contact` section (`src/components/sections/Contact.tsx`)
    - `<section id="contact" aria-labelledby="contact-heading">`
    - Visible phone (`<a href="tel:…">`), email, service area text
    - Render `<QuoteRequestForm />`
    - Google Maps `<iframe>` centred on Liverpool/Merseyside; include `title` attribute for accessibility
    - _Requirements: 7.1, 7.8, 7.9, 12.4_

- [x] 10. Analytics utility
  - [x] 10.1 Implement `src/utils/analytics.ts`
    - Export `trackPageView(path: string)`, `trackConversionEvent()`, `trackCtaClick(ctaLabel: string)`
    - Each function guards `typeof window.gtag !== 'function'` before calling to prevent errors when GA4 is not loaded
    - Wire `trackCtaClick` to the Hero CTA buttons and phone number links
    - _Requirements: 14.1, 14.2, 14.3_

- [x] 11. Pages, routing, and App shell
  - [x] 11.1 Implement `HomePage` (`src/pages/HomePage.tsx`)
    - Render sections in order: `<Hero>`, `<Services>`, `<About>`, `<Gallery>`, `<Testimonials>`, `<Contact>`
    - Wrap in `<main id="main-content" role="main">`
    - Inject `<Helmet>` with unique `<title>` (≤ 60 chars), `<meta name="description">` (120–160 chars), canonical link, Open Graph tags, Twitter Card tags
    - Inject `<SchemaMarkup>` for `LocalBusiness` JSON-LD
    - _Requirements: 8.1, 8.2, 8.3, 8.8, 8.9, 8.10_

  - [x] 11.2 Implement `PrivacyPolicyPage` and `CookiePolicyPage` (`src/pages/`)
    - Each page has a unique `<title>` and `<meta name="description">`
    - `<main id="main-content">` with full policy text covering the requirements (data controller, data collected, retention, lawful basis, cookie names, purposes, expiry)
    - Lazy-loaded via `React.lazy`
    - _Requirements: 8.1, 8.2, 11.3, 11.4_

  - [x] 11.3 Implement `NotFoundPage` (`src/pages/NotFoundPage.tsx`)
    - Unique title, `<meta name="robots" content="noindex">`
    - Non-technical error explanation (no status codes, no stack traces)
    - Link back to Home page
    - Lazy-loaded via `React.lazy`
    - _Requirements: 16.1, 16.4_

  - [x] 11.4 Implement `App.tsx` with Router + Context providers + lazy routes
    - Wrap everything in `<CookieConsentProvider>`, `<LightboxProvider>`, `<HelmetProvider>`, `<BrowserRouter>`
    - Render `<SkipLink>` as first child, then `<Navbar>`, `<Suspense>` over routes, `<Footer>`, `<CookieConsentBanner>`
    - Routes: `/` → `<HomePage>`, `/privacy-policy` → lazy `<PrivacyPolicyPage>`, `/cookie-policy` → lazy `<CookiePolicyPage>`, `*` → lazy `<NotFoundPage>`
    - Wrap in `<ErrorBoundary>` at the top level
    - _Requirements: 1.1, 1.5, 10.5, 16.1_

- [x] 12. SEO, sitemap, robots, and performance configuration
  - [x] 12.1 Configure `vite-plugin-sitemap` and create `public/robots.txt`
    - Sitemap routes: `/`, `/privacy-policy`, `/cookie-policy`
    - `robots.txt`: allow all agents, include `Sitemap:` directive pointing to absolute URL
    - _Requirements: 8.5, 8.6_

  - [x] 12.2 Create `vercel.json` (or `netlify.toml`) with security headers, cache headers, and SPA rewrite
    - `Cache-Control: public, max-age=31536000, immutable` for `/assets/(.*)`
    - `Cache-Control: public, max-age=0, must-revalidate` for HTML
    - Full CSP header covering EmailJS, Google Tag Manager, Google Maps, GA4
    - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`
    - SPA fallback rewrite: `/* → /index.html`
    - _Requirements: 9.5, 9.8, 11.1, 11.2, 11.9_

  - [x] 12.3 Add Open Graph image and favicon to `public/`
    - Place `public/assets/og-image.jpg` (≥ 1200×630 px) and `public/favicon.ico`
    - Verify that `SITE_CONFIG.seo.ogImage` path matches
    - _Requirements: 8.9, 15.4_

  - [ ]* 12.4 Write static colour-token contrast audit (Property 7)
    - **Property 7: Contrast Invariant**
    - Script or test that reads the Tailwind design tokens defined in `tailwind.config.ts` and asserts all text/background colour pairs meet ≥ 4.5:1 (normal text) and ≥ 3:1 (large text)
    - **Validates: Requirements 10.4**

- [x] 13. Navigation completeness and property tests
  - [ ]* 13.1 Write property test for navigation completeness (Property 1)
    - **Property 1: Navigation Completeness**
    - Render `<HomePage>` and assert that for every `href` in `NAV_LINKS` that is a hash fragment, a DOM element with the matching `id` exists
    - **Validates: Requirements 1.1, 1.8**

- [x] 14. Final integration wiring and README
  - [x] 14.1 Wire GA4 tracking calls throughout the app
    - Import and call `trackCtaClick` on Hero "Get a Free Quote" and "Our Services" buttons
    - Import and call `trackCtaClick` on all phone `tel:` links
    - Ensure `CookieConsentContext.accept()` injects the GA4 script before any tracking event fires
    - _Requirements: 14.1, 14.2, 14.3_

  - [x] 14.2 Write `README.md`
    - Local development setup (prerequisites, `npm install`, `npm run dev`, environment variables)
    - Production build process (`npm run build`, `npm run preview`)
    - Deployment process (Vercel CLI command, environment variable configuration)
    - How to update Gallery photographs (edit `src/data/gallery.ts`)
    - How to update Testimonials (edit `src/data/testimonials.ts`)
    - How to update Service descriptions (edit `src/data/services.ts`)
    - How to update contact details (edit `src/config/site.ts`)
    - _Requirements: 13.5_

- [ ] 15. Final checkpoint — all tests pass
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for full traceability
- Property-based tests use **fast-check** as specified in the design document
- Checkpoints in tasks 8 and 15 gate progress between major milestones
- The `LightboxModal` and legal pages are code-split via `React.lazy` — they are not in the initial JS bundle
- Image optimisation (WebP/AVIF via `vite-imagetools`) requires real image files; placeholder paths are acceptable during development
- The `VITE_GOOGLE_PLACES_API_KEY` environment variable is optional; the app degrades gracefully to static testimonials if absent

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.4"] },
    { "id": 2, "tasks": ["2.3", "2.5", "3.1", "3.3"] },
    { "id": 3, "tasks": ["3.2", "3.4", "3.5", "3.6", "3.7"] },
    { "id": 4, "tasks": ["4.1", "4.2", "4.3", "5.1", "5.2", "5.4", "5.5"] },
    { "id": 5, "tasks": ["5.3", "6.1", "6.2", "7.1", "7.2"] },
    { "id": 6, "tasks": ["6.3", "7.3", "9.1", "9.3"] },
    { "id": 7, "tasks": ["6.4", "9.2", "9.4", "9.5", "9.6", "10.1"] },
    { "id": 8, "tasks": ["9.7", "11.1", "11.2", "11.3"] },
    { "id": 9, "tasks": ["11.4", "12.1", "12.2", "12.3"] },
    { "id": 10, "tasks": ["12.4", "13.1", "14.1"] },
    { "id": 11, "tasks": ["14.2"] }
  ]
}
```
