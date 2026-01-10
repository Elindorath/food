/**
 * Icon component - SVG icon wrapper
 *
 * Note: This is a placeholder component. In a real application,
 * you would integrate with an icon library like react-native-svg
 * or @expo/vector-icons
 */

import { View } from 'react-native';
import type { IconProps, IconSize } from './Icon.types';
import { colors } from '../../tokens/colors';
import { styles } from './Icon.styles';

const sizeMap: { [key in IconSize]: number } = {
  small: 16,
  medium: 24,
  large: 32,
  xlarge: 48,
};

export const Icon = ({
  name,
  size = 'medium',
  color = colors.neutral[900],
  style,
  ...props
}: IconProps) => {
  // Placeholder implementation
  // In production, replace with actual icon rendering
  const iconSize = sizeMap[size];

  return (
    <View
      style={[styles.icon, { width: iconSize, height: iconSize, backgroundColor: color }, style]}
      {...props}
    />
  );
};
