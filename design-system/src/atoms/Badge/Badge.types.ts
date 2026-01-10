/**
 * Badge component types
 */

import type { ViewStyle, TextStyle } from 'react-native';

export type BadgeVariant = 'primary' | 'success' | 'error' | 'warning' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
};
