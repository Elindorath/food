/**
 * Card component types
 */

import type { ViewStyle, ViewProps } from 'react-native';

export type CardProps = ViewProps & {
  children: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
};
