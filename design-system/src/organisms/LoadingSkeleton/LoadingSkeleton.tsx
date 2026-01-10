/**
 * LoadingSkeleton component - Skeleton loaders pour différents contenus
 */

import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import type { LoadingSkeletonProps, SkeletonType } from './LoadingSkeleton.types';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';

const getSkeletonStyle = (type: SkeletonType, width?: number | string, height?: number): ViewStyle => {
  const baseStyle: ViewStyle = {
    backgroundColor: colors.neutral[200],
    borderRadius: spacing[1],
  };

  switch (type) {
    case 'text':
      return {
        ...baseStyle,
        width: width ?? '100%',
        height: height ?? 16,
      };
    case 'card':
      return {
        ...baseStyle,
        width: width ?? '100%',
        height: height ?? 200,
        borderRadius: spacing[3],
      };

    case 'circle': {
      const size = typeof width === 'number' ? width : height ?? 40;

      return {
        ...baseStyle,
        width: size,
        height: size,
        borderRadius: size / 2,
      };
    }

    case 'rect':
    default:
      return {
        ...baseStyle,
        width: width ?? '100%',
        height: height ?? 100,
      };
  }
};

export const LoadingSkeleton = ({
  type = 'rect',
  width,
  height,
  style,
  ...props
}: LoadingSkeletonProps) => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => { animation.stop(); };
  }, [fadeAnim]);

  const skeletonStyle = getSkeletonStyle(type, width, height);

  return (
    <Animated.View
      style={[
        skeletonStyle,
        { opacity: fadeAnim },
        style,
      ]}
      {...props}
    />
  );
};
