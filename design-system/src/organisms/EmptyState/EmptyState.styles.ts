import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing'
import { colors } from '../../tokens/colors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[8],
  },
  icon: {
    marginBottom: spacing[4],
  },
  title: {
    marginBottom: spacing[2],
    textAlign: 'center',
  },
  message: {
    color: colors.neutral[600],
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  button: {
    minWidth: 200,
  },
}))
