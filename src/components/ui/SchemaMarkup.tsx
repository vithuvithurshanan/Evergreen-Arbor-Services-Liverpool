import { Helmet } from 'react-helmet-async'

interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

/**
 * Injects a JSON-LD structured data block into the document <head>.
 * Satisfies SEO / schema.org requirements (Req 15.1–15.3).
 */
export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
