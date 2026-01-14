import { StyleSheet } from 'react-native-unistyles'
import { colors } from '../../tokens/colors'
import { spacing } from '../../tokens/spacing'

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  container: (width?: number, height?: number) => {
    const size = width ?? height ?? 40;

    return {
      backgroundColor: colors.neutral[200],
      borderRadius: spacing[1],
      variants: {
        type: {
          text: {
            width: width ?? '100%',
            height: height ?? 16,
          },
          card: {
            width: width ?? '100%',
            height: height ?? 200,
            borderRadius: spacing[3],
          },
          circle: {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          rect: {
            width: width ?? '100%',
            height: height ?? 100,
          },
        },
      },
    }
  },
}))
