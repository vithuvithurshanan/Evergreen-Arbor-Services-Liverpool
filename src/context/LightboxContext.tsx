import React, { createContext, useContext, useRef, useState } from 'react'
import { GALLERY_IMAGES } from '@/data/gallery'

interface LightboxContextValue {
  isOpen: boolean
  currentIndex: number
  open: (index: number) => void
  close: () => void
  next: () => void
  prev: () => void
  totalImages: number
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

const totalImages = GALLERY_IMAGES.length

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const triggerElementRef = useRef<Element | null>(null)

  const open = (index: number) => {
    triggerElementRef.current = document.activeElement
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    if (triggerElementRef.current && triggerElementRef.current instanceof HTMLElement) {
      triggerElementRef.current.focus()
    }
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return (
    <LightboxContext.Provider value={{ isOpen, currentIndex, open, close, next, prev, totalImages }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext)
  if (!ctx) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return ctx
}
