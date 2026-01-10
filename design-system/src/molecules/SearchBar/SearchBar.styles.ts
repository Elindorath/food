import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    paddingRight: spacing[10],
  },
  iconContainer: {
    position: 'absolute',
    right: spacing[3],
    padding: spacing[1],
  },
}));
