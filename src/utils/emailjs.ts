/**
 * EmailJS integration for sending quote request emails.
 *
 * Credentials are loaded from Vite env vars so they are never committed
 * to source control.  If any of the three vars are absent the function
 * logs to the console (dev-only fallback) and returns without throwing,
 * allowing the rest of the form submission flow to succeed.
 *
 * Requirements: 7.3–7.7, 11.8
 */

import emailjs from '@emailjs/browser'
import type { QuoteFormValues } from './formSchema'

/**
 * Send a quote-request email via EmailJS.
 *
 * @throws {Error} when EmailJS returns a non-200 status code.
 */
export async function sendQuoteEmail(data: QuoteFormValues): Promise<void> {
  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    // Not yet configured — log for dev visibility and bail out gracefully.
    console.log('[EmailJS] Not configured. Form data:', data)
    return
  }

  const result = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:         data.fullName,
      phone:             data.phone,
      email:             data.email,
      service_address:   data.serviceAddress,
      service_type:      data.serviceType,
      description:       data.description,
      preferred_contact: data.preferredContact ?? 'Not specified',
    },
    PUBLIC_KEY,
  )

  if (result.status !== 200) {
    throw new Error(`EmailJS error: ${result.text}`)
  }
}
