import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    minHeight: 56,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  title: {
    flex: 2,
    textAlign: 'center',
  },
  actionButton: {
    marginHorizontal: spacing[1],
  },
}));
