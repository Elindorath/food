/**
 * Badge component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { spacing } from '../../tokens/spacing/spacing'

export const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: 'flex-start',
    borderRadius: spacing[2],
    variants: {
      color: {
        primary: {
          backgroundColor: theme.colors.background.primary,
        },
        success: {
          backgroundColor: theme.colors.background.success,
        },
        error: {
          backgroundColor: theme.colors.background.error,
        },
        warning: {
          backgroundColor: theme.colors.background.warning,
        },
        info: {
          backgroundColor: theme.colors.background.info,
        },
      },
      size: {
        small: {
          paddingHorizontal: spacing[1],
          paddingVertical: spacing[1] / 2,
        },
        medium: {
          paddingHorizontal: spacing[2],
          paddingVertical: spacing[2] / 2,
        },
        large: {
          paddingHorizontal: spacing[3],
          paddingVertical: spacing[3] / 2,
        },
      },
    },
  },
}))
