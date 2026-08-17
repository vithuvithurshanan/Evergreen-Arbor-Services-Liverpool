import { useEffect } from 'react'

export default function QuoteRequestForm() {
  useEffect(() => {
    // Dynamically inject the form embed script once the component mounts
    const scriptId = 'ghl-form-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://link.kdlead.com/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    return () => {
      // Clean up script if needed or leave it cached
    }
  }, [])

  return (
    <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
      <h3 className="text-2xl font-extrabold text-white mb-6 px-2">
        Request a Free Quote
      </h3>

      <div className="w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800" style={{ height: '915px' }}>
        <iframe
          src="https://link.kdlead.com/widget/form/cJyIrn377UwedXmVHEFg"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
          id="inline-cJyIrn377UwedXmVHEFg" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Evergreen Arbor Services Liverpool"
          data-height="915"
          data-layout-iframe-id="inline-cJyIrn377UwedXmVHEFg"
          data-form-id="cJyIrn377UwedXmVHEFg"
          title="Evergreen Arbor Services Liverpool"
        />
      </div>
    </div>
  )
}
