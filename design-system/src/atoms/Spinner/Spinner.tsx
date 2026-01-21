/**
 * Spinner component - Loading indicator
 */

import { ActivityIndicator } from 'react-native'

import { colors } from '@/tokens/colors/colors'

import { styles } from './Spinner.styles'

import type { SpinnerProps } from './Spinner.types'

export const Spinner = ({
  size = 'medium',
  color = colors.primary[600],
  ...props
}: SpinnerProps) => {
  styles.useVariants({
    size,
  })

  return (
    <ActivityIndicator
      size={size === 'small' ? 'small' : 'large'}
      color={color}
      style={styles.spinner}
      {...props}
    />
  )
}
