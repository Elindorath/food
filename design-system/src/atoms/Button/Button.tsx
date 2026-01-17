/**
 * Button component - Interactive button
 */

import { TouchableOpacity } from 'react-native'

import { Text } from '@/atoms/Text/Text'
import { Spinner } from '@/atoms/Spinner/Spinner'

import { styles } from './Button.styles'

import type { TextVariant } from '@/atoms/Text/Text.types'

import type { ButtonProps, ButtonSize } from './Button.types'

const textVariantMap: { [key in ButtonSize]: TextVariant } = {
  small: 'bodySmall',
  medium: 'body',
  large: 'h5',
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
  })

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <Spinner size="small" />
      ) : (
        <Text variant={textVariantMap[size]}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}
