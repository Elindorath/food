/**
 * Spinner component - Loading indicator
 */

import { ActivityIndicator } from 'react-native';
import type { SpinnerProps, SpinnerSize } from './Spinner.types';
import { colors } from '../../tokens/colors';

const sizeMap: { [key in SpinnerSize]: number } = {
  small: 20,
  medium: 32,
  large: 48,
};

export const Spinner = ({
  size = 'medium',
  color = colors.primary[600],
  style,
  ...props
}: SpinnerProps) => {
  return (
    <ActivityIndicator
      size={size === 'small' ? 'small' : 'large'}
      color={color}
      style={[{ width: sizeMap[size], height: sizeMap[size] }, style]}
      {...props}
    />
  );
};
