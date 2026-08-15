import React, { useCallback, useRef, useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useClickOutside } from '../../hooks/useClickOutside'
import { VideoLogo } from '../ui/VideoLogo'
import { SITE_CONFIG } from '@/config/site'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

const SECTION_IDS = ['hero', 'services', 'about', 'testimonials', 'contact'] as const

// Pages that are NOT the home page — nav hash links should navigate to / first
const LEGAL_PATHS = ['/privacy-policy', '/terms', '/cookie-policy']

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Only run active-section tracking on the home page
  const isHomePage = location.pathname === '/'
  const activeSectionFromHook = useActiveSection(isHomePage ? [...SECTION_IDS] : [])
  const [overrideActive, setOverrideActive] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // On legal pages, no nav link should appear active
  const activeSection = isHomePage ? (overrideActive ?? activeSectionFromHook) : ''

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  useClickOutside(navRef, closeMenu)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu()
    const targetId = href.replace('#', '')

    if (!isHomePage) {
      // On legal / other pages: navigate to home first, then scroll to section
      e.preventDefault()
      navigate('/')
      // After navigation, give the DOM time to render then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    }

    // On home page: just set override for highlight
    setOverrideActive(targetId)
    setTimeout(() => setOverrideActive(null), 800)
  }

  function linkClasses(sectionId: string): string {
    const base =
      'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl px-3.5 py-2 text-sm font-semibold'
    if (activeSection === sectionId) {
      return `${base} text-emerald-300 bg-emerald-500/20 border border-emerald-400/40 shadow-lg shadow-emerald-950/40`
    }
    return `${base} text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60`
  }

  // Logo href: on legal pages go to /, on home page go to #hero
  const logoHref = isHomePage ? '#hero' : '/'
  const isOnLegalPage = LEGAL_PATHS.includes(location.pathname)

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
          href={logoHref}
          onClick={isOnLegalPage ? undefined : (e) => handleNavClick(e, '#hero')}
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg py-1 px-1"
          aria-label="Evergreen Arbor – go to home page"
        >
          <VideoLogo size="md" lightText={true} />
        </a>

        {/* ── Desktop Navigation ───────────────────────────────────── */}
        <div className="hidden items-center gap-1.5 lg:gap-2.5 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            return (
              <a
                key={href}
                href={isHomePage ? href : '/'}
                onClick={(e) => handleNavClick(e, href)}
                className={linkClasses(sectionId)}
              >
                {label}
              </a>
            )
          })}

          {/* Quick Call Button */}
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
            className="ml-2 hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 rounded-xl hover:border-emerald-400 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{SITE_CONFIG.phone}</span>
          </a>

          {/* CTA — desktop */}
          <a
            href={isHomePage ? '#contact' : '/'}
            onClick={(e) => handleNavClick(e, '#contact')}
            className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/50 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all duration-200 glow-button"
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
        <ul className="flex flex-col gap-1.5 px-4 py-4" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            return (
              <li key={href}>
                <a
                  href={isHomePage ? href : '/'}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`flex w-full items-center py-2.5 px-3.5 ${linkClasses(sectionId)}`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li className="pt-2">
            <a
              href={isHomePage ? '#contact' : '/'}
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-center text-sm font-bold text-slate-950 shadow-lg"
            >
              Get Free Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
