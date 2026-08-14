/**
 * Zod validation schema for the quote request form.
 *
 * Requirements: 7.3–7.7, 11.8
 */

import { z } from 'zod'

/**
 * UK phone number regex.
 *
 * Matches common UK landline and mobile formats, including:
 *   - Mobile:   07700 900000, +44 7700 900000
 *   - London:   020 7946 0000, +44 20 7946 0000
 *   - National: 0151 000 0000, 01234 567890
 *   - Non-geographic: 03xx xxx xxxx
 *
 * NOTE: No global (`g`) flag — required so that repeated .test() calls
 * on the same regex instance behave idempotently (Property 3).
 */
export const UK_PHONE_REGEX =
  /^(\+44\s?7\d{3}|\+44\s?\(0\)?\d{2,4}|\(?07\d{3}\)?|\(?01\d{2,4}\)?|\(?02\d{3,4}\)?|\(?03\d{3}\)?)[\s\-]?\d{3,4}[\s\-]?\d{3,4}$/

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name')
    .max(100),

  phone: z
    .string()
    .regex(UK_PHONE_REGEX, 'Please enter a valid UK phone number (e.g. 07700 900000)'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  serviceAddress: z
    .string()
    .min(3, 'Please enter your service address or postcode'),

  serviceType: z
    .string()
    .min(1, 'Please select a service type'),

  description: z
    .string()
    .min(10, 'Please describe the work required'),

  preferredContact: z
    .enum(['phone', 'email', ''])
    .optional(),

  /** Honeypot field — must remain empty for genuine submissions */
  _hp: z
    .string()
    .max(0, '')
    .optional(),
})

export type QuoteFormValues = z.infer<typeof quoteFormSchema>
