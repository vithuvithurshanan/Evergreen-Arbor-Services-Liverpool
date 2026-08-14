import type { LucideIcon } from 'lucide-react'

/**
 * Top-level site configuration — single instance in src/config/site.ts.
 * Satisfies: Req 13.4 (admin edits one file to update contact details).
 */
export interface SiteConfig {
  businessName: string
  tagline: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    county: string
    postcode: string
    country: string
  }
  serviceArea: string
  googleMapsUrl: string
  googleBusinessProfileUrl: string
  social: {
    facebook: string
    instagram: string
  }
  seo: {
    defaultTitle: string
    defaultDescription: string
    siteUrl: string
    ogImage: string
  }
}

/**
 * A single service offered by Evergreen Arbor Services.
 * Nine instances are required (Req 3.1).
 */
export interface ServiceItem {
  /** URL-safe slug, e.g. 'tree-felling' */
  id: string
  /** Display name shown in Service Card title and <select> option */
  title: string
  /** Minimum 40 words — shown on collapsed Service Card */
  shortDescription: string
  /** Minimum 80 words — shown in expanded accordion panel */
  fullDescription: string
  /** Unique Lucide React icon component for this service */
  icon: LucideIcon
  /** Human-readable name used in Service JSON-LD schema markup */
  schemaName: string
}

/**
 * A customer testimonial.
 * Minimum 6 instances required (Req 6.1).
 */
export interface Testimonial {
  /** Unique identifier */
  id: string
  /** First name + initial only, e.g. "Sarah T." */
  customerName: string
  /** One of the nine service titles */
  serviceReceived: string
  /** Integer 1–5 */
  rating: number
  /** Full review text */
  reviewText: string
}

/**
 * A gallery photograph entry.
 * Minimum 12 instances required (Req 5.1).
 */
export interface GalleryImage {
  /** Unique identifier */
  id: string
  /** Path to WebP/AVIF image or placeholder URL */
  src: string
  /** Path to JPEG fallback */
  srcFallback: string
  /** Non-empty descriptive alt text (Req 5.5, 8.7) */
  alt: string
  /** Intrinsic pixel width — prevents CLS (Req 9.3) */
  width: number
  /** Intrinsic pixel height — prevents CLS (Req 9.3) */
  height: number
  /** Optional category for filtering */
  category?: string
}
