import { useEffect, useRef } from 'react'

export default function QuoteRequestForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Inject GHL embed script
    const scriptId = 'ghl-form-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://link.kdlead.com/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Listen for resize messages from the GHL iframe
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
        // GHL sends height updates via postMessage
        if (
          data.type === 'iframeHeight' ||
          data.type === 'resize' ||
          (data.height && typeof data.height === 'number')
        ) {
          const newHeight = data.height || data.iframeHeight
          if (newHeight && iframeRef.current) {
            iframeRef.current.style.height = `${newHeight + 20}px`
          }
        }
      } catch {
        // ignore non-JSON messages
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
      <h3 className="text-2xl font-extrabold text-white mb-6 px-2">
        Request a Free Quote
      </h3>

      <div className="w-full rounded-xl bg-slate-950 border border-slate-800" style={{ minHeight: '950px' }}>
        <iframe
          ref={iframeRef}
          src="https://link.kdlead.com/widget/form/cJyIrn377UwedXmVHEFg"
          style={{ width: '100%', height: '950px', border: 'none', borderRadius: '8px', display: 'block' }}
          id="inline-cJyIrn377UwedXmVHEFg"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Evergreen Arbor Services Liverpool"
          data-height="950"
          data-layout-iframe-id="inline-cJyIrn377UwedXmVHEFg"
          data-form-id="cJyIrn377UwedXmVHEFg"
          title="Evergreen Arbor Services Liverpool"
          scrolling="no"
        />
      </div>
    </div>
  )
}
