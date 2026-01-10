/**
 * View component types
 */

import type { ViewStyle, ViewProps as RNViewProps } from 'react-native';

export type ViewProps = Omit<RNViewProps, 'style'> & {
  style?: ViewStyle | ViewStyle[];
  testID?: string;
};
