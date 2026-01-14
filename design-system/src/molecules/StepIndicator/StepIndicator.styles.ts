import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
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
}))
