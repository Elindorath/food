/**
 * Icon component
 */

import { colors } from '@/tokens/colors/colors';
import { icons } from '@/tokens/icons/icons';

import type { IconProps, IconSize } from './Icon.types';

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
  testID,
}: IconProps) => {
  const iconSize = sizeMap[size];

  const IconComponent = icons[name];

  return (
    <IconComponent
      color={color}
      size={iconSize}
      testID={testID}
    />
  );
};
