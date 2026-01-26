import { StyleSheet } from 'react-native-unistyles'

import { spacing } from '@/tokens/spacing/spacing'

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
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  button: {
    minWidth: 200,
  },
}))
