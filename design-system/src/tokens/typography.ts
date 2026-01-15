/**
 * Design tokens for typography
 * Defines font sizes, weights, line heights, and letter spacing
 */

const fontFamily = {
  title: 'PlayfairDisplay',
  body: 'Inter',
} as const;

const fontSize = {
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
} as const;

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

const letterSpacing = {
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.25,
  wider: 0.5,
  widest: 1,
} as const;

export const typography = {
  h1: {
    fontFamily: fontFamily.title,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight, // 1.2
    letterSpacing: letterSpacing.tighter,
  },
  h2: {
    fontFamily: fontFamily.title,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight, // 1.25
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily: fontFamily.title,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: 1.3,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontFamily: fontFamily.title,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: 1.35,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontFamily: fontFamily.title,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: 1.4,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontFamily: fontFamily.title,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    lineHeight: 1.5,
    letterSpacing: letterSpacing.normal,
  },
  body: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: 1.5,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: 1.5,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: 1.4,
    letterSpacing: letterSpacing.wide,
  },
  label: {
    fontFamily: fontFamily.body,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: 1.4,
    letterSpacing: letterSpacing.normal,
  },
} as const;

export type Typography = typeof typography;
