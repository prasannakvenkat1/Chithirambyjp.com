# Chithiram by JP - Website Specification

## 1. Overview

A website for an art academy/studio, inspired by [lifeandart.in](https://www.lifeandart.in/). The site should showcase courses, gallery work, events, and provide contact/enrollment capabilities. All images across the site must be **easily updatable** via a content management approach (see Section 10).

### Out of Scope
- Clay/Pottery Workshop page
- Photography Workshop page

---

## 2. Site Map & Navigation

### Primary Navigation (Top Bar)
| Menu Item    | Sub-items                                              |
| ------------ | ------------------------------------------------------ |
| Home         | —                                                      |
| About Us     | About the Academy, Founder, Vision & Mission, Faculty  |
| Courses      | Fine Arts, Sculpting, Tanjore Painting, Terracotta Jewelry, Art Cubs (Kids) |
| Gallery      | Photos, Videos, Faculty Works, Student Works           |
| Events       | Upcoming Events, Past Events, Media Coverage, Charity  |
| Workshops    | Corporate Workshops, School Programs, Teacher Training |
| Our Students | Testimonials, Alumni, Blog, Career Paths               |
| Shop         | Online Store, Custom Orders, Gift Art, Memberships     |
| Contact      | FAQs, Contact Form, Social Media Links                 |

> Navigation should be **responsive** — collapsing into a hamburger menu on mobile.

---

## 3. Page Specifications

### 3.1 Home Page

| Section              | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| Hero Banner          | Full-width image carousel/slider with 3-5 rotating banners. Overlay text with CTA button ("Explore Courses", "Enroll Now"). |
| Welcome Introduction | Short paragraph about the academy with a "Read More" link to About Us.     |
| Featured Courses     | Grid of 3-4 course cards (image + title + short description + "Learn More" link). |
| Gallery Preview      | Masonry or grid layout showing 6-8 recent gallery images with "View Gallery" link. |
| Upcoming Events      | 2-3 event cards with date, title, short description.                        |
| Testimonials         | Carousel of student testimonials (photo, name, quote).                      |
| Call to Action       | Banner with enrollment CTA ("Join Our Community").                          |

### 3.2 About Us

- **About the Academy**: History, mission statement, what makes it unique. Include 2-3 images.
- **Founder**: Bio, photo, background, philosophy.
- **Vision & Mission**: Dedicated section with visuals.
- **Faculty**: Grid of faculty cards (photo, name, specialization, short bio).

### 3.3 Courses

Each course gets its own detail page with:
- Course title and hero image
- Description and curriculum outline
- Duration, schedule, fee structure
- Age group / skill level
- Enrollment CTA button
- Related gallery images

**Course Categories:**
1. Fine Arts (Professional & Certificate levels)
2. Sculpting (stone, wood, metal, mixed media)
3. Tanjore Painting
4. Terracotta Jewelry Making
5. Art Cubs (Children's programs, age-grouped)

### 3.4 Gallery

- **Photos**: Filterable masonry grid (filter by category: course work, events, studio)
- **Videos**: Embedded video grid (YouTube/Vimeo embeds)
- **Faculty Works**: Dedicated showcase
- **Student Works**: Dedicated showcase
- Lightbox/modal on image click for full-size viewing

### 3.5 Events

- **Upcoming Events**: Cards with date, image, title, description, registration link
- **Past Events**: Archive with photos and summary
- **Media Coverage**: Press mentions, articles, news links
- **Charity Initiatives**: Charitable events and community outreach

### 3.6 Workshops

- **Corporate Workshops**: Team-building art sessions, customizable programs
- **School Programs**: Art education partnerships, curriculum support
- **Teacher Training**: Professional development for art educators

Each workshop page: description, photos, benefits, inquiry/booking form.

### 3.7 Our Students

- **Testimonials**: Grid/carousel with student photo, name, course taken, quote
- **Alumni**: Notable alumni profiles
- **Blog**: Article listing with featured image, title, date, excerpt
- **Career Paths**: Where students have gone after training

### 3.8 Shop (Phase 2 — optional)

- Product listing with images, price, description
- Custom order inquiry form
- Gift art section
- Membership plans with pricing table

### 3.9 Contact / Get in Touch

- **Contact Form**: Name, email, phone, subject, message
- **Address & Map**: Embedded Google Map + written address
- **Phone & Email**: Clickable links
- **Social Media Links**: Facebook, Instagram, YouTube, LinkedIn
- **FAQs**: Accordion-style expandable Q&A section

---

## 4. Global UI Elements

| Element               | Description                                                        |
| --------------------- | ------------------------------------------------------------------ |
| Header                | Logo (left), navigation menu (center/right), CTA button ("Enroll Now") |
| Footer                | Address, phone, email, social icons, quick links, copyright, privacy policy link |
| WhatsApp Chat Widget  | Floating button (bottom-right) linking to WhatsApp for quick inquiries |
| Back to Top           | Floating button appears on scroll                                  |
| Breadcrumbs           | On all inner pages for navigation clarity                          |

---

## 5. Design & Branding

| Aspect         | Guideline                                                              |
| -------------- | ---------------------------------------------------------------------- |
| Style          | Warm, artistic, inviting — conveying creativity and professionalism    |
| Color Palette  | Earth tones as primary (terracotta, warm brown, cream/off-white), accent color (deep teal or gold) for CTAs and highlights |
| Typography     | Elegant serif for headings (e.g., Playfair Display), clean sans-serif for body (e.g., Open Sans or Lato) |
| Imagery        | High-quality photos of artwork, studio, students at work               |
| Spacing        | Generous white space, clean layouts, no clutter                        |
| Icons          | Minimal, line-style icon set for navigation and features               |

---

## 6. Responsive Design

| Breakpoint   | Behavior                                                     |
| ------------ | ------------------------------------------------------------ |
| Desktop      | Full navigation bar, multi-column layouts, large hero images |
| Tablet       | Condensed navigation, 2-column grids, adjusted spacing       |
| Mobile       | Hamburger menu, single-column layout, stacked cards, touch-friendly buttons (min 44px tap targets) |

---

## 7. Performance & SEO

- Lazy loading for images
- Optimized image formats (WebP with fallbacks)
- Meta tags (title, description, Open Graph) on every page
- Structured data (JSON-LD) for organization, courses, events
- Sitemap.xml and robots.txt
- Page load target: < 3 seconds on 3G
- Accessibility: WCAG 2.1 AA compliance (alt text, contrast, keyboard navigation)

---

## 8. Integrations

| Integration        | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| Google Analytics   | Traffic and behavior tracking                     |
| WhatsApp Business  | Quick chat/inquiry widget + lead capture (see 8.1)|
| Google Maps        | Embedded location map on Contact page             |
| YouTube/Vimeo      | Video embeds in Gallery                           |
| Social Media       | Links to Facebook, Instagram, YouTube, LinkedIn   |
| Email Service      | Contact form submissions (e.g., EmailJS, Formspree, or backend mailer) |
| CRM                | Lead management and follow-up (see 8.2)           |

### 8.1 WhatsApp Integration

| Feature                     | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| Floating Chat Widget        | Persistent button (bottom-right) on all pages. Opens WhatsApp chat with pre-filled message (e.g., "Hi, I'm interested in your courses!"). |
| Click-to-Chat on CTAs       | Key CTA buttons ("Enquire Now", "Book a Workshop") open WhatsApp with context-specific pre-filled messages. |
| WhatsApp Business API       | Use official API (via providers like Twilio, WATI, or Interakt) for automated welcome messages, quick replies, and catalog sharing. |
| Lead Capture via WhatsApp   | Every WhatsApp conversation automatically creates a lead in the CRM (name, phone, inquiry topic, timestamp). |
| Automated Responses         | Welcome message, course info menu, FAQ auto-replies during off-hours.    |

### 8.2 CRM & Lead Generation

#### Lead Capture Points
Every user interaction that indicates interest should generate a lead:

| Capture Point              | Data Collected                                      |
| -------------------------- | --------------------------------------------------- |
| Contact Form               | Name, email, phone, subject, message                |
| Course Enrollment Inquiry  | Name, email, phone, course interested in            |
| Workshop Booking Form      | Name, email, phone, organization, workshop type     |
| WhatsApp Chat Initiation   | Phone number, message, page they came from          |
| Newsletter Signup          | Name, email                                         |
| Event Registration         | Name, email, phone, event name                      |
| Free Trial / Demo Request  | Name, email, phone, preferred date/time             |

#### CRM Requirements

| Requirement           | Details                                                            |
| --------------------- | ------------------------------------------------------------------ |
| CRM Platform          | HubSpot (free tier), Zoho CRM, Freshsales, or Bitrix24            |
| Lead Auto-Creation    | All form submissions and WhatsApp inquiries auto-create CRM leads  |
| Lead Source Tracking   | Tag each lead with source (website form, WhatsApp, event page, etc.) and UTM parameters |
| Pipeline Stages       | New Lead → Contacted → Interested → Enrolled → Alumni             |
| Notifications         | Instant email/WhatsApp alert to admin on new lead                  |
| Follow-up Reminders   | Automated follow-up tasks if no response within 24/48/72 hours     |
| Lead Scoring          | Score based on: course interest, page visits, engagement level     |
| Reporting Dashboard   | Weekly/monthly reports: leads by source, conversion rate, revenue  |

#### Integration Flow
```
User Action (form submit / WhatsApp / event registration)
    │
    ▼
Website Backend / Webhook
    │
    ├──► CRM: Create/update lead record
    │       - Name, contact info, source, interest
    │       - Assign to pipeline stage
    │       - Trigger follow-up workflow
    │
    ├──► WhatsApp: Send confirmation message
    │       - "Thanks for your interest! We'll get back within 24 hours."
    │
    └──► Email: Send confirmation + admin notification
```

#### Additional Lead Gen Features

| Feature                | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| Exit-Intent Popup      | Popup on exit offering free trial class or downloadable art guide in exchange for email |
| Newsletter Signup      | Footer and sidebar email signup for art tips, events, offers   |
| Lead Magnet            | Free downloadable content (art guide PDF, class schedule) gated behind email capture |
| Referral Tracking      | "Referred by" field on forms to track word-of-mouth leads      |
| UTM Parameter Capture  | Track which campaigns/ads drive leads (stored in CRM)          |

---

## 9. Tech Stack — Cost-Effective Approach

**Guiding principle:** Minimize monthly recurring costs, avoid paid subscriptions where free alternatives exist, and ensure the site can be maintained without a developer for routine updates.

| Layer     | Technology                          | Monthly Cost |
| --------- | ----------------------------------- | ------------ |
| Frontend  | **Next.js** (static site generation + dynamic routes) | Free |
| Styling   | **Tailwind CSS**                    | Free         |
| CMS       | **Sanity** (free tier: 100K API requests/mo, 500MB assets) | **$0** (free tier covers a small academy site) |
| Hosting   | **Vercel** (free tier: 100GB bandwidth, auto-deploy from Git) | **$0** |
| Forms     | **Formspree** (free tier: 50 submissions/mo) or **Web3Forms** (free, unlimited) | **$0** |
| Images    | **Sanity's built-in CDN** (included in free tier) — no need for Cloudinary | **$0** |
| WhatsApp  | **wa.me links + free widget** (e.g., Elfsight free plan or custom-built) for basic chat. Upgrade to WATI/Interakt only when lead volume justifies it. | **$0–$40** |
| CRM       | **HubSpot Free CRM** (unlimited contacts, deal pipeline, forms, email tracking) | **$0** |
| Analytics | **Google Analytics 4** (free)       | **$0** |
| Domain    | Custom domain (.in / .com)          | ~$10/year    |
| Email     | **Zoho Mail free tier** (5 users) or Gmail workspace | **$0–$6** |

### Estimated Monthly Running Cost: **$0–$15/month** (domain amortized)

### Why This Stack
- **No server to maintain** — fully static/serverless, no VPS or database to manage
- **Auto-deploys** — push to Git or edit in Sanity → site rebuilds automatically
- **No developer needed** for content updates — Sanity provides a visual admin panel
- **Scales for free** — Vercel's free tier handles thousands of daily visitors
- **Upgrade path** — if the academy grows, paid tiers of Sanity ($15/mo) and Vercel ($20/mo) provide 10x more capacity

---

## 10. Image & Content Update Strategy

To ensure **flexibility for updating pictures and content without code changes**:

### Recommended: Sanity CMS (Free Tier)
- **Visual admin panel** at `studio.yourdomain.in` — non-technical users can:
  - Upload/replace images via drag-and-drop
  - Edit course descriptions, prices, schedules
  - Add/remove gallery images, events, testimonials
  - Reorder hero banners
- **Automatic image optimization** — Sanity CDN serves WebP, resizes on-the-fly
- **No redeploy needed** for content-only changes (uses ISR — Incremental Static Regeneration)
- **Version history** — roll back any content change

### Content Schema (defined in Sanity)
```
Schemas:
  - Course        → title, slug, image, description, curriculum, duration, fee, ageGroup
  - GalleryItem   → image, title, category (faculty/student/event), date
  - Event         → title, image, date, description, registrationLink
  - Testimonial   → studentName, photo, quote, courseTaken
  - Faculty       → name, photo, specialization, bio
  - HeroBanner    → image, overlayText, ctaText, ctaLink, sortOrder
  - Workshop      → title, type (corporate/school/teacher), image, description
  - BlogPost      → title, slug, featuredImage, body (rich text), publishDate
  - SiteSettings  → logo, phone, email, address, socialLinks, whatsappNumber
```

### How Updates Work (for non-technical admin)
1. Log in to Sanity Studio (browser-based)
2. Click on the content type (e.g., "Gallery")
3. Upload new image / edit text / reorder items
4. Click "Publish" — site updates within seconds

### Fallback: File-Based Content (Zero Cost, Developer Required)
If CMS is overkill initially:
- Images in `/public/images/{gallery,courses,events}/`
- Content in JSON files (`/content/courses.json`, etc.)
- Update = edit file + `git push` → auto-redeploy

---

## 11. Maintenance & Ongoing Costs Summary

| Item                          | Cost         | Frequency  | Who Does It         |
| ----------------------------- | ------------ | ---------- | ------------------- |
| Domain renewal                | ~$10         | Yearly     | Admin               |
| Content updates (images, text)| $0           | As needed  | Admin (via Sanity)  |
| Hosting (Vercel free tier)    | $0           | Monthly    | Automatic           |
| SSL certificate               | $0           | Automatic  | Vercel (included)   |
| CRM (HubSpot free)           | $0           | Monthly    | Admin               |
| WhatsApp widget               | $0           | Monthly    | Automatic           |
| Security updates (Next.js)   | $0           | Quarterly  | Developer (1-2 hrs) |
| Feature additions / bug fixes | As quoted    | As needed  | Developer           |

**Total ongoing cost (no developer): ~$10/year**
**Total with quarterly maintenance: ~$10/year + 4-8 hrs developer time/year**

---

## 11. Pages Summary

| #  | Page               | Priority |
| -- | ------------------ | -------- |
| 1  | Home               | High     |
| 2  | About Us           | High     |
| 3  | Courses (listing)  | High     |
| 4  | Course Detail      | High     |
| 5  | Gallery            | High     |
| 6  | Events             | Medium   |
| 7  | Workshops          | Medium   |
| 8  | Our Students       | Medium   |
| 9  | Contact            | High     |
| 10 | Blog (listing)     | Low      |
| 11 | Blog Post          | Low      |
| 12 | Shop               | Low (Phase 2) |
| 13 | FAQs               | Medium   |

---

## 12. Milestones

| Phase   | Deliverables                                                    |
| ------- | --------------------------------------------------------------- |
| Phase 1 | Home, About Us, Courses, Gallery, Contact — core pages with responsive design, image update capability, WhatsApp floating widget |
| Phase 2 | CRM integration, lead capture forms on all pages, WhatsApp Business API setup, automated lead workflows |
| Phase 3 | Events, Workshops, Our Students, Blog                           |
| Phase 4 | Shop, Memberships, lead magnets, exit-intent popups, advanced analytics & CRM dashboards |
