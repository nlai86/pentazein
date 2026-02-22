# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pentazein is a B2B landing page for a garment manufacturing company, built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Commands

- **Dev server:** `npm run dev` (runs on http://localhost:8080)
- **Build:** `npm run build` (TypeScript compile + Vite build)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (ESLint)
- **Run all tests:** `npm run test`
- **Run single test:** `npx vitest run src/path/to/file.test.ts`
- **Run tests in watch mode:** `npx vitest src/path/to/file.test.ts`

## Architecture

### App Structure
`App.tsx` sets up providers (React Query, TooltipProvider, Toaster, Sonner) and BrowserRouter routing. The single page (`Index.tsx`) composes section components: Header, HeroSection, AboutSection, ProductsSection, ContactSection, Footer. Navigation uses anchor links (#home, #products, #about, #contact).

### Component Organization
- `src/components/` — Page section components (Header, HeroSection, etc.)
- `src/components/ui/` — ~50 shadcn/ui primitives (do not manually edit; managed via shadcn CLI)
- `src/hooks/` — Custom hooks (useIsMobile, useToast)
- `src/lib/utils.ts` — `cn()` helper for Tailwind class merging
- `src/pages/` — Route-level page components

### Styling

Tailwind CSS with a custom brand palette defined via CSS variables in `src/index.css`. Key design tokens:
- **Primary:** Dark teal (160 35% 12%)
- **Brand/Accent:** Green (145 45% 38%)
- **Fonts:** Outfit (headings), Work Sans (body)
- **Border radius:** 0.25rem

Custom utility classes defined in `index.css`: `.section-padding`, `.container-max`, `.text-gradient-brand`, `.bg-hero`, `.bg-section-dark`, `.brand-line`, `.brand-line-long`.

### Path Aliases
`@/*` maps to `src/*` (configured in tsconfig and vite.config.ts).

### Testing
Vitest with jsdom, React Testing Library. Test setup in `src/test/setup.ts`. Tests go alongside source or in `src/test/`. Pattern: `*.{test,spec}.{ts,tsx}`.
