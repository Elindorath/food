/**
 * Badge component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { colors } from '../../tokens/colors'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: 'flex-start',
    borderRadius: spacing[2],
    variants: {
      color: {
        primary: {
          backgroundColor: theme.colors.primaryBackground,
          // backgroundColor: colors.primary[100],
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
}))
