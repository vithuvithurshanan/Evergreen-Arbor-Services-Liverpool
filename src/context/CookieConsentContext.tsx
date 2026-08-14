import React, { createContext, useContext, useEffect, useState } from 'react'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ConsentState = 'pending' | 'accepted' | 'declined'

interface CookieConsentContextValue {
  consent: ConsentState
  accept: () => void
  decline: () => void
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'cookie_consent'

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

// ---------------------------------------------------------------------------
// GA4 script injection
// ---------------------------------------------------------------------------

function injectGA4Script(measurementId: string): void {
  // Guard: don't inject twice
  if (document.getElementById('ga4-script')) return

  const scriptLoader = document.createElement('script')
  scriptLoader.id = 'ga4-script'
  scriptLoader.async = true
  scriptLoader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(scriptLoader)

  const scriptInit = document.createElement('script')
  scriptInit.id = 'ga4-init'
  scriptInit.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `
  document.head.appendChild(scriptInit)
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    // Hydrate from localStorage on first render (Requirements 11.7, 14.1)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'accepted' || stored === 'declined') {
        return stored
      }
    } catch {
      // localStorage may be unavailable (private browsing, SSR, etc.)
    }
    return 'pending'
  })

  // If the stored value was 'accepted' on mount, re-inject GA4 so tracking
  // continues on subsequent page loads (Requirement 14.1)
  useEffect(() => {
    if (consent === 'accepted') {
      const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined
      if (measurementId) {
        injectGA4Script(measurementId)
      }
    }
    // Only run once on mount — intentionally omitting `consent` from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** Accept analytics cookies (Requirements 11.5, 11.6, 11.7, 14.1) */
  const accept = () => {
    setConsent('accepted')
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // ignore storage errors
    }
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined
    if (measurementId) {
      injectGA4Script(measurementId)
    }
  }

  /** Decline analytics cookies (Requirements 11.5, 11.6, 11.7) */
  const decline = () => {
    setConsent('declined')
    try {
      localStorage.setItem(STORAGE_KEY, 'declined')
    } catch {
      // ignore storage errors
    }
    // GA4 is deliberately NOT injected on decline
  }

  return (
    <CookieConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/** Returns the cookie consent context value. Must be used inside CookieConsentProvider. */
export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext)
  if (ctx === null) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return ctx
}
