/**
 * Image optimisation script — converts JPEGs to WebP and AVIF.
 * Run: node scripts/convert-images.mjs
 *
 * Produces:
 *   public/images/hero-bg.webp        (~200 KB, from ~1,350 KB)
 *   public/images/hero-bg.avif        (~150 KB, from ~1,350 KB)
 *   public/images/team-photo.webp     (~120 KB, from ~1,270 KB)
 *   public/images/team-photo.avif     (~90 KB, from ~1,270 KB)
 *   public/images/gallery/*.webp
 *   public/images/gallery/*.avif
 */

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC = join(__dirname, '..', 'public')

async function convertToWebP(inputPath, outputPath, options = {}) {
  const { width, quality = 82 } = options
  try {
    let pipeline = sharp(inputPath)
    if (width) pipeline = pipeline.resize(width, null, { withoutEnlargement: true })
    const info = await pipeline
      .webp({ quality, effort: 5 })
      .toFile(outputPath)
    const inputStat = await stat(inputPath)
    const savings = ((1 - info.size / inputStat.size) * 100).toFixed(1)
    console.log(`✓ ${basename(outputPath)} — ${(info.size / 1024).toFixed(0)} KB (saved ${savings}%)`)
  } catch (err) {
    console.error(`✗ Failed: ${basename(inputPath)} — ${err.message}`)
  }
}

async function convertToAvif(inputPath, outputPath, options = {}) {
  const { width, quality = 50 } = options
  try {
    let pipeline = sharp(inputPath)
    if (width) pipeline = pipeline.resize(width, null, { withoutEnlargement: true })
    const info = await pipeline
      .avif({ quality, effort: 4 })
      .toFile(outputPath)
    const inputStat = await stat(inputPath)
    const savings = ((1 - info.size / inputStat.size) * 100).toFixed(1)
    console.log(`✓ ${basename(outputPath)} — ${(info.size / 1024).toFixed(0)} KB (saved ${savings}%)`)
  } catch (err) {
    console.error(`✗ Failed AVIF: ${basename(inputPath)} — ${err.message}`)
  }
}

async function run() {
  console.log('Converting images to WebP + AVIF...\n')

  // Hero background — large, full-width image, 1600px max (covered by dark overlays)
  await convertToWebP(
    join(PUBLIC, 'images', 'hero-bg.jpg'),
    join(PUBLIC, 'images', 'hero-bg.webp'),
    { width: 1600, quality: 70 }
  )
  await convertToAvif(
    join(PUBLIC, 'images', 'hero-bg.jpg'),
    join(PUBLIC, 'images', 'hero-bg.avif'),
    { width: 1600, quality: 30 }
  )

  // Team photo — displayed at max ~662px wide, resize to 800px for retina
  await convertToWebP(
    join(PUBLIC, 'images', 'team-photo.jpg'),
    join(PUBLIC, 'images', 'team-photo.webp'),
    { width: 800, quality: 82 }
  )
  await convertToAvif(
    join(PUBLIC, 'images', 'team-photo.jpg'),
    join(PUBLIC, 'images', 'team-photo.avif'),
    { width: 800, quality: 50 }
  )

  // Gallery images — displayed at ~400px wide, resize to 800px for retina
  const galleryDir = join(PUBLIC, 'images', 'gallery')
  const files = await readdir(galleryDir)
  const jpgs = files.filter(f => extname(f).toLowerCase() === '.jpg')

  for (const file of jpgs) {
    const input = join(galleryDir, file)
    const webpOutput = join(galleryDir, file.replace(/\.jpg$/i, '.webp'))
    const avifOutput = join(galleryDir, file.replace(/\.jpg$/i, '.avif'))
    await convertToWebP(input, webpOutput, { width: 800, quality: 80 })
    await convertToAvif(input, avifOutput, { width: 800, quality: 50 })
  }

  console.log('\nDone! Update <picture> elements to reference .avif and .webp files.')
}

run()

