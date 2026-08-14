import { Link } from 'react-router-dom'
import { useCookieConsent } from '@/context/CookieConsentContext'
import { Cookie } from 'lucide-react'

export function CookieConsentBanner() {
  const { consent, accept, decline } = useCookieConsent()

  if (consent !== 'pending') {
    return null
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 shadow-2xl sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Cookie className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-sm text-slate-300">
            We use essential cookies to analyse site performance. You can accept or decline.{' '}
            <Link
              to="/cookie-policy"
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              Learn more
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            aria-label="Decline cookies"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-700 px-5 text-xs font-semibold text-slate-300 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Decline
          </button>
          <button
            onClick={accept}
            aria-label="Accept cookies"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 text-xs font-bold text-slate-950 hover:from-emerald-400 hover:to-teal-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
