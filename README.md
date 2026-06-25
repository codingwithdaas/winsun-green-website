# WinSun Green — Corporate Website

Production Next.js website for **WinSun Green Pvt. Ltd.**, built with the
App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Tech stack

- **Next.js 16** (App Router, static generation for every route)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme in `src/app/globals.css`)
- **Framer Motion** — scroll-in and hover animations throughout
- **Lucide React** — icon set

## Project structure

```
src/
  app/                  Route segments — one folder per page
    layout.tsx           Root layout: fonts, Navbar, Footer, global metadata
    page.tsx              Home
    about/, services/, projects/, clients/, safety/,
    resources/, careers/, contact/, privacy-policy/, terms-of-service/
    sitemap.ts, robots.ts
  components/
    layout/              Navbar, Footer
    sections/             Page-section blocks (Hero, TrustBand, ProjectsGrid, ...)
    ui/                   Small reusable primitives (Button, SectionHead, SpecTable, ...)
  data/                  All real company/services/projects/clients content,
                         typed and pulled directly from the WinSun brochure & profile deck
  lib/                  Shared Framer Motion variants + cn() helper
```

All page copy and stats live in `src/data/*.ts` — editing those files updates
every page that references them, with no JSX hunting required.

## Brand tokens

Colors were sampled directly (pixel-level) from the WinSun brochure rather
than guessed, and live in `src/app/globals.css`:

| Token | Hex | Source |
|---|---|---|
| `--green-500` | `#8AC04B` | Logo, headings, table headers, CTA pills |
| `--slate-900` | `#36434F` | Dark panels, wordmark text |
| `--gray-100` | `#EBF3F6` | Alternating table-row tint |

The signature **cut-corner card** (`.cut-corner` / `.cut-corner-sm` classes
in `globals.css`) is lifted from the brochure's cover design and reused
across hero imagery, the safety section, and CTA bands.

## Fonts

The layout currently loads **Manrope** (display/headings) and **Inter**
(body) via a `<link>` tag in `src/app/layout.tsx`, because the sandbox this
was built in has no network access to fonts.googleapis.com at build time.

On a machine/CI with normal internet access, switch to `next/font/google`
for self-hosted, zero-layout-shift fonts — instructions are in a comment
at the top of `layout.tsx`. It's a 5-line change.

## Before launch — content checklist

Every placeholder is intentional and easy to find:

- **Photos** — every `<PlaceholderImage label="..." />` marks a spot that
  needs a real photo (hero shots, project photos, team photos, safety
  photos). Search the codebase for `PlaceholderImage` to find all ~25 spots.
  Replace with `next/image` + a real asset from `/public`.
- **Client testimonials** (`/clients` page) — three placeholder quotes,
  clearly marked, ready for real client quotes.
- **Careers** — open roles list is illustrative; replace with live postings.
- **Resources** — download cards link to placeholder filenames; upload the
  real PDFs to `/public` and update `href`s.
- **Contact form / Application form** — currently client-side only (shows a
  success state on submit but doesn't send anywhere). Wire up to an email
  service, CRM, or API route (`src/app/api/.../route.ts`) before launch.
- **Google Maps embed** (`/contact`) — placeholder block; swap in a real
  embed or `<iframe>` once you have the office's verified map link.
- **Privacy Policy / Terms of Service** — placeholder legal copy; needs
  review by your legal counsel before launch.
- **Metadata** — `metadataBase` in `layout.tsx` assumes `https://www.winsun.co.in`;
  confirm before deploying.

## Deployment

Ready for Vercel: connect the repo and deploy with default settings (Next.js
is auto-detected). No environment variables are required for the current
feature set.
