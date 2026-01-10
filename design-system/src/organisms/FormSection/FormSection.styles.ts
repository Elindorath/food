import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    marginBottom: spacing[6],
  },
  title: {
    marginBottom: spacing[2],
  },
  divider: {
    marginBottom: spacing[4],
  },
  content: {
    // Gap handled by individual FormField margins
  },
}));
