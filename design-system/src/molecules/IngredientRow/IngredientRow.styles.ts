import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
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
}))
