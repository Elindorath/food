/**
 * LoadingSkeleton component types
 */

export type SkeletonType = 'text' | 'card' | 'circle' | 'rect';

export type LoadingSkeletonProps = {
  type?: SkeletonType;
  width?: number;
  height?: number;
  testID?: string;
};
