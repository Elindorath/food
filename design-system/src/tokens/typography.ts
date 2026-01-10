/**
 * Design tokens for typography
 * Defines font sizes, weights, line heights, and letter spacing
 */

export const typography = {
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  // Letter spacing
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
    widest: 1,
  },
  // Typography variants
  variants: {
    h1: {
      fontSize: 36,
      fontWeight: '700' as const,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 30,
      fontWeight: '700' as const,
      lineHeight: 1.25,
      letterSpacing: -0.25,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.35,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 1.4,
      letterSpacing: 0.25,
    },
    label: {
      fontSize: 14,
      fontWeight: '500' as const,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
  },
} as const;

export type Typography = typeof typography;
