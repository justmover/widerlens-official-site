This is a React 19 + TypeScript + Vite single-page website for WiderLens, a Hong Kong professional eyewear and optometry service.

## Commands

Use `bun` as the package manager (fallback to `npm` only if `bun` fails).

- `bun run dev` — start Vite dev server
- `bun run build` — typecheck and build for production
- `bun run lint` — run ESLint

## Architecture

- All content is config-driven via `src/config.ts`. Sections automatically hide when their config objects are empty.
- UI components are in `src/components/ui/` (Radix-based, shadcn-style).
- Page sections are in `src/sections/`. Route pages are in `src/pages/`.
- The `@/` path alias maps to `./src`.
- Animations use GSAP + ScrollTrigger. Lenis provides smooth scrolling.

## Deployment

- The site deploys to GitHub Pages via `.github/workflows/deploy.yml`.
- Custom domain: `wider-lens.com` (configured via `app/public/CNAME`).
- Build base path is set to `/` for custom-domain root serving.
