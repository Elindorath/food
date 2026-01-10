import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  name: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  quantity: {
    fontWeight: '600',
  },
  unit: {
    color: '#6B7280',
  },
}));
