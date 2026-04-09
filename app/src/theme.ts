/**
 * WiderLens Theme Configuration
 *
 * Current theme: "A Little Rosey" — a soft, warm palette inspired by
 * https://www.canva.com/colors/color-palettes/a-little-rosey/
 *
 * To change themes in the future, update the hex values below and rebuild.
 * All Tailwind classes and CSS variables consume these values.
 */

export const theme = {
  colors: {
    // Core brand
    primary: '#355C7D',      // Deep blue — main brand color
    secondary: '#6C5B7B',    // Muted purple — gradients, secondary accents
    accent: '#C06C84',       // Dusty rose — CTAs, primary action buttons
    'accent-hover': '#A05068', // Darker dusty rose — hover states
    highlight: '#F8B195',    // Soft peach — highlights, hero text pops
    pop: '#F67280',          // Rose pink — badges, special emphasis

    // Neutrals
    dark: '#2D2D2D',
    'dark-secondary': '#1A1A1A',
    light: '#FFFAFA',
    'light-secondary': '#F8F9FA',
    white: '#FFFFFF',

    // Legacy aliases (kept for backward compatibility during migration)
    'forest-dark': '#0d1310',
    'forest-mid': '#1a2420',
    'forest-light': '#2a3a34',
    offwhite: '#f4f4f4',
    softblack: '#1a1a1a',
  },

  // HSL values for shadcn/ui CSS variables
  hsl: {
    primary: '207 40% 35%',
    'primary-foreground': '0 0% 100%',
    secondary: '288 17% 42%',
    'secondary-foreground': '0 0% 100%',
    accent: '343 35% 57%',
    'accent-foreground': '0 0% 100%',
    destructive: '343 35% 57%',
    'destructive-foreground': '0 0% 100%',
    muted: '0 20% 96%',
    'muted-foreground': '0 0% 45%',
    ring: '207 40% 35%',
  },
} as const;

export type ThemeColors = keyof typeof theme.colors;
