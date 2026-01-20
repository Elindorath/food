/**
 * Button component - Interactive button
 */

import { Pressable } from 'react-native'

import { Text } from '@/atoms/Text/Text'
import { Spinner } from '@/atoms/Spinner/Spinner'

import { styles } from './Button.styles'

import type { TextVariant } from '@/atoms/Text/Text.types'

import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types'
import type { TextColor } from '@/theme/types'

const textVariantMap: { [key in ButtonSize]: TextVariant } = {
  small: 'bodySmall',
  medium: 'body',
  large: 'h5',
}

const textColorMap: { [key in ButtonVariant]: TextColor } = {
  primary: 'onAccent',
  secondary: 'onDefault',
  ghost: 'onDefault',
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onPress,
  ...props
}: ButtonProps) => {
  styles.useVariants({
    variant,
    size,
    fullWidth,
    isDisabled: disabled,
  })

  return (
    <Pressable
      {...props}
      style={({ pressed }) => styles.container({ pressed })}
      onPress={onPress}
      disabled={disabled || loading}
      role="button"
    >
      {loading ? (
        <Spinner size="small" />
      ) : (
        <Text variant={textVariantMap[size]} textColor={textColorMap[variant]}>{children}</Text>
      )}
    </Pressable>
  )
}
