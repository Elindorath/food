import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing/spacing'
import { colors } from '../../tokens/colors/colors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  card: {
    marginBottom: spacing[4],
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: spacing[2],
    marginBottom: spacing[3],
  },
  content: {
    // Gap handled by individual element margins
  },
  title: {
    marginBottom: spacing[1],
  },
  description: {
    color: colors.neutral[600],
    marginBottom: spacing[2],
  },
  metadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing[2],
  },
  badge: {
    marginRight: spacing[2],
    marginBottom: spacing[1],
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginLeft: spacing[2],
  },
}))
