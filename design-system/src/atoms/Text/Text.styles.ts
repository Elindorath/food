import { StyleSheet } from 'react-native-unistyles'

import { typography } from '@/tokens/typography/typography';
import type { TextColor } from '@/theme/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use colors from theme
export const styles = StyleSheet.create((theme) => ({
  text: (textColor?: TextColor) => ({
    ...(textColor !== undefined ? { color: theme.colors.text[textColor] } : {}),
    variants: {
      variant: {
        h1: {
          ...typography.h1,
          _web: {
            lineHeight: `${typography.h1.lineHeight}`,
          },
        },
        h2: {
          ...typography.h2,
          _web: {
            lineHeight: `${typography.h2.lineHeight}`,
          },
        },
        h3: {
          ...typography.h3,
          _web: {
            lineHeight: `${typography.h3.lineHeight}`,
          },
        },
        h4: {
          ...typography.h4,
          _web: {
            lineHeight: `${typography.h4.lineHeight}`,
          },
        },
        h5: {
          ...typography.h5,
          _web: {
            lineHeight: `${typography.h5.lineHeight}`,
          },
        },
        h6: {
          ...typography.h6,
          _web: {
            lineHeight: `${typography.h6.lineHeight}`,
          },
        },
        body: {
          ...typography.body,
          _web: {
            lineHeight: `${typography.body.lineHeight}`,
          },
        },
        bodySmall: {
          ...typography.bodySmall,
          _web: {
            lineHeight: `${typography.bodySmall.lineHeight}`,
          },
        },
        caption: {
          ...typography.caption,
          _web: {
            lineHeight: `${typography.caption.lineHeight}`,
          },
        },
        label: {
          ...typography.label,
          _web: {
            lineHeight: `${typography.label.lineHeight}`,
          },
        },
      },
    },
  }),
}))
