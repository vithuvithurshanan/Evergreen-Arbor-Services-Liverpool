import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'

/**
 * Property-based tests for the lightbox index wrap-around logic.
 *
 * The context delegates navigation to two pure formulas:
 *   next: (i, n) => (i + 1) % n
 *   prev: (i, n) => (i - 1 + n) % n
 *
 * We test these formulas directly rather than mounting the full context so
 * the tests remain fast and have no DOM dependency.
 *
 * **Validates: Requirements 5.2, 5.3**
 */

/** Mirror of the formulas used in LightboxContext */
const nextIndex = (current: number, total: number): number =>
  (current + 1) % total

const prevIndex = (current: number, total: number): number =>
  (current - 1 + total) % total

describe('LightboxContext – index wrap-around properties', () => {
  /**
   * Arbitrary: a total image count n >= 1 and a starting index in [0, n-1].
   */
  const validState = fc
    .integer({ min: 1, max: 200 })
    .chain((n) =>
      fc.tuple(fc.constant(n), fc.integer({ min: 0, max: n - 1 }))
    )

  it('next() at last index wraps to 0', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 200 }), (n) => {
        expect(nextIndex(n - 1, n)).toBe(0)
      })
    )
  })

  it('prev() at index 0 wraps to last index (n - 1)', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 200 }), (n) => {
        expect(prevIndex(0, n)).toBe(n - 1)
      })
    )
  })

  it('next() from any non-last index moves exactly +1', () => {
    fc.assert(
      fc.property(validState, ([n, i]) => {
        // Only test the non-wrap case
        if (i === n - 1) return
        expect(nextIndex(i, n)).toBe(i + 1)
      })
    )
  })

  it('prev() from any non-first index moves exactly -1', () => {
    fc.assert(
      fc.property(validState, ([n, i]) => {
        // Only test the non-wrap case
        if (i === 0) return
        expect(prevIndex(i, n)).toBe(i - 1)
      })
    )
  })

  it('result of next() is always a valid index in [0, n-1]', () => {
    fc.assert(
      fc.property(validState, ([n, i]) => {
        const result = nextIndex(i, n)
        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(n)
      })
    )
  })

  it('result of prev() is always a valid index in [0, n-1]', () => {
    fc.assert(
      fc.property(validState, ([n, i]) => {
        const result = prevIndex(i, n)
        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(n)
      })
    )
  })
})
