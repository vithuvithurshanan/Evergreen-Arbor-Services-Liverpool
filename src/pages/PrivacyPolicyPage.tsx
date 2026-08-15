/**
 * Privacy Policy page — adapted for Evergreen Arbor Services (UK GDPR).
 *
 * Requirements: 8.1, 8.2, 11.3, 11.4
 */

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '@/config/site'

const LINK_CLS =
  'text-emerald-400 underline hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded'

export default function PrivacyPolicyPage() {
  const { businessName, phone, email, address, seo } = SITE_CONFIG

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {businessName}</title>
        <meta
          name="description"
          content={`Privacy policy for ${businessName}. Learn how we collect, use, and protect your personal data in compliance with UK GDPR.`}
        />
        <link rel="canonical" href={`${seo.siteUrl}/privacy-policy`} />
      </Helmet>

      <main id="main-content" className="bg-slate-950 text-slate-300 min-h-screen py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            <strong className="text-slate-300">Effective Date:</strong> 19 January 2025&ensp;|&ensp;
            <strong className="text-slate-300">Last Updated:</strong> 9 July 2026
          </p>

          <p className="text-slate-300 leading-relaxed mb-10">
            <strong className="text-white">{businessName}</strong> ("we," "our," or "us") is committed
            to protecting your privacy and personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your data in compliance with the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          {/* 1. Information We Collect */}
          <section aria-labelledby="pp-section-1" className="mb-10">
            <h2 id="pp-section-1" className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              We may collect the following categories of personal information when you contact us,
              request a quote, submit a web form, or use our services:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Full name</li>
              <li>Mailing or service address / postcode</li>
              <li>Email address</li>
              <li>Phone number (including mobile number)</li>
              <li>Service request details and project descriptions</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          {/* 2. SMS / Text Message Communications */}
          <section aria-labelledby="pp-section-2" className="mb-10">
            <h2 id="pp-section-2" className="text-xl font-semibold text-white mb-3">
              2. SMS / Text Message Communications
            </h2>

            <section aria-labelledby="pp-section-2a" className="mb-6">
              <h3 id="pp-section-2a" className="text-base font-semibold text-emerald-400 mb-2">
                2a. How We Collect Your Mobile Number
              </h3>
              <p className="text-slate-300 leading-relaxed">
                We collect your mobile phone number when you voluntarily provide it through our
                website contact forms, phone calls, or other direct communication channels. By
                providing your mobile number and opting in via our contact form, you expressly
                consent to receive SMS (text message) communications from {businessName}.
              </p>
            </section>

            <section aria-labelledby="pp-section-2b" className="mb-6">
              <h3 id="pp-section-2b" className="text-base font-semibold text-emerald-400 mb-2">
                2b. Types of Messages We Send
              </h3>
              <p className="text-slate-300 leading-relaxed mb-2">
                By opting in, you may receive text messages from {businessName}, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                <li>Free quote confirmations and appointment reminders</li>
                <li>Project status updates and scheduling notifications</li>
                <li>Customer support and follow-up communications</li>
                <li>Seasonal service announcements related to our tree care services</li>
              </ul>
            </section>

            <section aria-labelledby="pp-section-2c" className="mb-6">
              <h3 id="pp-section-2c" className="text-base font-semibold text-emerald-400 mb-2">
                2c. Message Frequency
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Message frequency varies based on your interactions with us, ongoing service needs,
                and active enquiries. You may receive up to 4–8 messages per month depending on
                your service activity.
              </p>
            </section>

            <section aria-labelledby="pp-section-2d" className="mb-6">
              <h3 id="pp-section-2d" className="text-base font-semibold text-emerald-400 mb-2">
                2d. Message &amp; Data Rates
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Standard SMS rates may apply depending on your mobile carrier and tariff.{' '}
                {businessName} is not responsible for any charges incurred from your mobile
                network provider.
              </p>
            </section>

            <section aria-labelledby="pp-section-2e" className="mb-6">
              <h3 id="pp-section-2e" className="text-base font-semibold text-emerald-400 mb-2">
                2e. How to Opt Out (STOP)
              </h3>
              <p className="text-slate-300 leading-relaxed">
                You may cancel SMS messages at any time by replying <strong className="text-white">STOP</strong> to
                any text message you receive from us. After opting out, you will receive one final
                confirmation message and will no longer receive SMS communications from{' '}
                {businessName} unless you re-enrol.
              </p>
            </section>

            <section aria-labelledby="pp-section-2f" className="mb-6">
              <h3 id="pp-section-2f" className="text-base font-semibold text-emerald-400 mb-2">
                2f. How to Get Help (HELP)
              </h3>
              <p className="text-slate-300 leading-relaxed mb-2">
                For help with our SMS communications, reply <strong className="text-white">HELP</strong> to
                any message, or contact us directly at:
              </p>
              <address className="not-italic text-slate-300 space-y-1 pl-2">
                <div>
                  Phone:{' '}
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className={LINK_CLS}>
                    {phone}
                  </a>
                </div>
                <div>
                  Email:{' '}
                  <a href={`mailto:${email}`} className={LINK_CLS}>
                    {email}
                  </a>
                </div>
              </address>
            </section>
          </section>

          {/* 3. Mobile Information & SMS Consent — No Third-Party Sharing */}
          <section aria-labelledby="pp-section-3" className="mb-10">
            <h2 id="pp-section-3" className="text-xl font-semibold text-white mb-3">
              3. Mobile Information &amp; SMS Consent — No Third-Party Sharing
            </h2>
            <p className="text-slate-300 leading-relaxed">
              No mobile information (including your mobile phone number and SMS opt-in consent data)
              will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              All other categories of personal data exclude text messaging originator opt-in data
              and consent; this information will not be shared with any third parties under any
              circumstances.
            </p>
          </section>

          {/* 4. How We Use Your Information */}
          <section aria-labelledby="pp-section-4" className="mb-10">
            <h2 id="pp-section-4" className="text-xl font-semibold text-white mb-3">
              4. How We Use Your Information
            </h2>
            <p className="text-slate-300 leading-relaxed mb-2">
              We use the personal information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>Provide and manage tree surgery and arborist services</li>
              <li>Respond to enquiries and service requests</li>
              <li>Schedule appointments and send reminders</li>
              <li>Send service-related communications (with your consent)</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* 5. Cookies and Tracking Technologies */}
          <section aria-labelledby="pp-section-5" className="mb-10">
            <h2 id="pp-section-5" className="text-xl font-semibold text-white mb-3">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies and similar technologies to improve website functionality, analyse
              traffic, and enhance user experience. Cookies do not store sensitive personal
              information. By continuing to use this website you consent to our use of essential
              cookies. Analytics cookies are only used with your explicit consent via our cookie
              consent banner.
            </p>
          </section>

          {/* 6. Data Security */}
          <section aria-labelledby="pp-section-6" className="mb-10">
            <h2 id="pp-section-6" className="text-xl font-semibold text-white mb-3">
              6. Data Security
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to
              protect your personal data against unauthorised access, disclosure, alteration, or
              destruction. However, no method of electronic transmission or storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section aria-labelledby="pp-section-7" className="mb-10">
            <h2 id="pp-section-7" className="text-xl font-semibold text-white mb-3">
              7. Data Retention
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the
              purposes outlined in this Privacy Policy, or as required by applicable law. Quote
              request data is retained for a maximum of <strong className="text-white">2 years</strong> from
              submission. When your data is no longer needed, we securely delete or anonymise it.
            </p>
          </section>

          {/* 8. Your Privacy Rights */}
          <section aria-labelledby="pp-section-8" className="mb-10">
            <h2 id="pp-section-8" className="text-xl font-semibold text-white mb-3">
              8. Your Privacy Rights
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Under UK GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>
                <strong className="text-white">Access:</strong> Request a copy of the personal
                data we hold about you.
              </li>
              <li>
                <strong className="text-white">Correction:</strong> Request correction of
                inaccurate or incomplete personal data.
              </li>
              <li>
                <strong className="text-white">Deletion:</strong> Request deletion of your
                personal data (including your mobile number and any SMS consent record).
              </li>
              <li>
                <strong className="text-white">Opt-Out of SMS:</strong> Reply{' '}
                <strong>STOP</strong> to any text message at any time.
              </li>
              <li>
                <strong className="text-white">Restriction:</strong> Request that we restrict
                processing of your personal data in certain circumstances.
              </li>
              <li>
                <strong className="text-white">Portability:</strong> Request your data in a
                structured, machine-readable format.
              </li>
              <li>
                <strong className="text-white">Object:</strong> Object to processing based on
                legitimate interests.
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${email}`} className={LINK_CLS}>{email}</a>{' '}
              or call <a href={`tel:${phone.replace(/\s/g, '')}`} className={LINK_CLS}>{phone}</a>.
              You also have the right to lodge a complaint with the{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLS}
              >
                Information Commissioner's Office (ICO)
              </a>
              .
            </p>
          </section>

          {/* 9. Changes to This Privacy Policy */}
          <section aria-labelledby="pp-section-9" className="mb-10">
            <h2 id="pp-section-9" className="text-xl font-semibold text-white mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page with a revised "Last Updated" date. Continued use of our website or
              services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 10. Contact Information */}
          <section aria-labelledby="pp-section-10" className="mb-10">
            <h2 id="pp-section-10" className="text-xl font-semibold text-white mb-3">
              10. Contact Information
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              If you have questions or concerns about this Privacy Policy, please contact us:
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
            <Link to="/terms" className={LINK_CLS}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </main>
    </>
  )
}
