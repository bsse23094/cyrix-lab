# Cyrix Lab - Brutalist Operational Systems

This repository contains the source code for the **Cyrix Lab** public website, a heavily stylized, brutalist portfolio for a boutique operational engineering agency.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Animations**: Custom CSS transforms with `cubic-bezier(0.16,1,0.3,1)` for heavy, mechanical snappiness.
- **Deployment**: GitHub Pages (via GitHub Actions)

## Design System: Brutalism
This project uses a highly opinionated brutalist aesthetic to convey an "expensive, rigid, and mechanical" feel.
- **Typography**: Inter (system default), heavily reliant on `font-black`, `uppercase`, and `tracking-tighter`.
- **Borders**: Stark `border-[4px] border-[#0e0e0e]` on almost all interactive elements and layout separators.
- **Interactions**: Removed soft hover fades. All interactive elements use a "clack-down" mechanic (e.g., `translate-x-[4px] translate-y-[4px] shadow-[0px_0px_0_#0e0e0e]`).
- **Colors**: 
  - Off-white base: `#efebe1`
  - Solid White: `#ffffff`
  - Deep Black: `#0e0e0e`
  - Alert Orange: `#e05d26`

## Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Pages Deployment
This site is configured for static export (`output: "export"`). It is automatically deployed to GitHub Pages via the `.github/workflows/nextjs.yml` GitHub Action whenever a push is made to the `main` branch.

> **Note**: Because this is a statically exported site on GitHub Pages, Next.js server-side API routes (like `/api/contact`) are not supported in production. Form handling must be routed to a third-party service (e.g., Formspree, EmailJS).
