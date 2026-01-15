/**
 * Badge component - Small label component
 */

import { View } from 'react-native'

import { Text } from '../Text/Text'
import type { BadgeProps } from './Badge.types'
import { styles } from './Badge.styles'

export const Badge = ({
  children,
  variant,
  size = 'medium',
}: BadgeProps) => {
  styles.useVariants({ color: variant, size })

  return (
    <View style={styles.container}>
      <Text variant="label">{children}</Text>
    </View>
  )
}
