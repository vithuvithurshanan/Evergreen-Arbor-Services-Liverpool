/**
 * Analytics utilities — GA4 (gtag) integration.
 *
 * All functions guard against gtag not being present so the site works
 * without analytics (dev mode, cookie consent not yet given, ad-blockers).
 *
 * Requirements: 14.1–14.3
 */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

/**
 * Track a virtual page view (used with client-side routing).
 * @param path - e.g. '/privacy-policy'
 */
export function trackPageView(path: string): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}

/**
 * Fire a quote-form conversion event when a quote request is submitted.
 */
export function trackConversionEvent(): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'quote_form_submitted', {
    event_category: 'engagement',
    event_label: 'Quote Request Form',
  })
}

/**
 * Fire a CTA click event.
 * @param ctaLabel - Human-readable label, e.g. 'Get a Free Quote'
 */
export function trackCtaClick(ctaLabel: string): void {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaLabel,
  })
}
