import React, { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useScrollLock } from '@/hooks/useScrollLock'
import type { GalleryImage } from '@/types'

export interface LightboxModalProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

/**
 * Accessible image lightbox using the native <dialog> element.
 * Satisfies: Req 5.2–5.4, 10.2
 */
export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Prevent background scroll while open
  useScrollLock(true)

  // Open the dialog and focus the close button
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    // Register with dialog-polyfill for Safari / older browsers
    import('dialog-polyfill').then(({ default: dialogPolyfill }) => {
      dialogPolyfill.registerDialog(dialog)
    }).catch(() => {
      // polyfill not critical — native <dialog> will still work
    })

    if (!dialog.open) {
      dialog.showModal()
    }

    // Focus close button on open
    closeButtonRef.current?.focus()

    return () => {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onPrev()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  const currentImage = images[currentIndex]

  // Click on backdrop (the dialog element itself, outside the inner box) closes
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-label="Image gallery lightbox"
      role="dialog"
      onClick={handleDialogClick}
      className="fixed inset-0 m-auto max-w-none max-h-none w-full h-full bg-transparent p-0 backdrop:bg-black/80"
    >
      {/* Inner content box — clicks here do NOT propagate to backdrop handler */}
      <div className="relative flex items-center justify-center w-full h-full">

        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
          className="absolute left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Image container */}
        <div
          className="flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {currentImage ? (
            <img
              key={currentImage.id}
              src={currentImage.src}
              alt={currentImage.alt}
              width={currentImage.width}
              height={currentImage.height}
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.currentTarget
                // Show alt text as visible fallback
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = 'flex'
              }}
            />
          ) : null}
          {/* Alt text fallback shown on image error */}
          <div
            className="hidden items-center justify-center max-w-md p-8 bg-gray-800 rounded-lg text-white text-center"
            aria-hidden="false"
          >
            {currentImage?.alt ?? 'Image unavailable'}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
          className="absolute right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>

        {/* Image counter */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full"
          aria-live="polite"
          aria-atomic="true"
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </dialog>
  )
}
