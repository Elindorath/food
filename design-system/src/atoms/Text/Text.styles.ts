import { StyleSheet } from 'react-native-unistyles'

import { typography } from '../../tokens/typography';

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  text: (color?: string) => ({
    ...(color !== undefined ? { color } : {}),
    variants: {
      variant: typography.variants,
    },
  }),
}))
