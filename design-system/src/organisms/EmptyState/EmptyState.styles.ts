import { createStyleSheet, spacing, colors } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[8],
  },
  icon: {
    marginBottom: spacing[4],
  },
  title: {
    marginBottom: spacing[2],
    textAlign: 'center',
  },
  message: {
    color: colors.neutral[600],
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  button: {
    minWidth: 200,
  },
}));
