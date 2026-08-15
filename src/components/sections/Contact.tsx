import { Mail, MapPin, Phone, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import QuoteRequestForm from '@/components/forms/QuoteRequestForm'
import { trackCtaClick } from '@/utils/analytics'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 bg-slate-950 text-white border-t border-slate-800 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 mb-4">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Free No-Obligation Quotes
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Get in Touch with Our <span className="gradient-text">Liverpool Arborists</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a tree emergency or planning a garden clearance? Contact our NPTC-certified team today.
          </p>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
            onClick={() => trackCtaClick('Call Contact Bar')}
            className="glass-card rounded-2xl p-5 border border-slate-800 bg-slate-900/60 flex items-center gap-4 hover:border-emerald-500/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Direct Phone Line</p>
              <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{SITE_CONFIG.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="glass-card rounded-2xl p-5 border border-slate-800 bg-slate-900/60 flex items-center gap-4 hover:border-emerald-500/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Email Inquiries</p>
              <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate max-w-[200px]">{SITE_CONFIG.email}</p>
            </div>
          </a>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 bg-slate-900/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Working Hours</p>
              <p className="text-xs font-bold text-white">Mon–Fri: 08:00 – 17:30</p>
              <p className="text-[11px] text-emerald-400 font-semibold">24/7 Storm Emergency Call-Outs</p>
            </div>
          </div>
        </div>

        {/* Two Column Section Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <QuoteRequestForm />
          </div>

          {/* Right Column: Trust Card + Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Guarantee Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Free Quote Promise</h3>
                  <p className="text-xs text-slate-400">No hidden fees or obligations</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Response within 1 business day guaranteed</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free site visit &amp; tree assessment in Liverpool</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed, fully transparent written quote</span>
                </li>
              </ul>
            </div>

            {/* Google Map Container */}
            <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-slate-800 bg-slate-900/90 flex items-center gap-2 text-xs font-bold text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Service Region: Liverpool, Sefton, Knowsley &amp; Merseyside</span>
              </div>
              <iframe
                title="Evergreen Arbor Services service area — Liverpool, Merseyside"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76198.4!2d-2.9916!3d53.4084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b215814e33fb7%3A0x767a67248a756eca!2sLiverpool!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="340"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
