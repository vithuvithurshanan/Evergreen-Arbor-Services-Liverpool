/**
 * Cookie Policy page.
 *
 * Requirements: 8.1, 8.2, 11.3, 11.4
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '@/config/site'

export default function CookiePolicyPage() {
  const { businessName, seo } = SITE_CONFIG

  return (
    <>
      <Helmet>
        <title>Cookie Policy | {businessName}</title>
        <meta
          name="description"
          content={`Cookie policy for ${businessName}. Learn about the cookies we use, how to manage them, and how they relate to your privacy.`}
        />
        <link rel="canonical" href={`${seo.siteUrl}/cookie-policy`} />
      </Helmet>

      <main id="main-content" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Cookie Policy
          </h1>

          <p className="text-sm text-gray-500 mb-10">Last updated: January 2025</p>

          {/* 1. What are cookies */}
          <section aria-labelledby="section-what-are-cookies" className="mb-10">
            <h2 id="section-what-are-cookies" className="text-xl font-semibold text-gray-900 mb-3">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that a website places on your device (computer,
              tablet, or mobile phone) when you visit. They help the website function correctly
              and allow us to understand how visitors use our site so we can improve it.
            </p>
          </section>

          {/* 2. Cookies we use */}
          <section aria-labelledby="section-cookies-used" className="mb-10">
            <h2 id="section-cookies-used" className="text-xl font-semibold text-gray-900 mb-3">
              2. Cookies We Use
            </h2>

            {/* Essential cookies */}
            <h3 className="text-base font-semibold text-gray-800 mb-2 mt-6">
              Essential Cookies
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm text-gray-700 rounded-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Name</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Type</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Duration</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-mono">cookie_consent</td>
                    <td className="px-4 py-2">First-party (localStorage)</td>
                    <td className="px-4 py-2">365 days</td>
                    <td className="px-4 py-2">
                      Stores your cookie consent preference (accepted or declined) so we do not
                      show the consent banner on every page visit.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This cookie is strictly necessary for the site to function in accordance with
              your privacy choices. It cannot be disabled.
            </p>

            {/* Analytics cookies */}
            <h3 className="text-base font-semibold text-gray-800 mb-2 mt-6">
              Analytics Cookies (only if you accept)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you choose to accept analytics cookies, we use Google Analytics 4 (GA4) to
              understand how visitors use our website. This helps us improve the user experience
              and the services we offer. These cookies are only set after you give your consent.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm text-gray-700 rounded-md">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Name</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Provider</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Duration</th>
                    <th scope="col" className="px-4 py-2 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 font-mono">_ga</td>
                    <td className="px-4 py-2">Google Analytics</td>
                    <td className="px-4 py-2">2 years</td>
                    <td className="px-4 py-2">
                      Distinguishes unique users by assigning a randomly generated number as
                      a client identifier. Used to calculate visit, session, and campaign data.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono">_ga_xxx</td>
                    <td className="px-4 py-2">Google Analytics</td>
                    <td className="px-4 py-2">2 years</td>
                    <td className="px-4 py-2">
                      Stores and counts page views for the GA4 measurement ID associated with
                      this website.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Google Analytics data is processed in accordance with{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
              >
                Google's Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* 3. Managing cookies */}
          <section aria-labelledby="section-manage-cookies" className="mb-10">
            <h2 id="section-manage-cookies" className="text-xl font-semibold text-gray-900 mb-3">
              3. How to Manage and Delete Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You can control your analytics cookie preference using the banner that appears
              when you first visit our site. You can change your preference at any time by
              clearing your browser's local storage for this domain.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              You can also manage or delete cookies through your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Please note that disabling cookies may affect the functionality of some websites,
              including this one.
            </p>
          </section>

          {/* 4. Changes */}
          <section aria-labelledby="section-changes" className="mb-10">
            <h2 id="section-changes" className="text-xl font-semibold text-gray-900 mb-3">
              4. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in the
              cookies we use or for other operational, legal, or regulatory reasons. Please
              revisit this page periodically to stay informed.
            </p>
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
              to="/privacy-policy"
              className="text-green-700 text-sm font-medium underline hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
