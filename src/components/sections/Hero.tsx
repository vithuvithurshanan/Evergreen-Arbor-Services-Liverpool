import { ShieldCheck, CheckCircle2, Phone, ArrowRight, Award, TreePine } from 'lucide-react'
import { trackCtaClick } from '@/utils/analytics'
import { SITE_CONFIG } from '@/config/site'

const TRUST_BADGES = ['NPTC Qualified', 'Fully Insured (£5M)', 'Free No-Obligation Quotes'] as const

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:py-0"
    >
      {/* ── Background Photography & Glass Overlay ──────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Evergreen Arbor Services professional tree surgery in Liverpool"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110 animate-pulse-subtle"
          // @ts-expect-error fetchpriority is valid HTML but React types use camelCase fetchPriority which triggers a runtime warning
          fetchpriority="high"
          decoding="async"
        />
        {/* Dark radial & linear gradient overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* ── Main Content Container ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, subhead, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Top Location Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-4 py-1.5 backdrop-blur-md mb-6 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Liverpool &amp; Merseyside Tree Surgeons
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-2xl"
            >
              Evergreen <span className="gradient-text">Arbor Services</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 max-w-xl text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              Liverpool's trusted tree surgery and arborist specialists. Delivering safe, NPTC-certified tree felling, crown reduction, and stump grinding across Merseyside.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                onClick={() => trackCtaClick('Get a Free Quote')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-emerald-950/50 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 transition-all duration-200 glow-button"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                onClick={() => trackCtaClick('Our Services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 hover:border-emerald-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 transition-all duration-200"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              aria-label="Trust credentials"
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900/70 border border-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Stats & Experience Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-700/50 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-6 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">16+ Years Experience</h3>
                  <p className="text-xs text-slate-400">Serving Liverpool homeowners &amp; commercial clients since 2008</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <TreePine className="w-4 h-4" />
                    <span className="text-2xl font-extrabold text-white">1,500+</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Trees Managed</p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-2xl font-extrabold text-white">100%</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Safety Record</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Emergency Call-Out Available 24/7</span>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
