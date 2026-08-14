/**
 * Privacy Policy page.
 *
 * Requirements: 8.1, 8.2, 11.3, 11.4
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '@/config/site'

export default function PrivacyPolicyPage() {
  const { businessName, email, seo } = SITE_CONFIG

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {businessName}</title>
        <meta
          name="description"
          content={`Read the privacy policy for ${businessName}. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.`}
        />
        <link rel="canonical" href={`${seo.siteUrl}/privacy-policy`} />
      </Helmet>

      <main id="main-content" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-10">Last updated: January 2025</p>

          {/* 1. Data Controller */}
          <section aria-labelledby="section-controller" className="mb-10">
            <h2 id="section-controller" className="text-xl font-semibold text-gray-900 mb-3">
              1. Data Controller
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>{businessName}</strong> is the data controller for the personal information
              collected through this website. We are based in Liverpool, Merseyside, England.
              You can contact us at{' '}
              <a
                href={`mailto:${email}`}
                className="text-green-700 underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
              >
                {email}
              </a>
              .
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section aria-labelledby="section-data-collected" className="mb-10">
            <h2 id="section-data-collected" className="text-xl font-semibold text-gray-900 mb-3">
              2. Data We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you use our Quote Request Form, we collect the following personal data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service address or postcode</li>
              <li>Details of the tree surgery work you require</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We do not collect sensitive personal data (as defined by UK GDPR Article 9).
            </p>
          </section>

          {/* 3. Purpose */}
          <section aria-labelledby="section-purpose" className="mb-10">
            <h2 id="section-purpose" className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your personal data is used solely to respond to your quote request — to contact
              you with a quote, arrange a site visit, or answer any follow-up questions you may
              have. We do not use your data for marketing purposes, and we do not sell or share
              it with third parties for their own commercial purposes.
            </p>
          </section>

          {/* 4. Legal Basis */}
          <section aria-labelledby="section-legal-basis" className="mb-10">
            <h2 id="section-legal-basis" className="text-xl font-semibold text-gray-900 mb-3">
              4. Legal Basis for Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We process your personal data on the basis of our <strong>legitimate interests</strong>{' '}
              (UK GDPR Article 6(1)(f)) in responding to your enquiry and providing our services,
              and/or your <strong>consent</strong> (UK GDPR Article 6(1)(a)) where you have voluntarily
              provided your details to us. You may withdraw consent at any time by contacting us
              at the address below.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section aria-labelledby="section-retention" className="mb-10">
            <h2 id="section-retention" className="text-xl font-semibold text-gray-900 mb-3">
              5. How Long We Keep Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal data submitted through the Quote Request Form for a maximum of
              <strong> 2 years</strong> from the date of submission. After this period, your data
              is permanently deleted from our systems. If a contractual relationship arises from
              your enquiry, we may retain relevant records for a longer period to fulfil our legal
              obligations.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section aria-labelledby="section-rights" className="mb-10">
            <h2 id="section-rights" className="text-xl font-semibold text-gray-900 mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Under UK GDPR, you have the following rights in relation to your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
              <li>
                <strong>Right of access</strong> — you can request a copy of the personal data
                we hold about you.
              </li>
              <li>
                <strong>Right to erasure</strong> — you can ask us to delete your personal data
                at any time, subject to any legal obligations we have to retain it.
              </li>
              <li>
                <strong>Right to data portability</strong> — you can request that we provide your
                personal data in a structured, commonly used, machine-readable format.
              </li>
              <li>
                <strong>Right to rectification</strong> — you can ask us to correct any inaccurate
                or incomplete personal data we hold about you.
              </li>
              <li>
                <strong>Right to restrict processing</strong> — in certain circumstances, you can
                ask us to restrict how we use your data.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a
                href={`mailto:${email}`}
                className="text-green-700 underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
              >
                {email}
              </a>
              . You also have the right to lodge a complaint with the Information Commissioner's
              Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          {/* 7. Contact */}
          <section aria-labelledby="section-contact" className="mb-10">
            <h2 id="section-contact" className="text-xl font-semibold text-gray-900 mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this privacy policy or how we handle your personal
              data, please contact us:
            </p>
            <address className="mt-3 not-italic text-gray-700 leading-relaxed">
              <strong>{businessName}</strong><br />
              Liverpool, Merseyside<br />
              Email:{' '}
              <a
                href={`mailto:${email}`}
                className="text-green-700 underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
              >
                {email}
              </a>
            </address>
          </section>

          {/* Navigation back */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <Link
              to="/"
              className="text-green-700 text-sm font-medium underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              ← Back to the home page
            </Link>
            <span className="mx-3 text-gray-300" aria-hidden="true">|</span>
            <Link
              to="/cookie-policy"
              className="text-green-700 text-sm font-medium underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
