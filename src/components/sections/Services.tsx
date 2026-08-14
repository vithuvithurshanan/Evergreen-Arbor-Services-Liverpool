import { useState } from 'react'
import { SERVICES } from '@/data/services'
import ServiceCard from '@/components/ui/ServiceCard'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Services() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null)

  function handleToggle(id: string) {
    setExpandedCardId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              NPTC Certified Arborists
            </span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Comprehensive <span className="gradient-text">Tree Surgery Services</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            From heavy tree felling to delicate crown reductions and emergency storm response, our expert team delivers safe, fully insured arboricultural care across Liverpool.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedCardId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center glass-card rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">Need advice or a custom tree inspection?</h3>
            <p className="text-sm text-slate-400 mt-1">Our certified arborists provide free written estimates for all residential and commercial projects.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 shrink-0 glow-button"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
