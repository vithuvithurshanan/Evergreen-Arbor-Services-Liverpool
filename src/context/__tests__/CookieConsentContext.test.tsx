/**
 * Property-based and unit tests for CookieConsentContext.
 *
 * Validates: Requirements 11.5, 11.6, 11.7
 *
 * Property 6: Cookie Consent Persistence
 *   - After accept()  → localStorage.getItem('cookie_consent') === 'accepted'
 *   - After decline() → localStorage.getItem('cookie_consent') === 'declined'
 *   - On re-initialisation with a stored 'accepted' value, consent state is
 *     'accepted' (not 'pending') and the banner would not render
 *   - On re-initialisation with a stored 'declined' value, consent state is
 *     'declined' and the banner would not render
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import * as fc from 'fast-check'
import React from 'react'
import { CookieConsentProvider, useCookieConsent } from '../CookieConsentContext'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'cookie_consent'

function wrapper({ children }: { children: React.ReactNode }) {
  return <CookieConsentProvider>{children}</CookieConsentProvider>
}

/** Render the hook inside the provider and return its result handle. */
function renderCookieConsent() {
  return renderHook(() => useCookieConsent(), { wrapper })
}

// ---------------------------------------------------------------------------
// Setup — clear localStorage before each test
// ---------------------------------------------------------------------------

beforeEach(() => {
  localStorage.clear()
  // Remove any previously injected GA4 scripts so tests are independent
  document.querySelectorAll('#ga4-script, #ga4-init').forEach((el) => el.remove())
  vi.restoreAllMocks()
})

// ---------------------------------------------------------------------------
// Unit tests
// ---------------------------------------------------------------------------

describe('CookieConsentContext — unit tests', () => {
  it('starts in pending state when localStorage has no prior consent', () => {
    const { result } = renderCookieConsent()
    expect(result.current.consent).toBe('pending')
  })

  it('hydrates to accepted when localStorage already holds "accepted"', () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    const { result } = renderCookieConsent()
    expect(result.current.consent).toBe('accepted')
  })

  it('hydrates to declined when localStorage already holds "declined"', () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    const { result } = renderCookieConsent()
    expect(result.current.consent).toBe('declined')
  })

  it('accept() sets consent state to "accepted"', () => {
    const { result } = renderCookieConsent()
    act(() => result.current.accept())
    expect(result.current.consent).toBe('accepted')
  })

  it('accept() writes "accepted" to localStorage', () => {
    const { result } = renderCookieConsent()
    act(() => result.current.accept())
    expect(localStorage.getItem(STORAGE_KEY)).toBe('accepted')
  })

  it('decline() sets consent state to "declined"', () => {
    const { result } = renderCookieConsent()
    act(() => result.current.decline())
    expect(result.current.consent).toBe('declined')
  })

  it('decline() writes "declined" to localStorage', () => {
    const { result } = renderCookieConsent()
    act(() => result.current.decline())
    expect(localStorage.getItem(STORAGE_KEY)).toBe('declined')
  })

  it('decline() does NOT inject GA4 script tags', () => {
    const { result } = renderCookieConsent()
    act(() => result.current.decline())
    expect(document.getElementById('ga4-script')).toBeNull()
    expect(document.getElementById('ga4-init')).toBeNull()
  })

  it('throws when useCookieConsent is used outside provider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    try {
      expect(() => {
        renderHook(() => useCookieConsent())
      }).toThrow('useCookieConsent must be used within a CookieConsentProvider')
    } finally {
      consoleSpy.mockRestore()
    }
  })

  it('re-renders with stored "accepted" do not show banner (consent !== "pending")', () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    const { result } = renderCookieConsent()
    // Banner renders only when consent === 'pending'
    expect(result.current.consent).not.toBe('pending')
  })

  it('re-renders with stored "declined" do not show banner (consent !== "pending")', () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    const { result } = renderCookieConsent()
    expect(result.current.consent).not.toBe('pending')
  })
})

// ---------------------------------------------------------------------------
// Property-based tests — Property 6: Cookie Consent Persistence
// **Validates: Requirements 11.5, 11.6, 11.7**
// ---------------------------------------------------------------------------

describe('Property 6: Cookie Consent Persistence', () => {
  /**
   * For any number of accept() calls (≥ 1), localStorage must always hold
   * 'accepted' afterwards.
   */
  it('localStorage always equals "accepted" after accept() regardless of call count', () => {
    fc.assert(
      fc.property(
        // callCount: how many times accept() is called (1–10)
        fc.integer({ min: 1, max: 10 }),
        (callCount) => {
          localStorage.clear()

          const { result } = renderCookieConsent()

          act(() => {
            for (let i = 0; i < callCount; i++) {
              result.current.accept()
            }
          })

          return localStorage.getItem(STORAGE_KEY) === 'accepted'
        },
      ),
    )
  })

  /**
   * For any number of decline() calls (≥ 1), localStorage must always hold
   * 'declined' afterwards.
   */
  it('localStorage always equals "declined" after decline() regardless of call count', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (callCount) => {
          localStorage.clear()

          const { result } = renderCookieConsent()

          act(() => {
            for (let i = 0; i < callCount; i++) {
              result.current.decline()
            }
          })

          return localStorage.getItem(STORAGE_KEY) === 'declined'
        },
      ),
    )
  })

  /**
   * After the last call wins: interleaving accept() and decline() must leave
   * localStorage reflecting the most recent choice.
   */
  it('the last consent action always determines the localStorage value', () => {
    fc.assert(
      fc.property(
        // sequence of boolean: true = accept, false = decline (non-empty)
        fc.array(fc.boolean(), { minLength: 1, maxLength: 20 }),
        (actions) => {
          localStorage.clear()

          const { result } = renderCookieConsent()

          act(() => {
            for (const isAccept of actions) {
              if (isAccept) {
                result.current.accept()
              } else {
                result.current.decline()
              }
            }
          })

          const lastAction = actions[actions.length - 1]
          const expected = lastAction ? 'accepted' : 'declined'
          return localStorage.getItem(STORAGE_KEY) === expected
        },
      ),
    )
  })

  /**
   * On re-initialisation with a stored 'accepted' value, consent must be
   * 'accepted' (not 'pending'), meaning the banner would not render.
   */
  it('re-init with stored "accepted" always yields consent === "accepted"', () => {
    fc.assert(
      fc.property(
        // Use a constant — the property holds for any prior state
        fc.constant('accepted' as const),
        (storedValue) => {
          localStorage.clear()
          localStorage.setItem(STORAGE_KEY, storedValue)

          const { result } = renderCookieConsent()
          return result.current.consent === 'accepted'
        },
      ),
    )
  })

  /**
   * On re-initialisation with a stored 'declined' value, consent must be
   * 'declined' (not 'pending'), meaning the banner would not render.
   */
  it('re-init with stored "declined" always yields consent === "declined"', () => {
    fc.assert(
      fc.property(
        fc.constant('declined' as const),
        (storedValue) => {
          localStorage.clear()
          localStorage.setItem(STORAGE_KEY, storedValue)

          const { result } = renderCookieConsent()
          return result.current.consent === 'declined'
        },
      ),
    )
  })

  /**
   * For any unrecognised stored value (arbitrary string that is not 'accepted'
   * or 'declined'), the context must start in 'pending'.
   */
  it('unrecognised localStorage value always starts consent at "pending"', () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => s !== 'accepted' && s !== 'declined'),
        (junk) => {
          localStorage.clear()
          if (junk.length > 0) {
            localStorage.setItem(STORAGE_KEY, junk)
          }

          const { result } = renderCookieConsent()
          return result.current.consent === 'pending'
        },
      ),
    )
  })

  /**
   * After accept(), the consent state returned by the hook matches what is
   * stored in localStorage.
   */
  it('consent state and localStorage value are always in sync after accept()', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        localStorage.clear()

        const { result } = renderCookieConsent()

        act(() => result.current.accept())

        return (
          result.current.consent === 'accepted' &&
          localStorage.getItem(STORAGE_KEY) === 'accepted'
        )
      }),
    )
  })

  /**
   * After decline(), the consent state returned by the hook matches what is
   * stored in localStorage.
   */
  it('consent state and localStorage value are always in sync after decline()', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        localStorage.clear()

        const { result } = renderCookieConsent()

        act(() => result.current.decline())

        return (
          result.current.consent === 'declined' &&
          localStorage.getItem(STORAGE_KEY) === 'declined'
        )
      }),
    )
  })
})

// ---------------------------------------------------------------------------
// Integration: CookieConsentBanner visibility
// (verifies consent value directly — banner renders only when pending)
// ---------------------------------------------------------------------------

describe('Banner visibility via consent state', () => {
  it('banner should NOT render when stored value is "accepted"', () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    const { result } = renderCookieConsent()
    // CookieConsentBanner renders only when consent === 'pending'
    expect(result.current.consent).toBe('accepted')
    expect(result.current.consent).not.toBe('pending')
  })

  it('banner should NOT render when stored value is "declined"', () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    const { result } = renderCookieConsent()
    expect(result.current.consent).toBe('declined')
    expect(result.current.consent).not.toBe('pending')
  })

  it('banner SHOULD render (pending) when no stored value exists', () => {
    const { result } = renderCookieConsent()
    expect(result.current.consent).toBe('pending')
  })
})
