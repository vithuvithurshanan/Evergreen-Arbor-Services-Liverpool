import { Phone, Calendar } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import { trackCtaClick } from '@/utils/analytics'

export function FloatingContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Floating Call Now Button */}
      <a
        href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
        onClick={() => trackCtaClick('Floating Call')}
        aria-label="Call Evergreen Arbor Services"
        className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 p-3.5 sm:px-5 text-white shadow-xl shadow-emerald-950/40 border border-emerald-400/30 hover:scale-105 transition-all duration-300 glow-button"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <Phone className="h-5 w-5 text-white animate-bounce" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Call {SITE_CONFIG.phone}
        </span>
      </a>

      {/* Floating Quote Request Button (mobile quick button) */}
      <a
        href="#contact"
        onClick={() => trackCtaClick('Floating Quote')}
        aria-label="Get a free quote"
        className="sm:hidden flex items-center justify-center rounded-full bg-slate-800/90 backdrop-blur-md p-3.5 text-emerald-400 border border-slate-700 shadow-lg hover:bg-slate-700 transition-colors"
      >
        <Calendar className="h-5 w-5" />
      </a>
    </div>
  )
}
