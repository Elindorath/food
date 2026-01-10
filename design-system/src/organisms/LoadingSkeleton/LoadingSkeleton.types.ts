/**
 * LoadingSkeleton component types
 */

import type { ViewStyle } from 'react-native';

export type SkeletonType = 'text' | 'card' | 'circle' | 'rect';

export type LoadingSkeletonProps = {
  type?: SkeletonType;
  width?: number | string;
  height?: number;
  style?: ViewStyle;
  testID?: string;
};
