import type { SiteConfig } from '../types'

export const SITE_CONFIG: SiteConfig = {
  businessName: 'Evergreen Arbor Services',
  tagline: 'Professional Tree Surgery & Arborist Services in Liverpool',
  phone: '0151 555 0192',
  email: 'info@evergreenarborservices.co.uk',
  address: {
    street: '12 Arbor Way',
    city: 'Liverpool',
    county: 'Merseyside',
    postcode: 'L1 8JQ',
    country: 'GB',
  },
  serviceArea: 'Liverpool and Merseyside',
  googleMapsUrl: 'https://maps.google.com/?q=Liverpool,Merseyside',
  googleBusinessProfileUrl: 'https://maps.google.com/?q=Evergreen+Arbor+Services+Liverpool',
  social: {
    facebook: 'https://facebook.com/evergreenarborservices',
    instagram: 'https://instagram.com/evergreenarborservices',
  },
  seo: {
    defaultTitle: 'Tree Surgeon Liverpool | Evergreen Arbor Services',
    defaultDescription:
      'Professional tree surgery and arborist services across Liverpool and Merseyside. Tree felling, crown reduction, stump grinding & more. Get a free quote today.',
    siteUrl: 'https://www.evergreenarborservices.co.uk',
    ogImage: '/assets/og-image.jpg',
  },
}
