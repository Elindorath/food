import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing[4],
    paddingBottom: spacing[8],
  },
  actions: {
    marginTop: spacing[6],
  },
}));
