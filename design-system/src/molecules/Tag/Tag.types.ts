/**
 * Tag component types
 */

import type { BadgeProps } from '../../atoms/Badge/Badge.types';

export type TagProps = BadgeProps & {
  onPress?: () => void;
  selected?: boolean;
};
