import { ShieldCheck, Award, MapPin, CheckCircle2, FileCheck } from 'lucide-react'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            Established 2008 — Over 16 Years Experience
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4"
          >
            About <span className="gradient-text">Evergreen Arbor Services</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our NPTC-qualified team delivers professional, safe, and reliable tree surgery to homeowners and commercial clients across Liverpool and Merseyside. We put safety and precision first on every project — from initial inspection to final garden tidy-up.
            </p>

            {/* Qualifications Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-slate-800 bg-slate-950/60">
                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                  <Award className="w-5 h-5 shrink-0" />
                  <h3 className="text-base font-bold text-white">Qualifications</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NPTC &amp; Lantra Certified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Arboricultural Association Member</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-5 border border-slate-800 bg-slate-950/60">
                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <h3 className="text-base font-bold text-white">Safety &amp; Insurance</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>£5,000,000 Public Liability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full PPE &amp; Risk Assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* British Standard & Service Area */}
            <div className="space-y-4 pt-2 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">BS 3998:2010 British Standard Compliant</h4>
                  <p className="text-xs text-slate-400 mt-0.5">All tree surgery is performed in accordance with British Standard recommendations for tree work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Coverage Area</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Liverpool, Sefton, Knowsley, Wirral, St Helens, Halton, and wider Merseyside.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Team Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
              <img
                src="/images/team-photo.jpg"
                alt="The Evergreen Arbor Services team at work in Liverpool"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl border border-slate-700/50 backdrop-blur-md">
                <p className="text-xs font-bold text-white">NPTC Qualified Team on Site in Liverpool</p>
                <p className="text-[11px] text-emerald-300 mt-0.5">Combining safety, skill, and complete garden cleanup.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
