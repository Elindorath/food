/**
 * Divider component - Separator line
 */

import { View } from 'react-native'

import type { DividerProps } from './Divider.types'
import { colors } from '../../tokens/colors/colors'
import { styles } from './Divider.styles'

export const Divider = ({
  orientation = 'horizontal',
  color = colors.neutral[200],
  ...props
}: DividerProps) => {
  styles.useVariants({ orientation })

  return <View style={styles.container(color)} {...props} />
}
