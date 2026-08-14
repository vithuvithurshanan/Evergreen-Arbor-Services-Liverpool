import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quoteFormSchema, type QuoteFormValues } from '@/utils/formSchema'
import { sendQuoteEmail } from '@/utils/emailjs'
import { trackConversionEvent } from '@/utils/analytics'
import { SERVICES } from '@/data/services'
import { SITE_CONFIG } from '@/config/site'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

type SubmitStatus = 'idle' | 'success' | 'error'

export default function QuoteRequestForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: 'onBlur',
  })

  const errorCount = Object.keys(errors).filter(
    (key) => key !== '_hp',
  ).length

  async function onSubmit(data: QuoteFormValues) {
    if (data._hp) {
      setSubmitStatus('success')
      return
    }

    try {
      await sendQuoteEmail(data)
      trackConversionEvent()
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  const inputClasses =
    'mt-1.5 block w-full rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm shadow-sm p-3 ' +
    'focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ' +
    'aria-[invalid=true]:border-rose-500 aria-[invalid=true]:focus:border-rose-500 aria-[invalid=true]:focus:ring-rose-500'

  const errorClasses = 'mt-1 text-xs text-rose-400 font-medium flex items-center gap-1'

  const labelClasses = 'block text-xs font-bold uppercase tracking-wider text-slate-300'

  return (
    <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <h3 className="text-2xl font-extrabold text-white mb-6">
        Request a Free Quote
      </h3>

      {/* ARIA live region — error count announcement */}
      <div
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {errorCount > 0
          ? `Please correct ${errorCount} error${errorCount > 1 ? 's' : ''} in the form.`
          : null}
      </div>

      {/* Success message */}
      {submitStatus === 'success' && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 rounded-xl bg-emerald-950/80 border border-emerald-500/40 p-4 text-emerald-200 text-sm flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">Thank you — your quote request has been sent!</p>
            <p className="mt-1 text-xs text-emerald-300">
              We'll be in touch within one business day. If you need an immediate response, call us on{' '}
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="font-bold underline hover:text-white"
              >
                {SITE_CONFIG.phone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Error message */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 rounded-xl bg-rose-950/80 border border-rose-500/40 p-4 text-rose-200 text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">Something went wrong — please try again.</p>
            <p className="mt-1 text-xs text-rose-300">
              If the problem persists, call us directly on{' '}
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="font-bold underline hover:text-white"
              >
                {SITE_CONFIG.phone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Request a free quote"
      >
        {/* Honeypot */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label htmlFor="_hp">Leave this field blank</label>
          <input
            id="_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('_hp')}
          />
        </div>

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Full Name <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              aria-required="true"
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={inputClasses}
              placeholder="e.g. John Smith"
              {...register('fullName')}
            />
            {errors.fullName && (
              <span id="fullName-error" role="alert" className={errorClasses}>
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              placeholder="e.g. 07700 900000"
              className={inputClasses}
              {...register('phone')}
            />
            {errors.phone && (
              <span id="phone-error" role="alert" className={errorClasses}>
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="e.g. john@example.com"
              className={inputClasses}
              {...register('email')}
            />
            {errors.email && (
              <span id="email-error" role="alert" className={errorClasses}>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Service Address / Postcode */}
          <div>
            <label htmlFor="serviceAddress" className={labelClasses}>
              Service Address / Postcode <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <input
              id="serviceAddress"
              type="text"
              autoComplete="street-address"
              aria-required="true"
              aria-invalid={errors.serviceAddress ? 'true' : 'false'}
              aria-describedby={errors.serviceAddress ? 'serviceAddress-error' : undefined}
              placeholder="e.g. L1 1AA or 12 Example Street, Liverpool"
              className={inputClasses}
              {...register('serviceAddress')}
            />
            {errors.serviceAddress && (
              <span id="serviceAddress-error" role="alert" className={errorClasses}>
                {errors.serviceAddress.message}
              </span>
            )}
          </div>

          {/* Type of Service Required */}
          <div>
            <label htmlFor="serviceType" className={labelClasses}>
              Type of Service Required <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <select
              id="serviceType"
              aria-required="true"
              aria-invalid={errors.serviceType ? 'true' : 'false'}
              aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
              className={inputClasses}
              defaultValue=""
              {...register('serviceType')}
            >
              <option value="" disabled>Select a service…</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <span id="serviceType-error" role="alert" className={errorClasses}>
                {errors.serviceType.message}
              </span>
            )}
          </div>

          {/* Brief Description of Work */}
          <div>
            <label htmlFor="description" className={labelClasses}>
              Brief Description of Work <span aria-hidden="true" className="text-emerald-400">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              aria-required="true"
              aria-invalid={errors.description ? 'true' : 'false'}
              aria-describedby={errors.description ? 'description-error' : undefined}
              placeholder="Please describe the trees, approximate size, and any access considerations…"
              className={inputClasses}
              {...register('description')}
            />
            {errors.description && (
              <span id="description-error" role="alert" className={errorClasses}>
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Preferred Contact Method */}
          <fieldset>
            <legend className={`${labelClasses} mb-2`}>
              Preferred Contact Method <span className="text-slate-500 font-normal lowercase">(optional)</span>
            </legend>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                <input
                  type="radio"
                  value="phone"
                  className="bg-slate-950 border-slate-800 text-emerald-500 focus:ring-emerald-500"
                  {...register('preferredContact')}
                />
                <span>Phone</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300">
                <input
                  type="radio"
                  value="email"
                  className="bg-slate-950 border-slate-800 text-emerald-500 focus:ring-emerald-500"
                  {...register('preferredContact')}
                />
                <span>Email</span>
              </label>
            </div>
          </fieldset>

          {/* Privacy notice */}
          <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
            Evergreen Arbor Services is the data controller. Your details will only be used to respond to your quote request.{' '}
            <Link
              to="/privacy-policy"
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              Read Privacy Policy
            </Link>
            .
          </p>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="
              w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-6 py-3.5
              text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/50
              transition-all duration-200 hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01]
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900
              disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 glow-button
            "
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Sending Request…' : 'Send Quote Request'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
