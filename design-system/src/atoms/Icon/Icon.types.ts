/**
 * Icon component types
 */

import type { ViewStyle } from 'react-native';

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

export type IconProps = {
  name: string;
  size?: IconSize;
  color?: string;
  style?: ViewStyle;
  testID?: string;
};
