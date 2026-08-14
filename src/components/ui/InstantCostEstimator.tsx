import { useState } from 'react'
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services'

export function InstantCostEstimator() {
  const [selectedService, setSelectedService] = useState('tree-felling')
  const [treeSize, setTreeSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [access, setAccess] = useState<'easy' | 'tight'>('easy')

  // Calculate estimated price range
  const getEstimate = () => {
    let baseMin = 150
    let baseMax = 350

    if (selectedService === 'tree-felling') {
      baseMin = 250
      baseMax = 650
    } else if (selectedService === 'crown-reduction' || selectedService === 'crown-thinning') {
      baseMin = 180
      baseMax = 420
    } else if (selectedService === 'stump-grinding') {
      baseMin = 90
      baseMax = 220
    } else if (selectedService === 'hedge-trimming') {
      baseMin = 100
      baseMax = 300
    } else if (selectedService === 'emergency-call-out') {
      baseMin = 300
      baseMax = 800
    }

    const multiplier = treeSize === 'small' ? 0.8 : treeSize === 'large' ? 1.6 : 1.0
    const accessAdd = access === 'tight' ? 50 : 0

    const min = Math.round(baseMin * multiplier + accessAdd)
    const max = Math.round(baseMax * multiplier + accessAdd * 1.5)

    return { min, max }
  }

  const { min, max } = getEstimate()

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Instant Quote Calculator</h3>
          <p className="text-xs text-slate-400">Get a quick estimate in seconds</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Service Type */}
        <div>
          <label htmlFor="est-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Service Required
          </label>
          <select
            id="est-service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm py-2.5 px-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Tree / Hedge Size */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Approximate Size / Height
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setTreeSize(size)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all ${
                  treeSize === size
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Garden Access */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Garden Access
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAccess('easy')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                access === 'easy'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Direct / Wide Access
            </button>
            <button
              type="button"
              onClick={() => setAccess('tight')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                access === 'tight'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Narrow / House Access
            </button>
          </div>
        </div>

        {/* Estimated Price Output */}
        <div className="mt-6 pt-4 border-t border-slate-800 bg-slate-950/60 rounded-xl p-4 text-center">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Estimated Guide Price</span>
          <div className="text-3xl font-extrabold text-white mt-1">
            £{min} – £{max} <span className="text-xs font-normal text-slate-400">+ VAT</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
            <span>Includes full site clearance and green waste removal</span>
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold text-slate-950 shadow-md hover:from-emerald-400 hover:to-teal-400 transition-all"
          >
            <span>Lock In Free Written Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
