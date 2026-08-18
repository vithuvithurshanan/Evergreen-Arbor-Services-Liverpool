import type { GalleryImage } from '@/types'

/**
 * Gallery photographs for the Evergreen Arbor Services website.
 * Each photo maps to one of the 8 core services — unique background & environment per item.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // ── 1. Tree Removal ──────────────────────────────────────────────────────────
  {
    id: 'gallery-01',
    src: '/images/gallery/tree-felling-oak-1.webp',
    srcFallback: '/images/gallery/tree-felling-oak-1.jpg',
    alt: 'Full tree removal — large dead oak felled and hauled away from a sunny residential garden in Allerton, Liverpool',
    width: 800,
    height: 600,
    category: 'removal',
  },
  {
    id: 'gallery-02',
    src: '/images/gallery/tree-felling-pine-1.webp',
    srcFallback: '/images/gallery/tree-felling-pine-1.jpg',
    alt: 'Sectional tree removal of a 20-metre Scots pine dismantled safely in a confined rear garden in Speke, Liverpool',
    width: 800,
    height: 600,
    category: 'removal',
  },

  // ── 2. Tree Pruning & Trimming ────────────────────────────────────────────────
  {
    id: 'gallery-03',
    src: '/images/gallery/crown-reduction-birch-1.webp',
    srcFallback: '/images/gallery/crown-reduction-birch-1.jpg',
    alt: 'Crown reduction pruning by NPTC arborist high in a silver birch against open blue sky in Childwall, Liverpool',
    width: 800,
    height: 600,
    category: 'pruning',
  },
  {
    id: 'gallery-04',
    src: '/images/gallery/tree-pruning-apple-1.webp',
    srcFallback: '/images/gallery/tree-pruning-apple-1.jpg',
    alt: 'Deadwood pruning of overgrown orchard apple tree in a cottage garden setting in Mossley Hill, Liverpool',
    width: 800,
    height: 600,
    category: 'pruning',
  },

  // ── 3. Stump Grinding & Removal ───────────────────────────────────────────────
  {
    id: 'gallery-05',
    src: '/images/gallery/stump-grinding-front-garden-1.webp',
    srcFallback: '/images/gallery/stump-grinding-front-garden-1.jpg',
    alt: 'Heavy-duty stump grinder removing a wide tree stump flush with the front lawn in Wavertree, Liverpool',
    width: 800,
    height: 600,
    category: 'stump',
  },
  {
    id: 'gallery-06',
    src: '/images/gallery/stump-grinding-back-garden-1.webp',
    srcFallback: '/images/gallery/stump-grinding-back-garden-1.jpg',
    alt: 'Stump grinding complete — rear garden cleared and levelled ready for new patio landscaping in Huyton, Merseyside',
    width: 800,
    height: 600,
    category: 'stump',
  },

  // ── 4. Emergency Storm Services ───────────────────────────────────────────────
  {
    id: 'gallery-07',
    src: '/images/gallery/emergency-storm-damage-1.webp',
    srcFallback: '/images/gallery/emergency-storm-damage-1.jpg',
    alt: 'Emergency 24/7 response — storm-uprooted ash tree removed from across a residential driveway in Woolton, Liverpool',
    width: 800,
    height: 600,
    category: 'emergency',
  },
  {
    id: 'gallery-08',
    src: '/images/gallery/deadwood-removal-ash-1.webp',
    srcFallback: '/images/gallery/deadwood-removal-ash-1.jpg',
    alt: 'Post-storm broken limb clearance in a dense woodland park following severe winds in Crosby, Merseyside',
    width: 800,
    height: 600,
    category: 'emergency',
  },

  // ── 5. Tree Health Assessments ────────────────────────────────────────────────
  {
    id: 'gallery-09',
    src: '/images/gallery/crown-lifting-sycamore-1.webp',
    srcFallback: '/images/gallery/crown-lifting-sycamore-1.jpg',
    alt: 'Certified arborist carrying out a full tree health and structural assessment in a mature parkland in Aigburth, Liverpool',
    width: 800,
    height: 600,
    category: 'health',
  },
  {
    id: 'gallery-10',
    src: '/images/gallery/crown-thinning-horse-chestnut-1.webp',
    srcFallback: '/images/gallery/crown-thinning-horse-chestnut-1.jpg',
    alt: 'Deadwood assessment and inspection of a mature ash tree alongside a country verge in Birkenhead, Merseyside',
    width: 800,
    height: 600,
    category: 'health',
  },

  // ── 6. Land Clearing ─────────────────────────────────────────────────────────
  {
    id: 'gallery-11',
    src: '/images/gallery/crown-reduction-willow-1.webp',
    srcFallback: '/images/gallery/crown-reduction-willow-1.jpg',
    alt: 'Full site land clearance — trees, brush and root systems removed for a new build project in Knotty Ash, Liverpool',
    width: 800,
    height: 600,
    category: 'clearing',
  },
  {
    id: 'gallery-12',
    src: '/images/gallery/tree-planting-rowan-1.webp',
    srcFallback: '/images/gallery/tree-planting-rowan-1.jpg',
    alt: 'Overgrown rear garden land cleared of old willow and root system, opening views to a serene pond in Formby',
    width: 800,
    height: 600,
    category: 'clearing',
  },

  // ── 7. Hedge Trimming ────────────────────────────────────────────────────────
  {
    id: 'gallery-13',
    src: '/images/gallery/hedge-trimming-beech-1.webp',
    srcFallback: '/images/gallery/hedge-trimming-beech-1.jpg',
    alt: 'Professional hedge trimming and shaping of a tall beech hedge along an estate garden pathway in West Derby, Liverpool',
    width: 800,
    height: 600,
    category: 'hedge',
  },
  {
    id: 'gallery-14',
    src: '/images/gallery/hedge-trimming-privet-1.webp',
    srcFallback: '/images/gallery/hedge-trimming-privet-1.jpg',
    alt: 'Annual privet hedge cutting and neat geometric shaping along a Victorian terraced front garden in Bootle, Merseyside',
    width: 800,
    height: 600,
    category: 'hedge',
  },
]
