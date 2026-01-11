/**
 * View component - Base container component
 */

import { View as RNView } from 'react-native'

import type { ViewProps } from './View.types'
import { styles } from './View.styles'

export const View = ({ children, ...props }: ViewProps) => {
  return (
    <RNView style={styles.default} {...props}>
      {children}
    </RNView>
  )
}
