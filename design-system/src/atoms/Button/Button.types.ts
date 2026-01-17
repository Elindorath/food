/**
 * Button component types
 */

import type { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = Omit<PressableProps, 'style'> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
};
