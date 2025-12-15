# VetFlow AI Landing Page

Production-ready landing page for VetFlow AI — an AI receptionist for veterinary clinics.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Validation**: Zod
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts        # Lead capture API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with SEO
│   └── page.tsx                # Main landing page
├── components/
│   ├── Navigation.tsx          # Sticky nav + mobile drawer
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── Problem.tsx             # Pain points (3 cards)
│   ├── Features.tsx            # Features (6 cards)
│   ├── HowItWorks.tsx          # 4-step process
│   ├── Integrations.tsx        # Supported platforms
│   ├── Safety.tsx              # Safety & compliance
│   ├── Proof.tsx               # Before/After case study
│   ├── Pricing.tsx             # 3 pricing tiers
│   ├── FAQ.tsx                 # FAQ accordion
│   ├── LeadForm.tsx            # Lead capture form
│   ├── FinalCTA.tsx            # Final CTA section
│   └── Footer.tsx              # Footer
├── lib/
│   ├── config.ts               # Site configuration
│   └── validation.ts           # Zod schemas
└── public/
    └── logo.svg                # VetFlow AI logo
```

## Environment Variables

No environment variables are required for basic functionality.

For production, you may want to configure:

```env
# Optional: Analytics, error tracking, etc.
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Features

- ✅ Mobile-first responsive design
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu with drawer
- ✅ Lead capture form with validation
- ✅ Honeypot spam protection
- ✅ SEO optimized (meta tags, OpenGraph, Twitter cards)
- ✅ JSON-LD structured data
- ✅ Lighthouse-friendly
- ✅ No external UI dependencies

## Customization

### Brand Name

Update `lib/config.ts` to change the brand name and other site-wide settings:

```typescript
export const siteConfig = {
  name: "VetFlow AI",  // Change this
  tagline: "...",
  email: "hello@vetflow.ai",
  // ...
};
```

### Colors

The accent color (teal) is used throughout. To change it, update:
- `app/globals.css` (CSS variables)
- Component files (Tailwind classes like `bg-teal-600`)

## Lead Capture

The lead form submits to `/api/lead` which:
1. Validates data with Zod
2. Checks honeypot field for spam
3. Stores leads in memory (development)
4. Logs leads to console

For production, integrate with your CRM, database, or email service.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

Private - All rights reserved.
