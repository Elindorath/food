import { StyleSheet } from 'react-native-unistyles'

import { spacing } from '../../tokens/spacing/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    variants: {
      fullWidth: {
        true: {
          width: '100%',
        },
        false: {
          width: 'auto',
        },
      },
    },
  },
  button: {
    flex: 1,
    minWidth: 100,
    variants: {
      firstItem: {
        true: {
          marginLeft: 0,
        },
        false: {
          marginLeft: spacing[2],
        },
      },
    },
  },
}))
