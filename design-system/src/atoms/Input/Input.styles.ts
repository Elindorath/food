/**
 * Input component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { colors } from '../../tokens/colors/colors'
import { spacing } from '../../tokens/spacing'
import { typography } from '../../tokens/typography'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    marginBottom: spacing[4],
  },
  label: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: spacing[2],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    fontSize: typography.fontSize.base,
    color: colors.neutral[900],
    backgroundColor: '#FFFFFF',
    minHeight: 44,
    variants: {
      state: {
        focused: {
          borderColor: colors.primary[600],
        },
        error: {
          borderColor: colors.error[600],
        },
        disabled: {
          backgroundColor: colors.neutral[100],
          color: colors.neutral[500],
        },
      },
    },
  },
  errorText: {
    color: colors.error[600],
    fontSize: typography.fontSize.sm,
    marginTop: spacing[1],
  },
  helperText: {
    color: colors.neutral[600],
    fontSize: typography.fontSize.sm,
    marginTop: spacing[1],
  },
}));
