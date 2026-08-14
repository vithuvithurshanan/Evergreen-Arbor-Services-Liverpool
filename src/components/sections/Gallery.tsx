import React, { useState } from 'react'
import { GALLERY_IMAGES } from '@/data/gallery'
import { useLightbox } from '@/context/LightboxContext'
import { Maximize2, Camera } from 'lucide-react'

const LightboxModal = React.lazy(() => import('@/components/ui/LightboxModal'))

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'felling', label: 'Tree Felling' },
  { id: 'pruning', label: 'Crown Pruning' },
  { id: 'stump', label: 'Stump Grinding' },
  { id: 'hedge', label: 'Hedge Trimming' },
  { id: 'emergency', label: 'Emergency Call-Outs' },
] as const

export default function Gallery() {
  const lightbox = useLightbox()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory)

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-24 bg-slate-950 text-white border-t border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 mb-4">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Liverpool Portfolio
            </span>
          </div>

          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Recent <span className="gradient-text">Work &amp; Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real photography showcasing tree surgery, stump removals, and hedge maintenance across Liverpool.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-950/40'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => {
            const originalIndex = GALLERY_IMAGES.findIndex((img) => img.id === image.id)
            return (
              <button
                key={image.id}
                onClick={() => lightbox.open(originalIndex >= 0 ? originalIndex : 0)}
                aria-label={`View larger: ${image.alt}`}
                className="group relative block w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-4/3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mb-2 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                    {image.alt}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Lightbox */}
        {lightbox.isOpen && (
          <React.Suspense fallback={null}>
            <LightboxModal
              images={GALLERY_IMAGES}
              currentIndex={lightbox.currentIndex}
              onClose={lightbox.close}
              onNext={lightbox.next}
              onPrev={lightbox.prev}
            />
          </React.Suspense>
        )}
      </div>
    </section>
  )
}
