import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  badge: {
    marginTop: spacing[1],
  },
  content: {
    flex: 1,
  },
  instruction: {
    marginBottom: spacing[1],
  },
  duration: {
    color: '#6B7280',
  },
}));
