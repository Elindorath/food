import { StyleSheet } from 'react-native-unistyles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: (backgroundColor: string) => ({
    backgroundColor,
    variants: {
      orientation: {
        horizontal: {
          height: 1,
          width: '100%',
        },
        vertical: {
          width: 1,
          height: '100%',
        },
      },
    },
  }),
}))
