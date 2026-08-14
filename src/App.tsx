import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CookieConsentProvider } from '@/context/CookieConsentContext'
import { LightboxProvider } from '@/context/LightboxContext'
import { SkipLink } from '@/components/layout/SkipLink'
import Navbar from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsentBanner } from '@/components/ui/CookieConsentBanner'
import { FloatingContactWidget } from '@/components/ui/FloatingContactWidget'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import HomePage from '@/pages/HomePage'

// Code-split pages
const PrivacyPolicyPage = React.lazy(() => import('@/pages/PrivacyPolicyPage'))
const CookiePolicyPage  = React.lazy(() => import('@/pages/CookiePolicyPage'))
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
          <LightboxProvider>
            <BrowserRouter>
              <SkipLink />
              <Navbar />

              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/"               element={<HomePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/cookie-policy"  element={<CookiePolicyPage />} />
                  <Route path="*"               element={<NotFoundPage />} />
                </Routes>
              </Suspense>

              <Footer />
              <CookieConsentBanner />
              <FloatingContactWidget />
            </BrowserRouter>
          </LightboxProvider>
        </CookieConsentProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}
