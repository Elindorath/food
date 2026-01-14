import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
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
}))
