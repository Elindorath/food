/**
 * Header component types
 */

import type { ViewStyle } from 'react-native';

export type HeaderAction = {
  label?: string;
  icon?: string;
  onPress: () => void;
};

export type HeaderProps = {
  title: string;
  leftActions?: HeaderAction[];
  rightActions?: HeaderAction[];
  style?: ViewStyle;
  testID?: string;
};
