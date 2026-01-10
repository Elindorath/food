/**
 * Spinner component types
 */

import type { ViewStyle } from 'react-native';

export type SpinnerSize = 'small' | 'medium' | 'large';

export type SpinnerProps = {
  size?: SpinnerSize;
  color?: string;
  style?: ViewStyle;
  testID?: string;
};
