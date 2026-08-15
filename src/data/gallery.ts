import type { GalleryImage } from '@/types'

/**
 * Gallery photographs for the Evergreen Arbor Services website.
 * Each photo maps to one of the 8 core services — unique background & environment per item.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // ── 1. Tree Removal ──────────────────────────────────────────────────────────
  {
    id: 'gallery-01',
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Full tree removal — large dead oak felled and hauled away from a sunny residential garden in Allerton, Liverpool',
    width: 800,
    height: 600,
    category: 'removal',
  },
  {
    id: 'gallery-02',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    alt: 'Sectional tree removal of a 20-metre Scots pine dismantled safely in a confined rear garden in Speke, Liverpool',
    width: 800,
    height: 600,
    category: 'removal',
  },

  // ── 2. Tree Pruning & Trimming ────────────────────────────────────────────────
  {
    id: 'gallery-03',
    src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    alt: 'Crown reduction pruning by NPTC arborist high in a silver birch against open blue sky in Childwall, Liverpool',
    width: 800,
    height: 600,
    category: 'pruning',
  },
  {
    id: 'gallery-04',
    src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
    alt: 'Deadwood pruning of overgrown orchard apple tree in a cottage garden setting in Mossley Hill, Liverpool',
    width: 800,
    height: 600,
    category: 'pruning',
  },

  // ── 3. Stump Grinding & Removal ───────────────────────────────────────────────
  {
    id: 'gallery-05',
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    alt: 'Heavy-duty stump grinder removing a wide tree stump flush with the front lawn in Wavertree, Liverpool',
    width: 800,
    height: 600,
    category: 'stump',
  },
  {
    id: 'gallery-06',
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Stump grinding complete — rear garden cleared and levelled ready for new patio landscaping in Huyton, Merseyside',
    width: 800,
    height: 600,
    category: 'stump',
  },

  // ── 4. Emergency Storm Services ───────────────────────────────────────────────
  {
    id: 'gallery-07',
    src: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=800&q=80',
    alt: 'Emergency 24/7 response — storm-uprooted ash tree removed from across a residential driveway in Woolton, Liverpool',
    width: 800,
    height: 600,
    category: 'emergency',
  },
  {
    id: 'gallery-08',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    alt: 'Post-storm broken limb clearance in a dense woodland park following severe winds in Crosby, Merseyside',
    width: 800,
    height: 600,
    category: 'emergency',
  },

  // ── 5. Tree Health Assessments ────────────────────────────────────────────────
  {
    id: 'gallery-09',
    src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80',
    alt: 'Certified arborist carrying out a full tree health and structural assessment in a mature parkland in Aigburth, Liverpool',
    width: 800,
    height: 600,
    category: 'health',
  },
  {
    id: 'gallery-10',
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',
    alt: 'Deadwood assessment and inspection of a mature ash tree alongside a country verge in Birkenhead, Merseyside',
    width: 800,
    height: 600,
    category: 'health',
  },

  // ── 6. Land Clearing ─────────────────────────────────────────────────────────
  {
    id: 'gallery-11',
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    alt: 'Full site land clearance — trees, brush and root systems removed for a new build project in Knotty Ash, Liverpool',
    width: 800,
    height: 600,
    category: 'clearing',
  },
  {
    id: 'gallery-12',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Overgrown rear garden land cleared of old willow and root system, opening views to a serene pond in Formby',
    width: 800,
    height: 600,
    category: 'clearing',
  },

  // ── 7. Hedge Trimming ────────────────────────────────────────────────────────
  {
    id: 'gallery-13',
    src: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&w=800&q=80',
    alt: 'Professional hedge trimming and shaping of a tall beech hedge along an estate garden pathway in West Derby, Liverpool',
    width: 800,
    height: 600,
    category: 'hedge',
  },
  {
    id: 'gallery-14',
    src: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
    srcFallback: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
    alt: 'Annual privet hedge cutting and neat geometric shaping along a Victorian terraced front garden in Bootle, Merseyside',
    width: 800,
    height: 600,
    category: 'hedge',
  },
]
