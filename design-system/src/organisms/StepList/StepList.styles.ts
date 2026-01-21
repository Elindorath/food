import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    // Gap handled by marginBottom in step
  },
  step: {
    marginBottom: spacing[4],
  },
}))
