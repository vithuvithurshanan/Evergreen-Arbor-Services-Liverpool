# Public Assets

## `og-image.jpg`

**Required dimensions:** 1200 × 630 px  
**Format:** JPEG  
**Max file size:** ~200 KB (aim for <100 KB for performance)

This image is used as the Open Graph (og:image) and Twitter Card image for the
home page. It appears when the site URL is shared on social media platforms
(Facebook, Twitter/X, LinkedIn, WhatsApp, etc.).

### Content guidelines

- Use a high-quality, on-brand photograph — ideally showing an arborist at work
  or a before/after tree surgery shot in a Liverpool setting.
- Overlay the business name ("Evergreen Arbor Services") in the bottom-left or
  bottom-right corner using a semi-transparent bar for legibility.
- Avoid placing important content within the outer 10% of the image, as some
  platforms crop the preview slightly.

### How to add the image

1. Export/save the image as `og-image.jpg` (JPEG, quality ~85%).
2. Place it in this directory: `public/assets/og-image.jpg`.
3. The path is already referenced in `src/config/site.ts` → `seo.ogImage`.

### Validation

After adding the image, verify it renders correctly using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
