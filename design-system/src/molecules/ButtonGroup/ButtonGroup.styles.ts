import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    flex: 1,
    minWidth: 100,
  },
  buttonSpacing: {
    marginLeft: spacing[2],
  },
}));
