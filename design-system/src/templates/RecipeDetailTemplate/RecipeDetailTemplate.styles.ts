import { StyleSheet } from 'react-native-unistyles'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: spacing[8],
  },
  image: {
    width: '100%',
    height: 300,
  },
  infoSection: {
    padding: spacing[4],
  },
  title: {
    marginBottom: spacing[2],
  },
  description: {
    marginBottom: spacing[4],
  },
  metadataCard: {
    marginTop: spacing[2],
  },
  divider: {
    marginVertical: spacing[4],
  },
  section: {
    paddingHorizontal: spacing[4],
  },
  sectionTitle: {
    marginBottom: spacing[4],
  },
}))
