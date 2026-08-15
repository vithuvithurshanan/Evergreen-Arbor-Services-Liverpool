import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CookieConsentProvider } from '@/context/CookieConsentContext'
import { SkipLink } from '@/components/layout/SkipLink'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsentBanner } from '@/components/ui/CookieConsentBanner'
import { FloatingContactWidget } from '@/components/ui/FloatingContactWidget'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import HomePage from '@/pages/HomePage'

// Code-split pages
const PrivacyPolicyPage = React.lazy(() => import('@/pages/PrivacyPolicyPage'))
const TermsPage         = React.lazy(() => import('@/pages/TermsPage'))
const NotFoundPage      = React.lazy(() => import('@/pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-emerald-400">
      <span className="sr-only">Loading…</span>
      <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <CookieConsentProvider>
          <BrowserRouter>
              <SkipLink />
              <Navbar />

              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/"               element={<HomePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms"           element={<TermsPage />} />
                  <Route path="*"               element={<NotFoundPage />} />
                </Routes>
              </Suspense>

              <Footer />
              <CookieConsentBanner />
              <FloatingContactWidget />
            </BrowserRouter>
        </CookieConsentProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}
