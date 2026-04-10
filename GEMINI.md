# KING7 BOXCROSS Landing Page - Gemini CLI Guide

This document provides context and guidelines for interacting with the KING7 BOXCROSS landing page project.

## Project Overview
A mobile-first, high-performance landing page for **KING7 BOXCROSS**, a CrossFit Box in Barcelona, Venezuela (Estadio Las Casitas). The project emphasizes a bold, energetic aesthetic suitable for the fitness industry.

### Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS 4.0 (using `@theme` in CSS)
- **Language:** TypeScript
- **Deployment:** Vercel (optimized)

### Core Architecture
- `src/app/`: App Router setup, global layout, and styles.
- `src/components/`: Modular UI building blocks (Navbar, Hero, Benefits, Coach, Gallery, Pricing, etc.).
- `public/assets/`: Static assets (Images, Logos, Videos).

---

## Building and Running

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## Development Conventions

### Aesthetic & Styling
- **Palette:** Black (Primary), Yellow/Accent (Tailwind Yellow 400 - `#facc15`), and White (Support).
- **Typography:** Bold, black, italic, uppercase headings (CrossFit style).
- **Component Pattern:** Use `src/components/Section.tsx` as a wrapper for all major sections to ensure consistent padding and max-width.
- **Mobile-First:** Prioritize mobile layouts, utilizing the `StickyCTA` and `WhatsAppButton` for conversion.

### Code Style
- **TypeScript:** Strict typing for all components and props.
- **Functional Components:** Use standard React functional components with `interface` for props.
- **Imports:** Use absolute imports with `@/` prefix (e.g., `@/components/Section`).
- **Optimization:** Utilize `next/image` for images and `next/font` for performance.

### Navigation
- In-page anchor links are used for smooth scrolling. Ensure IDs in `Section` components match those in the `Navbar`.

---

## Key Files
- `src/app/page.tsx`: Main entry point assembling all sections.
- `src/app/globals.css`: Tailwind 4.0 theme configuration and global styles.
- `src/components/Section.tsx`: Reusable layout wrapper for landing page sections.
