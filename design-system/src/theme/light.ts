/**
 * Light theme configuration
 */

import { colors } from '../tokens/colors';

export const lightTheme = {
  colors: {
    // Background colors
    background: colors.neutral[50],
    backgroundSecondary: '#FFFFFF',
    backgroundTertiary: colors.neutral[100],

    // Text colors
    text: colors.neutral[900],
    textSecondary: colors.neutral[700],
    textTertiary: colors.neutral[500],
    textInverse: '#FFFFFF',

    // Border colors
    border: colors.neutral[200],
    borderLight: colors.neutral[100],
    borderDark: colors.neutral[300],

    // Primary colors
    primary: colors.primary[600],
    primaryLight: colors.primary[500],
    primaryDark: colors.primary[700],
    primaryBackground: colors.primary[50],

    // Secondary colors
    secondary: colors.secondary[600],
    secondaryLight: colors.secondary[500],
    secondaryDark: colors.secondary[700],
    secondaryBackground: colors.secondary[50],

    // Semantic colors
    success: colors.success[600],
    successLight: colors.success[500],
    successBackground: colors.success[50],

    error: colors.error[600],
    errorLight: colors.error[500],
    errorBackground: colors.error[50],

    warning: colors.warning[600],
    warningLight: colors.warning[500],
    warningBackground: colors.warning[50],

    info: colors.info[600],
    infoLight: colors.info[500],
    infoBackground: colors.info[50],

    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
} as const;

export type LightTheme = typeof lightTheme;
