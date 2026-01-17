/**
 * Button component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { colors } from '../../tokens/colors'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      variant: {
        primary: {
          backgroundColor: colors.primary[600],
          borderWidth: 0,
          borderColor: 'transparent',
          opacity: 1,
        },
        secondary: {
          backgroundColor: colors.secondary[600],
          borderWidth: 0,
          borderColor: 'transparent',
          opacity: 1,
        },
        tertiary: {
          backgroundColor: colors.neutral[200],
          borderWidth: 0,
          borderColor: 'transparent',
          opacity: 1,
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.primary[600],
          opacity: 1,
        },
        disabled: {
          backgroundColor: colors.neutral[300],
          borderWidth: 0,
          borderColor: 'transparent',
          opacity: 0.5,
        },
      },
      size: {
        small: {
          paddingHorizontal: spacing[2],
          paddingVertical: spacing[2] / 2,
          minHeight: 32,
        },
        medium: {
          paddingHorizontal: spacing[3],
          paddingVertical: spacing[3] / 2,
          minHeight: 44,
        },
        large: {
          paddingHorizontal: spacing[4],
          paddingVertical: spacing[4] / 2,
          minHeight: 52,
        },
      },
      fullWidth: {
        true: {
          width: '100%',
        },
        false: {
          width: 'auto',
        },
      },
    },
  },
}))
