/**
 * Icon component types
 */

import type { IconName } from '@/tokens/icons/icons';

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

export type IconProps = {
  name: IconName;
  size?: IconSize;
  color?: string;
  testID?: string;
};
