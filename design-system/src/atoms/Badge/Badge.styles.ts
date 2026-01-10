/**
 * Badge component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { colors } from '../../tokens/colors'
import { spacing } from '../../tokens/spacing'
import { typography } from '../../tokens/typography'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: 'flex-start',
    borderRadius: spacing[2],
    variants: {
      color: {
        default: {
          backgroundColor: colors.neutral[200],
        },
        primary: {
          backgroundColor: colors.primary[100],
        },
        success: {
          backgroundColor: colors.success[100],
        },
        error: {
          backgroundColor: colors.error[100],
        },
        warning: {
          backgroundColor: colors.warning[100],
        },
        info: {
          backgroundColor: colors.info[100],
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
  text: {
    fontWeight: typography.fontWeight.medium,
    variants: {
      color: {
        default: {
          color: colors.neutral[800],
        },
        primary: {
          color: colors.primary[700],
        },
        success: {
          color: colors.success[700],
        },
        error: {
          color: colors.error[700],
        },
        warning: {
          color: colors.warning[700],
        },
        info: {
          color: colors.info[700],
        },
      },
      size: {
        small: {
          fontSize: typography.fontSize.xs,
        },
        medium: {
          fontSize: typography.fontSize.sm,
        },
        large: {
          fontSize: typography.fontSize.base,
        },
      },
    },
  },
}))
