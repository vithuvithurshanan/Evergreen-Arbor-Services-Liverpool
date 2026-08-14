import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MessageSquareQuote, ExternalLink } from 'lucide-react'
import { TESTIMONIALS, AGGREGATE_RATING } from '@/data/testimonials'
import { SITE_CONFIG } from '@/config/site'
import { StarRating } from '@/components/ui/StarRating'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const AUTO_ROTATE_MS = 5000

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = TESTIMONIALS.length

  const goNext = () => setCurrentIndex((i) => (i + 1) % total)
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(goNext, AUTO_ROTATE_MS)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, currentIndex])

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 bg-slate-900 text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Aggregate Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 mb-4">
              <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Verified Reviews
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          {/* Aggregate rating card */}
          <div className="glass-card rounded-2xl p-4 border border-slate-800 bg-slate-950/70 flex items-center gap-4 shrink-0 shadow-lg">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-white">{AGGREGATE_RATING.ratingValue}</span>
                <StarRating rating={parseFloat(AGGREGATE_RATING.ratingValue)} size="md" />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Based on {AGGREGATE_RATING.reviewCount} customer reviews</p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Desktop: carousel */}
        <div
          className="hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative overflow-hidden py-2"
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 8}px))` }}
              aria-live="polite"
            >
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-[calc(33.333%-1rem)]"
                  aria-hidden={idx !== currentIndex && idx !== currentIndex + 1 && idx !== currentIndex + 2}
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/80">
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Google Review CTA */}
        <div className="mt-14 text-center">
          <a
            href={SITE_CONFIG.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 shadow-lg transition-all"
            aria-label="Leave us a Google review (opens in new tab)"
          >
            <span>Read More Google Reviews</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
