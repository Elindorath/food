/**
 * Button component types
 */

import type { ViewStyle, TextStyle, TouchableOpacityProps, StyleProp } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
};
