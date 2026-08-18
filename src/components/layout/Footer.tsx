import { Facebook, Instagram, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '@/config/site'
import { VideoLogo } from '../ui/VideoLogo'

export function Footer() {
  const { businessName, tagline, phone, email, serviceArea, social } = SITE_CONFIG
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="space-y-4 lg:col-span-1">
            <VideoLogo size="lg" lightText={true} />
            <p className="text-sm text-slate-300 leading-relaxed mt-2">
              {tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 rounded-full px-3 py-1 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NPTC Qualified &amp; Insured</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Serving {serviceArea}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Tree Surgery Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About Our Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Request a Quote</a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Connect &amp; Legal
            </h3>
            <div className="flex gap-3 mb-6">
              {social?.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${businessName} on Facebook`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
              )}
              {social?.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${businessName} on Instagram`}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              )}
            </div>

            <nav aria-label="Legal" className="flex flex-col gap-2 text-xs">
              <Link
                to="/privacy-policy"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>&copy; {year} {businessName}. All rights reserved.</p>
          <p className="text-slate-300 font-medium">Professional Tree Surgeons in Liverpool &amp; Merseyside</p>
        </div>
      </div>
    </footer>
  )
}
