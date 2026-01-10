import { createStyleSheet, spacing } from '../../unistyles';

export const styles = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
  listContent: {
    padding: spacing[4],
  },
  loadingContainer: {
    padding: spacing[4],
  },
  skeleton: {
    marginBottom: spacing[4],
  },
}));
