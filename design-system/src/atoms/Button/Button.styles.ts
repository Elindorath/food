/**
 * Button component styles
 */

import { StyleSheet } from 'react-native-unistyles'

import { spacing } from '../../tokens/spacing/spacing'

export const styles = StyleSheet.create((theme) => ({
  container: ({ pressed }: { pressed: boolean }) => ({
    borderRadius: spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
    _web: {
      cursor: 'pointer',
    },
    variants: {
      variant: {
        primary: {
          backgroundColor: pressed ? theme.colors.background.accentStrong : theme.colors.background.accent,
          borderWidth: 1,
          borderColor: 'transparent',
          opacity: 1,
          _web: {
            _hover: {
              backgroundColor: theme.colors.background.accentWeak,
            },
            _active: {
              backgroundColor: theme.colors.background.accentStrong,
            },
            _disabled: {
              backgroundColor: theme.colors.background.default,
            },
          },
        },
        secondary: {
          backgroundColor: pressed ? theme.colors.background.defaultStrong : theme.colors.background.default,
          borderWidth: 1,
          borderColor: theme.colors.border.default,
          opacity: 1,
          _web: {
            _hover: {
              backgroundColor: theme.colors.background.surface,
            },
            _active: {
              backgroundColor: theme.colors.background.defaultStrong,
            },
          },
        },
        ghost: {
          borderWidth: 0,
          borderColor: 'transparent',
          opacity: 1,
        },
      },
      size: {
        small: {
          paddingHorizontal: spacing[2],
          paddingVertical: spacing[2] / 2,
          minHeight: 32,
        },
        medium: {
          paddingHorizontal: spacing[3],
          paddingVertical: spacing[3] / 2,
          minHeight: 44,
        },
        large: {
          paddingHorizontal: spacing[4],
          paddingVertical: spacing[4] / 2,
          minHeight: 52,
        },
      },
      fullWidth: {
        true: {
          width: '100%',
        },
        false: {
          width: 'auto',
        },
      },
      isDisabled: {
        true: {},
        false: {},
      },
    },
    // compoundVariants: [
    //   {
    //     isDisabled: true,
    //     variant: 'primary',
    //     styles: {
    //       backgroundColor: theme.colors.background.default,
    //     },
    //   },
    //   {
    //     isDisabled: true,
    //     variant: 'secondary',
    //     styles: {
    //       backgroundColor: theme.colors.background.default,
    //     },
    //   },
    //   {
    //     isDisabled: true,
    //     variant: 'ghost',
    //     styles: {
    //       backgroundColor: theme.colors.background.default,
    //     },
    //   },
    // ],
  }),
}))
