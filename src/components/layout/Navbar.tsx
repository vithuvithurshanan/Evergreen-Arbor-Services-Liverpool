import { useCallback, useRef, useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useClickOutside } from '../../hooks/useClickOutside'
import { VideoLogo } from '../ui/VideoLogo'
import { SITE_CONFIG } from '@/config/site'

/**
 * Navigation links for the single-page layout.
 * Each label maps to a section id (hash target).
 */
const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

/** Section ids passed to useActiveSection – must stay in sync with NAV_LINKS. */
const SECTION_IDS = ['hero', 'services', 'about', 'gallery', 'testimonials', 'contact'] as const

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection([...SECTION_IDS])
  const navRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  useClickOutside(navRef, closeMenu)

  function linkClasses(sectionId: string): string {
    const base =
      'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg px-3 py-2 text-sm font-medium'
    if (activeSection === sectionId) {
      return `${base} text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 shadow-sm`
    }
    return `${base} text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50`
  }

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 w-full glass-header shadow-2xl transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Brand / Video Logo ───────────────────────────────────── */}
        <a
          href="#hero"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg py-1 px-2"
          aria-label="Evergreen Arbor – back to top"
        >
          <VideoLogo size="md" lightText={true} />
        </a>

        {/* ── Desktop Navigation ───────────────────────────────────── */}
        <div className="hidden items-center gap-1 lg:gap-2 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            return (
              <a key={href} href={href} className={linkClasses(sectionId)}>
                {label}
              </a>
            )
          })}

          {/* Quick Call Button */}
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
            className="ml-3 hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg hover:border-emerald-400 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{SITE_CONFIG.phone}</span>
          </a>

          {/* CTA — desktop */}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 hover:from-emerald-500 hover:to-teal-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all duration-200 glow-button"
          >
            Get Free Quote
          </a>
        </div>

        {/* ── Hamburger Toggle (mobile) ─────────────────────────────── */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 transition-colors hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────── */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={`w-full border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`flex w-full items-center py-2.5 px-3 ${linkClasses(sectionId)}`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-center text-sm font-semibold text-white shadow-lg"
            >
              Get Free Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
