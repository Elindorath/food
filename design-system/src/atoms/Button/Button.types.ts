/**
 * Button component types
 */

import type { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
};
