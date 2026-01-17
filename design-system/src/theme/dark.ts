/**
 * Dark theme configuration
 */

import { colors } from '../tokens/colors';

export const darkTheme = {
  colors: {
    // Backgrounds (surfaces)
    background: {
      default: colors.neutral[900],   // Main screen background
      surface: colors.neutral[800],   // Cards, menus, search bars
      defaultStrong: colors.neutral[700],
      primary: colors.primary[900],   // "Health" or success sections
      primaryWeak: colors.primary[800],
      primaryStrong: colors.primary[900],
      accent: colors.secondary[900], // "Favorites" or inspirational sections
      accentWeak: colors.secondary[800],
      accentStrong: colors.secondary[900],
      success: colors.success[900],   // Discrete banners
      successWeak: colors.success[800],
      successStrong: colors.success[900],
      error: colors.error[900],
      errorWeak: colors.error[800],
      errorStrong: colors.error[900],
      warning: colors.warning[900],   // Warning text
      warningWeak: colors.warning[800],
      warningStrong: colors.warning[900],
      info: colors.info[900],         // Info text
      infoWeak: colors.info[800],
      infoStrong: colors.info[900],
    },

    // Borders (more subtle in dark mode)
    border: {
      subtle: colors.neutral[800],    // Very fine separators
      default: colors.neutral[700],   // Input borders
      active: colors.primary[400],    // Use a lighter level (400) to make it "shine"
      action: colors.secondary[400],
      error: colors.error[400],
      success: colors.success[400],
    },

    // Texts (Inversion of the Neutral scale)
    text: {
      primary: colors.neutral[50],    // Main text almost white (#F9FBF7)
      secondary: colors.neutral[400],  // Subtitles, metadata (#B2B9AB)
      tertiary: colors.neutral[600],   // Very subtle mentions
      onPrimary: colors.neutral[900],  // Black text on green button (for contrast)
      onSecondary: colors.neutral[900], // Black text on terracotta button
      success: colors.success[300],    // Use pastel tones for readability
      error: colors.error[300],
      warning: colors.warning[300],
      info: colors.info[300],
    },

    // Icons
    icon: {
      default: colors.neutral[200],    // Light icons
      secondary: colors.neutral[500],
      active: colors.primary[400],     // Lighter green
      heart: colors.secondary[400],    // Lighter terracotta
      success: colors.success[400],
      error: colors.error[400],
      warning: colors.warning[400],
      info: colors.info[400],
    },

    // Overlays
    overlay: {
      scrim: 'rgba(0, 0, 0, 0.6)',     // Darker to better separate modals
      image: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
      frost: 'rgba(45, 52, 54, 0.7)',  // Frost effect on Anthracite background
    },
  },
} as const;

export type DarkTheme = typeof darkTheme;
