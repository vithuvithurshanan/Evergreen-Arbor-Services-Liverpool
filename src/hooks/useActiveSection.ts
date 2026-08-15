import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently active / visible in the viewport.
 * Combines IntersectionObserver (with top offset margin for sticky navbar)
 * and scroll listener for accurate highlight on scroll and click.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // 120px offset for sticky navbar

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        const lastId = sectionIds[sectionIds.length - 1]
        if (lastId) setActiveSection(lastId)
        return
      }

      // Check if at the top of the page
      if (window.scrollY < 100) {
        const firstId = sectionIds[0]
        if (firstId) setActiveSection(firstId)
        return
      }

      // Find section currently under scroll line
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top - 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener with passive performance flag
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Also use IntersectionObserver as secondary observer
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        )
        if (best.target.id) {
          setActiveSection(best.target.id)
        }
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [sectionIds.join(',')])

  return activeSection
}
