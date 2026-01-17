/**
 * Light theme configuration
 */

import { colors } from '../tokens/colors';

export const lightTheme = {
  colors: {
    // Backgrounds (surfaces)
    background: {
      default: colors.neutral[50], // Main screen background
      surface: colors.neutral[100], // Cards, search bars
      defaultStrong: colors.neutral[200],
      primary: colors.primary[500], // "Health" or success sections
      primaryWeak: colors.primary[400],
      primaryStrong: colors.primary[600],
      accent: colors.secondary[500], // "Favorites" or inspirational sections
      accentWeak: colors.secondary[400],
      accentStrong: colors.secondary[600],
      success: colors.success[100],
      successWeak: colors.success[50],
      successStrong: colors.success[200],
      error: colors.error[100],
      errorWeak: colors.error[50],
      errorStrong: colors.error[200],
      warning: colors.warning[100],
      warningWeak: colors.warning[50],
      warningStrong: colors.warning[200],
      info: colors.info[100],
      infoWeak: colors.info[50],
      infoStrong: colors.info[200],
    },

    // Borders
    border: {
      subtle: colors.neutral[200],   // Separators, card borders
      default: colors.neutral[300],  // Input borders, secondary buttons
      active: colors.primary[500],   // Focus, selection
      action: colors.secondary[500], // Focus on action buttons
      error: colors.error[500],
      success: colors.success[500],
    },

    // Texts
    text: {
      primary: colors.neutral[900],   // Main text titles and body
      secondary: colors.neutral[600], // Subtitles, reading time, dates
      tertiary: colors.neutral[400],  // Placeholders, legal mentions
      onPrimary: '#FFFFFF',           // Text on green buttons
      onSecondary: '#FFFFFF',         // Text on terracotta buttons (CTA)
      success: colors.success[700],   // Alert text (AA accessible)
      error: colors.error[700],       // Error text (AA accessible)
      warning: colors.warning[700],   // Warning text
      info: colors.info[700],         // Info text
    },

    // Icons
    icon: {
      default: colors.neutral[700],   // Standard icons (trash, settings)
      secondary: colors.neutral[500], // Purely decorative icons
      active: colors.primary[500],    // Active state icons
      heart: colors.secondary[500],   // Favorite icon (Terracotta)
      success: colors.success[500],
      error: colors.error[500],
      warning: colors.warning[500],
      info: colors.info[500],
    },

    // Overlays (Modals, tooltips, images)
    overlay: {
      scrim: 'rgba(45, 52, 54, 0.4)', // Modal background (Anthracite 900 at 40%)
      image: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)', // Text on white photo
      frost: 'rgba(249, 251, 247, 0.8)', // Frost effect on white broken background
    },
  },
} as const;

export type LightTheme = typeof lightTheme;
