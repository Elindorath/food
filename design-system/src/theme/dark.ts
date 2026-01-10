/**
 * Dark theme configuration
 */

import { colors } from '../tokens/colors';

export const darkTheme = {
  colors: {
    // Background colors
    background: colors.neutral[900],
    backgroundSecondary: colors.neutral[800],
    backgroundTertiary: colors.neutral[700],

    // Text colors
    text: colors.neutral[50],
    textSecondary: colors.neutral[300],
    textTertiary: colors.neutral[500],
    textInverse: colors.neutral[900],

    // Border colors
    border: colors.neutral[700],
    borderLight: colors.neutral[800],
    borderDark: colors.neutral[600],

    // Primary colors
    primary: colors.primary[400],
    primaryLight: colors.primary[300],
    primaryDark: colors.primary[500],
    primaryBackground: colors.primary[900],

    // Secondary colors
    secondary: colors.secondary[400],
    secondaryLight: colors.secondary[300],
    secondaryDark: colors.secondary[500],
    secondaryBackground: colors.secondary[900],

    // Semantic colors
    success: colors.success[400],
    successLight: colors.success[300],
    successBackground: colors.success[900],

    error: colors.error[400],
    errorLight: colors.error[300],
    errorBackground: colors.error[900],

    warning: colors.warning[400],
    warningLight: colors.warning[300],
    warningBackground: colors.warning[900],

    info: colors.info[400],
    infoLight: colors.info[300],
    infoBackground: colors.info[900],

    // Overlay
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
} as const;

export type DarkTheme = typeof darkTheme;
