import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    // Gap handled by marginBottom in step
  },
  step: {
    marginBottom: spacing[4],
  },
}));
