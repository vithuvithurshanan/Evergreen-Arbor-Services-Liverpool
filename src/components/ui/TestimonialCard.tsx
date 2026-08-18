import type { Testimonial } from '@/types'
import { StarRating } from '@/components/ui/StarRating'
import { Quote, CheckCircle2 } from 'lucide-react'

export interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Generate initial avatar badge
  const initial = testimonial.customerName.charAt(0)

  return (
    <article className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 bg-slate-900/60 flex flex-col justify-between h-full transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl shadow-slate-950/50">
      <div>
        <div className="flex items-center justify-between mb-4">
          <StarRating rating={testimonial.rating} size="sm" />
          <Quote className="w-6 h-6 text-emerald-500/40 shrink-0" />
        </div>

        <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
          "{testimonial.reviewText}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">
            {initial}
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{testimonial.customerName}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </h3>
            <p className="text-xs text-emerald-400 font-medium">
              {testimonial.serviceReceived}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
