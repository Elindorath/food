/**
 * Input component styles
 */

import { createStyleSheet, spacing, typography, colors } from '../../unistyles';

export const inputStyles = createStyleSheet(() => ({
  container: {
    marginBottom: spacing[4],
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
  },
  inputFocused: {
    borderColor: colors.primary[600],
  },
  inputError: {
    borderColor: colors.error[600],
  },
  inputDisabled: {
    backgroundColor: colors.neutral[100],
    color: colors.neutral[500],
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
