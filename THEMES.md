# WiderLens Theme System

## Overview

The WiderLens website uses a centralized theme configuration to make future color changes straightforward. All brand colors are defined in a single source of truth and consumed by Tailwind CSS and CSS custom properties.

## Current Theme: A Little Rosey

Inspired by [Canva’s "A Little Rosey" palette](https://www.canva.com/colors/color-palettes/a-little-rosey/), the current theme uses soft, warm tones that feel professional yet approachable.

### Palette

| Role | Hex | Usage |
|------|-----|-------|
| **Primary** | `#355C7D` | Deep blue — main brand color, primary buttons, links, key accents |
| **Secondary** | `#6C5B7B` | Muted purple — gradients, secondary accents, icon backgrounds |
| **Accent** | `#C06C84` | Dusty rose — CTAs, primary action buttons, hover states |
| **Accent Hover** | `#A05068` | Darker dusty rose — button/link hover backgrounds |
| **Highlight** | `#F8B195` | Soft peach — hero highlights, glowing accents, emphasis text |
| **Pop** | `#F67280` | Rose pink — badges, special emphasis, promotional call-outs |
| **Dark** | `#2D2D2D` | Main dark text |
| **Light** | `#FFFAFA` | Very light rosey white — section backgrounds |

## Theme Architecture

### 1. TypeScript Source (`app/src/theme.ts`)

The root of the theme. Change hex values here to update the entire site.

```ts
export const theme = {
  colors: {
    primary: '#355C7D',
    secondary: '#6C5B7B',
    accent: '#C06C84',
    'accent-hover': '#A05068',
    highlight: '#F8B195',
    pop: '#F67280',
    // ...
  },
};
```

### 2. Tailwind Configuration (`app/tailwind.config.js`)

Brand colors are registered under `theme.extend.colors` as `brand-*` utilities:

- `text-brand-primary`
- `bg-brand-accent`
- `border-brand-highlight`
- `hover:bg-brand-accent-hover`

### 3. CSS Variables (`app/src/index.css`)

Legacy CSS custom properties bridge the theme for components that reference `var(--wider-blue)`, `var(--wider-red)`, etc. These variables now point to the current rosey palette:

- `--wider-blue` → `#355C7D`
- `--wider-blue-light` → `#6C5B7B`
- `--wider-red` → `#C06C84`
- `--wider-red-hover` → `#A05068`
- `--wider-highlight` → `#F8B195`

## How to Change the Theme

1. **Update `app/src/theme.ts`** with your new hex values.
2. **Update `app/tailwind.config.js`** if you add or rename brand colors.
3. **Update `app/src/index.css`** to keep CSS variables in sync.
4. Run `bun run build` to verify there are no broken references.
5. Commit and push.

> **Tip:** Avoid hardcoding hex values in new components. Always use `brand-*` Tailwind classes or the CSS custom properties above.
