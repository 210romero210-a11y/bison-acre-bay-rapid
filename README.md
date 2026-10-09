# Southern Auto Detailers

In-shop auto detailing website for Southern Auto Detailers, a private appointment studio at 11692 Bricken Circle, San Antonio, TX 78233. The owner, Robert Romero Jr., works one vehicle at a time. The site does not offer mobile detailing.

## What the site is for

Local search and bookings for five services:

- `/ceramic-coating`
- `/paint-correction`
- `/full-detailing`
- `/exterior-detailing`
- `/interior-detailing`

Supporting pages cover pricing, service areas (including 78233 and nearby cities whose drivers come to the studio), a blog, contact, and the legal pages. Ten percent of each sale is described as a gift to Junior Achievement of South Texas. A 20% non-refundable deposit of the quoted total holds an appointment.

## Stack

TanStack Start, React, and Vite. Content for long pages lives in `src/lib/content/pages.ts`. Routes in `src/routes` load that content. Business facts live in `src/lib/site.ts`. JSON-LD is built in `src/lib/seo.ts`.

## Run

```bash
npm run dev
```

The dev server listens on port 8080. `npm run typecheck` checks types. `npm run build` produces the production build.

## Public facts used on the site

- Phone: (210) 201-4847
- Email: contact@southernautodetailers.com
- Hours: Tuesday–Sunday 7:00 AM–11:00 PM, Monday closed
- Site: https://southernautodetailers.com
- Canonical URLs have no trailing slash
