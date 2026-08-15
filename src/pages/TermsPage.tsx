/**
 * Terms & Conditions page — adapted for Evergreen Arbor Services (UK).
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '@/config/site'

const LINK_CLS =
  'text-emerald-400 underline hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded'

export default function TermsPage() {
  const { businessName, phone, email, address, seo } = SITE_CONFIG

  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | {businessName}</title>
        <meta
          name="description"
          content={`Terms and conditions for ${businessName}. Understand your rights and obligations when using our website and tree surgery services.`}
        />
        <link rel="canonical" href={`${seo.siteUrl}/terms`} />
      </Helmet>

      <main id="main-content" className="bg-slate-950 text-slate-300 min-h-screen py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            <strong className="text-slate-300">Effective Date:</strong> 19 January 2025&ensp;|&ensp;
            <strong className="text-slate-300">Last Updated:</strong> 9 July 2026
          </p>

          <p className="text-slate-300 leading-relaxed mb-10">
            Welcome to {businessName}. By accessing this website or using our services, you agree
            to be bound by these Terms and Conditions. If you do not agree with any part of these
            terms, please do not use our website or services.
          </p>

          {/* 1. Business Identity */}
          <section aria-labelledby="tc-section-1" className="mb-10">
            <h2 id="tc-section-1" className="text-xl font-semibold text-white mb-3">
              1. Business Identity
            </h2>
            <p className="text-slate-300 leading-relaxed">
              These Terms and Conditions govern your use of the services provided by{' '}
              <strong className="text-white">{businessName}</strong>, located at{' '}
              {address.street}, {address.city}, {address.county}, {address.postcode}.
              Contact:{' '}
              <a href={`tel:${phone.replace(/\s/g, '')}`} className={LINK_CLS}>{phone}</a>
              {' '}|{' '}
              <a href={`mailto:${email}`} className={LINK_CLS}>{email}</a>.
            </p>
          </section>

          {/* 2. Age Requirement */}
          <section aria-labelledby="tc-section-2" className="mb-10">
            <h2 id="tc-section-2" className="text-xl font-semibold text-white mb-3">
              2. Age Requirement (18+)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              By using this website or engaging our services, you confirm that you are at least
              18 years of age. Our services and any SMS communications are not directed to
              individuals under 18.
            </p>
          </section>

          {/* 3. Terminology */}
          <section aria-labelledby="tc-section-3" className="mb-10">
            <h2 id="tc-section-3" className="text-xl font-semibold text-white mb-3">
              3. Terminology
            </h2>
            <p className="text-slate-300 leading-relaxed">
              "Client," "You," and "Your" refers to the person using this website.
              "The Company," "We," "Our," and "Us" refers to{' '}
              <strong className="text-white">{businessName}</strong>.
            </p>
          </section>

          {/* 4. SMS Messaging Terms */}
          <section aria-labelledby="tc-section-4" className="mb-10">
            <h2 id="tc-section-4" className="text-xl font-semibold text-white mb-3">
              4. SMS Messaging Terms of Service
            </h2>

            <section aria-labelledby="tc-section-4a" className="mb-6">
              <h3 id="tc-section-4a" className="text-base font-semibold text-emerald-400 mb-2">
                4a. Programme Description &amp; Message Types
              </h3>
              <p className="text-slate-300 leading-relaxed mb-2">
                By providing your phone number via our contact forms and opting in, you agree to
                receive text messages from {businessName}. Messages may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                <li>Free quote confirmations and scheduling notifications</li>
                <li>Appointment reminders and project status updates</li>
                <li>Customer support and service follow-up communications</li>
                <li>Seasonal service announcements related to our tree care services</li>
              </ul>
            </section>

            <section aria-labelledby="tc-section-4b" className="mb-6">
              <h3 id="tc-section-4b" className="text-base font-semibold text-emerald-400 mb-2">
                4b. Message Frequency
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Message frequency varies based on your service activity and interactions with us.
                You may receive up to 4–8 messages per month. Frequency may increase during active
                service periods.
              </p>
            </section>

            <section aria-labelledby="tc-section-4c" className="mb-6">
              <h3 id="tc-section-4c" className="text-base font-semibold text-emerald-400 mb-2">
                4c. Message &amp; Data Rates
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Standard SMS rates may apply for messages sent to you from us and from you to us.
                Charges are determined by your mobile network provider and your individual tariff.{' '}
                {businessName} is not responsible for any carrier charges.
              </p>
            </section>

            <section aria-labelledby="tc-section-4d" className="mb-6">
              <h3 id="tc-section-4d" className="text-base font-semibold text-emerald-400 mb-2">
                4d. How to Opt Out (STOP)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                You can opt out of receiving SMS messages at any time by replying{' '}
                <strong className="text-white">STOP</strong> to any message we send. After opting
                out, you will receive a one-time confirmation message and will no longer receive
                SMS messages from us unless you re-enrol.
              </p>
            </section>

            <section aria-labelledby="tc-section-4e" className="mb-6">
              <h3 id="tc-section-4e" className="text-base font-semibold text-emerald-400 mb-2">
                4e. How to Get Help (HELP)
              </h3>
              <p className="text-slate-300 leading-relaxed mb-2">
                For help with our SMS programme, reply{' '}
                <strong className="text-white">HELP</strong> to any message or contact us:
              </p>
              <address className="not-italic text-slate-300 space-y-1 pl-2">
                <div>
                  Phone:{' '}
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className={LINK_CLS}>{phone}</a>
                </div>
                <div>
                  Email:{' '}
                  <a href={`mailto:${email}`} className={LINK_CLS}>{email}</a>
                </div>
              </address>
            </section>

            <section aria-labelledby="tc-section-4f" className="mb-6">
              <h3 id="tc-section-4f" className="text-base font-semibold text-emerald-400 mb-2">
                4f. Network Liability Disclaimer
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Mobile networks are not liable for delayed or undelivered messages.{' '}
                {businessName} cannot guarantee delivery of SMS messages. Delivery may be subject
                to your mobile network's capability and coverage area.
              </p>
            </section>
          </section>

          {/* 5. Cookies */}
          <section aria-labelledby="tc-section-5" className="mb-10">
            <h2 id="tc-section-5" className="text-xl font-semibold text-white mb-3">
              5. Cookies
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies to improve user experience and website functionality. Essential cookies
              are used to remember your preferences. Analytics cookies are only set with your
              explicit consent. See our{' '}
              <Link to="/privacy-policy" className={LINK_CLS}>Privacy Policy</Link>{' '}
              for more details.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section aria-labelledby="tc-section-6" className="mb-10">
            <h2 id="tc-section-6" className="text-xl font-semibold text-white mb-3">
              6. Intellectual Property &amp; Licence
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Unless otherwise stated, {businessName} owns the intellectual property rights for all
              content on this website. You may not copy, reproduce, republish, sell, or redistribute
              any material without our prior written permission.
            </p>
          </section>

          {/* 7. User Content */}
          <section aria-labelledby="tc-section-7" className="mb-10">
            <h2 id="tc-section-7" className="text-xl font-semibold text-white mb-3">
              7. User Content
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {businessName} reserves the right to monitor and remove any user-generated content
              submitted to our platforms that is inappropriate, offensive, or in breach of these terms.
            </p>
          </section>

          {/* 8. Content Liability */}
          <section aria-labelledby="tc-section-8" className="mb-10">
            <h2 id="tc-section-8" className="text-xl font-semibold text-white mb-3">
              8. Content Liability
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We are not responsible for content that appears on external websites linking to ours.
              You agree to defend and protect {businessName} against any claims arising from your
              website or digital properties that link to us.
            </p>
          </section>

          {/* 9. Disclaimer */}
          <section aria-labelledby="tc-section-9" className="mb-10">
            <h2 id="tc-section-9" className="text-xl font-semibold text-white mb-3">
              9. Disclaimer
            </h2>
            <p className="text-slate-300 leading-relaxed">
              To the maximum extent permitted by applicable law, {businessName} excludes all
              warranties, representations, and conditions relating to our website and services.
              We are not liable for any loss or damage (including, without limitation, loss of
              business, profits, or revenue) arising from use of our website or services.
            </p>
          </section>

          {/* 10. Changes */}
          <section aria-labelledby="tc-section-10" className="mb-10">
            <h2 id="tc-section-10" className="text-xl font-semibold text-white mb-3">
              10. Changes to These Terms
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to update these Terms and Conditions at any time. Changes will
              be posted on this page with a revised "Last Updated" date. Continued use of our
              website or services constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* 11. Contact */}
          <section aria-labelledby="tc-section-11" className="mb-10">
            <h2 id="tc-section-11" className="text-xl font-semibold text-white mb-3">
              11. Contact Information
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <address className="not-italic text-slate-300 space-y-1 bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div>
                <strong className="text-white">Company:</strong> {businessName}
              </div>
              <div>
                <strong className="text-white">Address:</strong>{' '}
                {address.street}, {address.city}, {address.county}, {address.postcode}
              </div>
              <div>
                <strong className="text-white">Phone:</strong>{' '}
                <a href={`tel:${phone.replace(/\s/g, '')}`} className={LINK_CLS}>{phone}</a>
              </div>
              <div>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:${email}`} className={LINK_CLS}>{email}</a>
              </div>
            </address>
          </section>

          {/* Navigation */}
          <div className="mt-8 border-t border-slate-800 pt-6 flex flex-wrap gap-4 text-sm">
            <Link to="/" className={LINK_CLS}>← Back to home</Link>
            <Link to="/privacy-policy" className={LINK_CLS}>Privacy Policy</Link>
          </div>
        </div>
      </main>
    </>
  )
}
