import { useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import type { ServiceItem } from '@/types'

interface ServiceCardProps {
  service: ServiceItem
  isExpanded: boolean
  onToggle: () => void
}

export default function ServiceCard({ service, isExpanded, onToggle }: ServiceCardProps) {
  const Icon = service.icon
  const panelRef = useRef<HTMLDivElement>(null)

  // Dynamically set max-height to the content's scrollHeight for a smooth CSS transition
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (isExpanded) {
      el.style.maxHeight = `${el.scrollHeight}px`
    } else {
      el.style.maxHeight = '0px'
    }
  }, [isExpanded])

  return (
    <article className="glass-card rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/20 group">
      <div>
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shrink-0">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Expanded description via CSS Accordion */}
        <div
          ref={panelRef}
          id={`panel-${service.id}`}
          role="region"
          aria-labelledby={`toggle-${service.id}`}
          className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
          style={{
            maxHeight: 0,
            opacity: isExpanded ? 1 : 0,
          }}
        >
          <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-3">
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-1">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>BS 3998 British Standard Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="pt-5 mt-2 flex items-center justify-between border-t border-slate-800/60">
        <button
          id={`toggle-${service.id}`}
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`panel-${service.id}`}
          onClick={onToggle}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 transition-colors"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180 text-emerald-300' : ''
            }`}
          />
        </button>

        <a
          href="#contact"
          className="text-xs text-slate-400 hover:text-white transition-colors"
        >
          Get Quote &rarr;
        </a>
      </div>
    </article>
  )
}
