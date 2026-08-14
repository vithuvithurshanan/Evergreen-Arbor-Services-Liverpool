import { useEffect, useState } from 'react'

/**
 * Returns the id of the section most visible in the viewport.
 * Uses IntersectionObserver with threshold: 0.4.
 * Falls back to sectionIds[0] before any intersection fires.
 *
 * Satisfies: Req 1.8 (active nav link highlight)
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Among all currently-intersecting entries, pick the one with the
        // greatest intersection ratio (most visible). Only act on entries that
        // are actually intersecting so we never clear an active section simply
        // because an element scrolled slightly out of the 0.4 band.
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        )
        setActiveSection(best.target.id)
      },
      { threshold: 0.4 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  // Re-run only when the list of ids changes (reference-stable arrays won't
  // trigger unnecessary re-runs in practice).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')])

  return activeSection
}
