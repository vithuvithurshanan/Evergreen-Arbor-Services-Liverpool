# Requirements Document

## Introduction

Evergreen Arbor Services Liverpool is a professional tree surgery and arborist company operating in Liverpool and the surrounding Merseyside region. This document defines the requirements for a new professional business website that will serve as the company's primary digital presence. The website must attract local customers, clearly communicate the range of arborist services on offer, build trust through testimonials and professional presentation, and provide easy routes for customers to request quotes or make contact. The site must be fast, accessible, mobile-responsive, and optimised for local search engine results.

---

## Glossary

- **Website**: The complete Evergreen Arbor Services Liverpool web application delivered to users via a browser.
- **Visitor**: Any person browsing the Website.
- **Customer**: A Visitor who intends to enquire about or purchase services.
- **Admin**: The business owner or designated staff member who manages website content and enquiries.
- **CTA (Call-to-Action)**: A prominent button or link prompting a Visitor to take a specific action (e.g. "Get a Free Quote").
- **Hero Section**: The large banner area at the top of the Home page, containing a headline, sub-headline, and primary CTA.
- **Quote Request Form**: The web form through which Customers submit enquiry and service-request details.
- **Gallery**: A collection of before/after and in-progress photographs showcasing completed work.
- **Testimonial**: A written review or endorsement provided by a past Customer.
- **Service Card**: A visual component summarising a single service offering.
- **Navigation Bar (Navbar)**: The persistent top-of-page element containing links to all major page sections.
- **Footer**: The bottom-of-page element containing contact details, social links, and legal information.
- **SEO**: Search Engine Optimisation — techniques that improve the Website's ranking in search engine results.
- **Core Web Vitals**: Google's set of page-experience metrics: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).
- **WCAG 2.1 AA**: Web Content Accessibility Guidelines version 2.1, Level AA — the accessibility standard the Website must meet.
- **Schema Markup**: Structured data (JSON-LD) embedded in pages to help search engines understand business information.
- **Local SEO**: SEO practices targeting geographically relevant search queries (e.g. "tree surgeon Liverpool").
- **SSL/TLS**: Encryption protocol ensuring secure data transmission between browser and server.
- **Sitemap**: An XML file listing all crawlable URLs on the Website, submitted to search engines.
- **Robots.txt**: A file instructing search engine crawlers which pages to index or ignore.

---

## Requirements

---

### Requirement 1: Site-Wide Navigation and Structure

**User Story:** As a Visitor, I want a clear and consistent navigation system, so that I can find any section of the Website without confusion.

#### Acceptance Criteria

1. THE Website SHALL provide a Navbar visible on every page containing links to: Home, Services, About Us, Gallery, Testimonials, and Contact.
2. WHEN a Visitor clicks a Navbar link on a connection of ≥10 Mbps download speed, THE Website SHALL navigate to the target section or page within 500ms.
3. WHEN the viewport width is below 768px, THE Navbar SHALL collapse into a hamburger-style toggle menu; at exactly 768px the Navbar SHALL remain in its expanded desktop state.
4. WHEN a Visitor activates the hamburger toggle, THE Navbar SHALL expand to display all navigation links in a full-width dropdown; the menu SHALL close when the Visitor activates the toggle again, selects a navigation link, or clicks/taps outside the menu area.
5. THE Website SHALL include a Footer on every page containing the business name, phone number, email address, registered service area, and links to the Privacy Policy and Cookie Policy.
6. THE Website SHALL display the company logo in the top-left of the Navbar on every page.
7. WHEN a Visitor scrolls past the Hero Section on any page, THE Navbar SHALL remain fixed at the top of the viewport (sticky behaviour).
8. WHILE a Visitor is within a given page section, THE Navbar SHALL render the corresponding navigation link in a visually distinct style that differs from inactive links (e.g. different colour, font weight, or underline).
9. WHEN the hamburger menu is open and a Visitor clicks or taps outside the menu area, THE Navbar SHALL close the dropdown menu.

---

### Requirement 2: Home Page — Hero Section

**User Story:** As a Visitor arriving at the Website for the first time, I want a compelling and informative hero section, so that I immediately understand what the business does and where it operates.

#### Acceptance Criteria

1. THE Home Page SHALL display a Hero Section as the first visible element above the fold.
2. THE Hero Section SHALL display a headline containing the text "Evergreen Arbor Services" and a sub-headline containing both the word "Liverpool" and a reference to tree surgery or arborist services, each no longer than 100 characters.
3. THE Hero Section SHALL display at least one primary CTA button labelled "Get a Free Quote" that navigates the Visitor to the Quote Request Form section of the page.
4. THE Hero Section SHALL display a secondary CTA button labelled "Our Services" that navigates the Visitor to the Services section of the page.
5. THE Hero Section SHALL use a background image depicting tree surgery or arborist work, with a minimum resolution of 1920×1080 pixels.
6. IF the Hero Section background image fails to load, THEN THE Hero Section SHALL display a solid fallback background colour such that the headline, sub-headline, and CTA buttons remain visible with a contrast ratio of at least 4.5:1 against the background.
7. WHEN the viewport width is below 768px, THE Hero Section SHALL stack the headline, sub-headline, and CTA buttons vertically in a single column with no horizontal overflow, and all text SHALL maintain a contrast ratio of at least 4.5:1 against the background.

---

### Requirement 3: Services Section

**User Story:** As a Customer, I want to browse the full range of tree surgery and arborist services offered, so that I can confirm the company can meet my needs before making contact.

#### Acceptance Criteria

1. THE Services Section SHALL display a Service Card for each of the following services: Tree Felling, Crown Reduction, Crown Thinning, Tree Pruning, Stump Grinding / Stump Removal, Emergency Tree Surgery, Hedge Trimming and Shaping, Tree Planting and Aftercare, and Arboricultural Surveys and Reports.
2. EACH Service Card SHALL display a title, a descriptive paragraph of at least 40 words, and a representative icon or image that is unique and visually distinct from the icons/images used on all other Service Cards.
3. THE Services Section SHALL display a CTA prompting the Customer to request a quote, linking to the Quote Request Form, positioned at the bottom of the section after all Service Cards.
4. WHEN a Visitor clicks a Service Card, THE Website SHALL display an expanded description of that service of at least 80 words, either as an inline accordion or a dedicated service detail page; IF an accordion is used, THEN all accordion panels SHALL be in the collapsed state on initial page load.
5. THE Services Section SHALL be navigable directly via the Navbar "Services" link.
6. WHEN the viewport width is below 768px, THE Services Section SHALL display Service Cards in a single-column layout.

---

### Requirement 4: About Us Section

**User Story:** As a Customer, I want to learn about the company's background, qualifications, and values, so that I can trust them to work on my property.

#### Acceptance Criteria

1. THE About Us Section SHALL display content including: the year the company was established, the number of years serving Liverpool and Merseyside, and a description of at least 50 words covering the company's background and mission.
2. THE About Us Section SHALL list professional qualifications and certifications held by the team, including as a minimum: NPTC/Lantra awards, Arboricultural Association membership, and public liability insurance details.
3. THE About Us Section SHALL include at least one photograph showing a team member or the full team wearing work attire at an outdoor tree surgery or arborist work site.
4. THE About Us Section SHALL state the geographic service area covered (Liverpool and Merseyside).
5. THE About Us Section SHALL include a health and safety statement containing at a minimum: a reference to Personal Protective Equipment (PPE) use, compliance with a named safety standard or legislation (e.g. BS 3998, the Health and Safety at Work Act 1974), and mention of risk assessments prior to work commencement.
6. THE About Us Section SHALL display trust indicators including as a minimum: the public liability insurance coverage amount in GBP and at least one trade association logo (e.g. Arboricultural Association).

---

### Requirement 5: Gallery Section

**User Story:** As a Customer, I want to view photographs of completed tree surgery work, so that I can assess the quality of the company's workmanship before hiring them.

#### Acceptance Criteria

1. THE Gallery Section SHALL display a grid of at least 12 photographs showing completed tree surgery work.
2. WHEN a Visitor clicks a Gallery photograph, THE Website SHALL open a viewport-filling overlay (lightbox) displaying the selected image at the largest dimensions that fit within the viewport without cropping.
3. WHEN the lightbox is open, THE Website SHALL provide next and previous navigation controls; WHEN the Visitor reaches the last photograph and activates next, THE Website SHALL wrap around to the first photograph, and vice versa.
4. WHEN the lightbox is open and the Visitor presses the Escape key, THE Website SHALL close the lightbox and return focus to the previously selected Gallery thumbnail; THE Website SHALL also display a visible close button that closes the lightbox when activated via click, tap, or keyboard.
5. THE Gallery Section SHALL include an `alt` attribute on every photograph image element; content images SHALL have a non-empty `alt` value describing the subject of the photograph; decorative images SHALL use `alt=""`.
6. WHEN the viewport width is below 768px, THE Gallery Section SHALL display photographs in a two-column grid without horizontal overflow; WHEN the viewport width is exactly 768px, horizontal overflow SHALL also be prevented; WHEN the viewport width is 769px or above, THE Gallery Section SHALL display photographs in a grid of three or more columns.
7. THE Gallery Section SHALL use the browser's native `loading="lazy"` attribute on all photograph `<img>` elements that are not within the initial viewport, such that those images are not downloaded until the Visitor scrolls them into view.

---

### Requirement 6: Testimonials Section

**User Story:** As a Customer, I want to read reviews from previous customers in Liverpool, so that I can feel confident about the company's reputation and reliability.

#### Acceptance Criteria

1. THE Testimonials Section SHALL display at least 6 customer testimonials, each containing: the customer's first name and initial, the service received, star rating (out of 5), and review text.
2. WHEN testimonials are available, THE Testimonials Section SHALL present them on desktop viewports (≥1024px) in a horizontally scrollable carousel that auto-rotates every 5 seconds; IF no testimonials are available, THEN THE Testimonials Section SHALL remain visible and display a placeholder message indicating that reviews are coming soon.
3. WHEN the viewport width is below 768px, THE Testimonials Section SHALL display testimonials in a vertically stacked single-column layout.
4. THE Testimonials Section SHALL display the overall aggregate star rating or review score in a position immediately above the first testimonial card, calculated from the displayed testimonial data or the Google Places API response.
5. WHERE a Google Reviews integration is configured, THE Website SHALL fetch and display live Google Reviews ratings via the Google Places API; IF the Google Places API request fails or times out, THEN THE Website SHALL fall back to displaying the static testimonials and aggregate score without showing an error to the Visitor.
6. WHERE a Google Reviews integration is not configured, THE Testimonials Section SHALL display a static aggregate star rating calculated from the ratings of the manually curated testimonials.
7. THE Testimonials Section SHALL include a CTA inviting satisfied customers to leave a review, linking to the company's Google Business Profile.

---

### Requirement 7: Contact Section and Quote Request Form

**User Story:** As a Customer, I want a simple and accessible way to contact the company and request a quote, so that I can get a prompt response about the work I need.

#### Acceptance Criteria

1. THE Contact Section SHALL display the company's phone number, email address, and service area as plain visible text without requiring any form interaction.
2. THE Contact Section SHALL embed the Quote Request Form containing the following fields: Full Name (required), Phone Number (required), Email Address (required), Service Address / Postcode (required), Type of Service Required (required — `<select>` list populated from the nine services in Requirement 3), Brief Description of Work (required — `<textarea>`), and Preferred Contact Method (optional — radio group with options: "Phone" and "Email").
3. WHEN a Customer submits the Quote Request Form with all required fields validly completed, THE Website SHALL display an on-page confirmation message within 3 seconds of submission.
4. WHEN a Customer submits the Quote Request Form with all required fields validly completed, THE Website SHALL send the form data to the Admin's email address; IF the email send fails, THEN THE Website SHALL display an error message instructing the Customer to contact the business by phone and SHALL record the failed submission in the hosting environment's server log.
5. WHEN a Customer attempts to submit the Quote Request Form with one or more required fields empty or containing an invalid value, THE Website SHALL display an inline validation error message immediately below each offending field without clearing any previously entered valid data.
6. WHEN a Customer changes the value in the Email Address field and moves focus away, THE Website SHALL validate the entered value against RFC 5321 email format and display an inline error if the format is invalid.
7. WHEN a Customer changes the value in the Phone Number field and moves focus away, THE Website SHALL validate the entered value to accept only UK-format numbers — including numbers beginning with 07, 01, 02, 03, and the international prefix +44 — and display an inline error if the format is invalid.
8. THE Contact Section SHALL display an embedded Google Map iframe centred on Liverpool, Merseyside, at a zoom level that shows the Merseyside region.
9. THE Contact Section SHALL render the company phone number as an `<a href="tel:…">` element with a visible label, accessible to screen readers and activated by a single tap on a mobile device.
10. WHEN a Customer submits the Quote Request Form, THE Website SHALL disable the submit button immediately upon submission and re-enable it only after a server response (success or error) has been received, preventing duplicate submissions.
11. THE Quote Request Form SHALL display a privacy notice stating: the identity of the data controller, the purpose for which the submitted data will be used, and a hyperlink to the full Privacy Policy page; this notice SHALL be visible without scrolling on viewports ≥768px.

---

### Requirement 8: SEO and Discoverability

**User Story:** As the Admin, I want the Website to rank highly in local search engine results for tree surgery services in Liverpool, so that the business attracts new customers organically.

#### Acceptance Criteria

1. EACH page of the Website SHALL include a unique, descriptive `<title>` tag of no more than 60 characters referencing the service and location (e.g. "Tree Surgeon Liverpool | Evergreen Arbor Services").
2. EACH page of the Website SHALL include a unique `<meta name="description">` tag of between 120 and 160 characters summarising the page content and geographic relevance.
3. THE Website SHALL include LocalBusiness Schema Markup (JSON-LD) on the Home page containing: business name, address, telephone, geographic coordinates, service area, opening hours, and URL.
4. THE Website SHALL include a Service Schema Markup entry for each of the nine services listed in Requirement 3.
5. THE Website SHALL generate and serve a well-formed XML Sitemap at `/sitemap.xml` that lists all indexable pages, is served with `Content-Type: application/xml`, and validates without errors against the Sitemap protocol schema.
6. THE Website SHALL serve a `robots.txt` file at `/robots.txt` that explicitly allows Googlebot and Bingbot to crawl all indexable pages and includes a `Sitemap:` directive pointing to the absolute URL of `/sitemap.xml`.
7. ALL content images on the Website SHALL include a non-empty `alt` attribute describing the image subject and incorporating relevant keywords where natural; decorative images SHALL use `alt=""`.
8. THE Website SHALL use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) to structure all page content.
9. EACH page of the Website SHALL include the following Open Graph meta tags: `og:title`, `og:description`, `og:image`, `og:url`, and `og:type`; and the following Twitter Card meta tags: `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image`.
10. EACH page of the Website SHALL include a `<link rel="canonical">` tag whose `href` attribute references that page's own canonical URL, preventing duplicate-content indexing.

---

### Requirement 9: Performance

**User Story:** As a Visitor, I want the Website to load quickly on both mobile and desktop connections, so that I can access information without waiting.

#### Acceptance Criteria

1. THE Website SHALL achieve a Google Lighthouse Performance score of 90 or above on both mobile and desktop audits when run against a production-optimised build served via a local or staging server, measured as the median of 3 consecutive runs; this metric is required independently of the LCP criterion.
2. THE Website SHALL achieve a Largest Contentful Paint (LCP) of 2.5 seconds or less on a simulated 4G mobile connection using Lighthouse's default 4G throttle profile (10 Mbps download, 40 ms RTT), independently of the overall Lighthouse Performance score.
3. THE Website SHALL achieve a Cumulative Layout Shift (CLS) score of 0.1 or less.
4. THE Website SHALL serve all image assets using `<picture>` elements with `<source>` elements specifying WebP or AVIF formats and a fallback `<img>` element for browsers that do not support those formats.
5. THE Website SHALL serve all static assets (CSS, JavaScript, images) with HTTP `Cache-Control` headers specifying a `max-age` of at least 604800 seconds (7 days).
6. THE Website SHALL minify all CSS and JavaScript assets in the production build.
7. THE Website SHALL achieve a Lighthouse "Eliminate render-blocking resources" audit result of 0 blocking resources for the initial viewport load.
8. IF a Visitor who has visited the Website within the preceding 7 days loads any page, THEN the browser SHALL serve previously cached static assets from disk cache or memory cache (HTTP 200 from cache) without issuing new network download requests for those assets.

---

### Requirement 10: Accessibility

**User Story:** As a Visitor with a disability, I want the Website to be fully accessible, so that I can use all features regardless of how I access the internet.

#### Acceptance Criteria

1. THE Website SHALL conform to WCAG 2.1 Level AA across all pages and interactive components.
2. EVERY interactive element (links, buttons, form inputs) on the Website SHALL be fully operable using keyboard navigation alone, with all actions achievable without requiring a mouse or pointer device.
3. THE Website SHALL display a focus indicator on every interactive element when navigated via keyboard; the focus indicator SHALL have a minimum contrast ratio of 3:1 between the focused and unfocused states as defined by WCAG 2.1 Success Criterion 2.4.11.
4. ALL colour combinations used for text and background on the Website SHALL meet a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text as defined by WCAG 2.1 Success Criterion 1.4.3.
5. THE Website SHALL include a "Skip to main content" link as the first focusable element on every page.
6. ALL form inputs on the Quote Request Form SHALL be associated with a visible `<label>` element using the `for` / `id` attribute pair.
7. THE Website SHALL include ARIA landmark roles (`role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`) and descriptive `aria-label` attributes on all major sections that do not have an implicit ARIA landmark role from their HTML element.
8. WHEN an error is displayed on the Quote Request Form, THE Website SHALL announce the error to screen reader users via an ARIA live region (e.g. `aria-live="polite"` or `role="alert"`) containing a summary of the validation errors.
9. THE Website SHALL not use colour as the sole means of conveying information in any component.

---

### Requirement 11: Security and Privacy

**User Story:** As a Customer, I want to know my personal data is handled securely, so that I can trust the company with my contact information.

#### Acceptance Criteria

1. THE Website SHALL be served exclusively over HTTPS using a valid SSL/TLS certificate issued by a publicly trusted Certificate Authority, matching the site's domain, and not expired.
2. IF a Visitor attempts to access the Website over HTTP, THEN THE Website SHALL redirect the Visitor to the HTTPS equivalent URL with a 301 permanent redirect.
3. THE Website SHALL include a Privacy Policy page detailing what personal data is collected via the Quote Request Form, how it is stored, how long it is retained, and the lawful basis for processing under UK GDPR.
4. THE Website SHALL include a Cookie Policy page explaining which cookies are set, their purpose, and their expiry duration.
5. WHERE analytics or third-party tracking scripts are used, THE Website SHALL display a cookie consent banner on the Visitor's first visit (determined by the absence of a prior consent record in the browser); the banner SHALL present accept and decline options with equal visual prominence and SHALL NOT pre-select either option.
6. WHEN the Visitor declines non-essential cookies, THE Website SHALL not load any cookie-based analytics or advertising scripts; server-side analytics and non-cookie tracking mechanisms are not restricted by this requirement.
7. WHEN a Visitor makes a cookie consent choice (accept or decline), THE Website SHALL persist that choice in the browser (e.g. via a cookie or localStorage) so that the consent banner is not re-displayed on subsequent visits until the stored consent record expires or is cleared.
8. THE Quote Request Form SHALL be protected against automated spam submissions using either a CAPTCHA mechanism or a honeypot field technique.
9. THE Website SHALL set the following HTTP security headers with at minimum the specified directives: `Content-Security-Policy: default-src 'self'` (extended as needed for third-party resources), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

### Requirement 12: Mobile Responsiveness

**User Story:** As a Customer using a smartphone, I want the Website to be fully usable on a small screen, so that I can browse services and contact the business while on the go.

#### Acceptance Criteria

1. THE Website SHALL render all content and media within the viewport width on viewport widths from 320px to 2560px, with no element or media exceeding the viewport width and no horizontal scrollbar appearing; both conditions are independently required for compliance.
2. THE Website SHALL use a responsive grid layout that adapts column count and element sizing at the following breakpoints: 320px–767px (mobile), 768px–1023px (tablet), 1024px and above (desktop), such that no horizontal interaction (scrolling or swiping) is required to access any content at any supported viewport width.
3. ALL tap targets on the Website SHALL have a minimum size of 44×44 CSS pixels as recommended by WCAG 2.5.5.
4. WHEN the viewport width is ≤767px, THE Website SHALL display the company phone number as a tappable `<a href="tel:…">` link within the first visible viewport on the Home page and within the Contact Section, without requiring the Visitor to scroll.
5. WHEN the Website is viewed on a mobile device (viewport width ≤767px), THE Website SHALL complete rendering of all above-the-fold content before initiating download of off-screen images or components.
6. WHEN a Visitor is on any page of the Website on a mobile device (viewport width ≤767px), THE Visitor SHALL be able to reach the main navigation menu within at most two taps from the current page.

---

### Requirement 13: Content Management and Maintainability

**User Story:** As the Admin, I want to be able to update website content (services, photos, testimonials) without specialist developer knowledge, so that the site stays current with minimal ongoing cost.

#### Acceptance Criteria

1. WHERE a headless CMS is integrated and has been configured with a web-based admin interface, THE Website SHALL allow the Admin to add, edit, and delete Gallery photographs via that web-based interface without requiring code changes.
2. WHERE a headless CMS is integrated, THE Website SHALL allow the Admin to add, edit, and delete Testimonials via a web-based interface without requiring code changes.
3. WHERE a headless CMS is integrated, WHEN an authenticated Admin updates Service names or descriptions via the CMS web interface, THE Website SHALL reflect those changes without requiring code changes.
4. THE Website codebase SHALL store primary contact details (phone number and email address) in a single plain-text configuration file that can be edited without programming knowledge.
5. THE Website SHALL include a README file containing at least one step-by-step procedure for each of the following topics: local development setup, production build process, deployment process, and updating each of the three content types (Gallery photographs, Testimonials, and Service descriptions).

---

### Requirement 14: Analytics and Monitoring

**User Story:** As the Admin, I want to understand how Visitors use the Website, so that I can make informed decisions about content and marketing.

#### Acceptance Criteria

1. WHERE a Visitor has consented to analytics cookies, THE Website SHALL record page views, session duration, traffic source, and device type via a configured analytics platform (e.g. Google Analytics 4 or Plausible Analytics).
2. WHERE a Visitor has consented to analytics cookies, THE Website SHALL track a conversion event in the analytics platform each time the Quote Request Form is successfully submitted.
3. WHERE a Visitor has consented to analytics cookies and the analytics platform is configured, THE Website SHALL track a click event in the analytics platform each time a primary CTA (e.g. "Get a Free Quote", "Call Now") is activated.
4. THE Website SHALL be integrated with Google Search Console to monitor search performance, indexing status, and Core Web Vitals.

---

### Requirement 15: Social Media Integration

**User Story:** As a Visitor, I want to find Evergreen Arbor Services on social media, so that I can follow their work and share their details with others.

#### Acceptance Criteria

1. THE Footer SHALL display social media icons for at minimum Facebook and Instagram, each with an accessible name (via `aria-label` or visible text) that identifies the target platform, linking to the company's active profiles on those platforms.
2. ALL external social media links SHALL open in a new browser tab and SHALL NOT send the `Referer` header to the destination site (equivalent behaviour to `target="_blank" rel="noopener noreferrer"`).
3. EACH social media icon link SHALL have a minimum tap/click target size of 44×44 CSS pixels.
4. THE Website SHALL include the following Open Graph meta tags on every page such that sharing a page link on Facebook or other Open Graph-compatible platforms renders the correct preview: `og:title`, `og:description`, `og:image` (referencing the company logo or a representative page image), and `og:url`.

---

### Requirement 16: Error Handling and Edge Cases

**User Story:** As a Visitor, I want to see a helpful message when something goes wrong, so that I am not left confused on a broken page.

#### Acceptance Criteria

1. THE Website SHALL serve a custom 404 Not Found page that: uses the same `<header>` and `<footer>` components as all other pages, displays an error explanation written in non-technical language (no HTTP status codes, stack traces, or server error messages), and includes a navigation link to the Home page.
2. IF the Quote Request Form email delivery fails due to a server-side error, THEN THE Website SHALL display an error message instructing the Customer to contact the business directly by phone; AND THE Website SHALL write the failed submission data (timestamp, form fields, error reason) to the hosting environment's server log in a format accessible to the Admin.
3. WHEN a Gallery image fails to load, THE Website SHALL display the image element's `alt` text in place of the broken image, without showing a broken-image icon.
4. THE Website SHALL not display unhandled JavaScript error messages, stack traces, or server-side error details to Visitors in production.

---

### Requirement 17: Hosting and Deployment

**User Story:** As the Admin, I want the Website hosted on a reliable platform, so that it is consistently available to Customers.

#### Acceptance Criteria

1. THE Website SHALL target a hosting environment providing 99.9% or greater uptime SLA.
2. THE Website SHALL be deployable via a CI/CD pipeline triggered by commits to the main branch of the source code repository; automatic deployment to production on every commit is not required.
3. THE Website SHALL achieve a Largest Contentful Paint (LCP) of 3 seconds or less on a simulated fast 3G connection as measured by Google Lighthouse on the Home page.
4. THE Website SHALL support deployment to at least one modern static hosting platform from the following list: Vercel, Netlify, or Cloudflare Pages; alternatively, the Website may target a Node.js-compatible server environment.
