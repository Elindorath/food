import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
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
}))
