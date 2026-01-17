/**
 * Design tokens for colors
 * Defines the color palette for the application
 */

/*
Palette
#87A382
#E49079
#F9FBF7
#2D3436
*/

export const colors = {
  // Primary colors
  primary: {
    50: '#F3F6F2', // Very light backgrounds, success alerts.
    100: '#E8F0E6', // Badge backgrounds, hover on light elements.
    200: '#D1E1CE', // Light borders, colored separators.
    300: '#B9D1B6', // Secondary icons, illustrations.
    400: '#A0C29E', // Decorative elements.
    500: '#87A382', // Your main brand color.
    600: '#6B8268', // Hover state of primary elements.
    700: '#4F614E', // Text on light background (AA Accessibility).
    800: '#333F32', // Text on very light background (AAA Accessibility).
    900: '#181E18', // Darkest shades for contrast.
  },
  // Secondary colors
  secondary: {
    50: '#FDF4F2', // Notification background, subtle highlight.
    100: '#FAE9E4', // "Favorite" badge, light hover.
    200: '#F6D3C9', // Interaction borders.
    300: '#F1BDAD', // Gradients, illustrations.
    400: '#EAA793', // Secondary buttons.
    500: '#E49079', // Your main action button (CTA).
    600: '#B67361', // Button hover state.
    700: '#895649', // Action text on white background.
    800: '#5B3A30', // Pressed state or very dark text.
    900: '#2D1D18', // Maximum contrast details.
  },
  // Semantic colors
  success: {
    50: '#F3F6F2', // "Recipe saved" banner background.
    100: '#E8F0E6', // "Healthy" or "Organic" badge background.
    200: '#D1E1CE', // Light success border.
    300: '#B9D1B6', // Secondary validation icons.
    400: '#A0C29E', // –
    500: '#87A382', // Check icon, validated step.
    600: '#6B8268', // Hover state on success elements.
    700: '#4F614E', // Success text on light background.
    800: '#333F32', // Success text (High contrast).
    900: '#181E18', // Dark text on green 50 background.
  },
  error: {
    50: '#FEF5F5', // Invalid form field background.
    100: '#FDE8E7', // "Missing ingredient" alert background.
    200: '#FAD1D0', // Error border.
    300: '#F6A9A6', // –
    400: '#EE817C', // –
    500: '#E25A53', // "Delete" button, error icon.
    600: '#BD4B46', // Hover on critical button.
    700: '#973C38', // Error text (AA Accessibility).
    800: '#712D2A', // Error text (AAA Accessibility).
    900: '#4C1D1C', // Dark text on red alert.
  },
  warning: {
    50: '#FFF9F2', // Soft warning background.
    100: '#FFF2E3', // "Allergens" badge background.
    200: '#FFE2C2', // Warning border.
    300: '#FFCD99', // –
    400: '#F9B77E', // –
    500: '#F4A261', // "Attention" icon, timer almost finished.
    600: '#CC8751', // Hover on attention elements.
    700: '#A46C41', // Warning text on light background.
    800: '#7B5131', // –
    900: '#523621', // Dark text on ochre alert.
  },
  info: {
    50: '#F4F9FB', // "Chef's tip" bubble background.
    100: '#E9F3F7', // Neutral information background.
    200: '#D3E6F0', // Information border.
    300: '#A9CDE1', // –
    400: '#7EB4D1', // –
    500: '#6096BA', // "Did you know?" icon, Nutrition info.
    600: '#507D9B', // Hover on information links.
    700: '#40647D', // Info text on light background.
    800: '#304B5E', // –
    900: '#20323E', // Dark text on blue alert.
  },
  // Neutral colors
  neutral: {
    50: '#F9FBF7', // Your main application background.
    100: '#F2F4EE', // Card backgrounds, search bars.
    200: '#E5E9DF', // Card borders, dividers.
    300: '#D0D6C9', // Form borders (input).
    400: '#B2B9AB', // Disabled icons, placeholder text.
    500: '#939C8E', // Caption text, secondary metadata.
    600: '#747B70', // Secondary text (e.g., reading time).
    700: '#555A52', // Readable text on light background.
    800: '#363A35', // Important subtitles.
    900: '#2D3436', // Your main text (Anthracite).
  },
} as const;

export type ColorPalette = typeof colors;

export const textColors = {
  primary: colors.neutral[900],
  secondary: colors.neutral[700],
  tertiary: colors.neutral[500],
  inverse: colors.neutral[50],
} as const;

export type TextColor = typeof textColors;

export const borderColors = {
  primary: colors.primary[600],
  secondary: colors.secondary[600],
  tertiary: colors.neutral[300],
  inverse: colors.neutral[900],
} as const;

export type BorderColor = typeof borderColors;

export const backgroundColors = {
  primary: colors.primary[50],
  secondary: colors.secondary[50],
  tertiary: colors.neutral[100],
  inverse: colors.neutral[900],
} as const;

export type BackgroundColor = typeof backgroundColors;
