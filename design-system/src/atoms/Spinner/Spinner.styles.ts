import { StyleSheet } from 'react-native-unistyles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  spinner: {
    variants: {
      size: {
        small: {
          width: 20,
          height: 20,
        },
        medium: {
          width: 32,
          height: 32,
        },
        large: {
          width: 48,
          height: 48,
        },
      },
    },
  },
}))
