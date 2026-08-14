/**
 * Home page — assembles all landing-page sections.
 *
 * Requirements: 8.1–8.10
 */

import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import { SchemaMarkup } from '@/components/ui/SchemaMarkup'
import { SITE_CONFIG } from '@/config/site'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.businessName,
  description: SITE_CONFIG.seo.defaultDescription,
  url: SITE_CONFIG.seo.siteUrl,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  image: `${SITE_CONFIG.seo.siteUrl}${SITE_CONFIG.seo.ogImage}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Liverpool',
    addressRegion: 'Merseyside',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.4084,
    longitude: -2.9916,
  },
  areaServed: [
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Sefton' },
    { '@type': 'City', name: 'Knowsley' },
    { '@type': 'City', name: 'Wirral' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Halton' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.instagram,
  ].filter(Boolean),
}

export default function HomePage() {
  const { seo } = SITE_CONFIG
  const pageTitle = 'Tree Surgeon Liverpool | Evergreen Arbor Services'
  const pageDescription =
    'Expert tree surgery and arborist services across Liverpool and Merseyside. ' +
    'NPTC-qualified team offering tree felling, crown reduction, stump grinding & emergency call-outs. ' +
    'Free no-obligation quotes.'

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${seo.siteUrl}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${seo.siteUrl}/`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${seo.siteUrl}${seo.ogImage}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${seo.siteUrl}${seo.ogImage}`} />
      </Helmet>

      <SchemaMarkup schema={localBusinessSchema} />

      <main id="main-content" role="main">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
