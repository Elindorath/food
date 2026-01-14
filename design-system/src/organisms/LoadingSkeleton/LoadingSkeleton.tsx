/**
 * LoadingSkeleton component - Skeleton loaders pour différents contenus
 */

import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import type { LoadingSkeletonProps } from './LoadingSkeleton.types';
import { styles } from './LoadingSkeleton.styles';

export const LoadingSkeleton = ({
  type = 'rect',
  width,
  height,
  ...props
}: LoadingSkeletonProps) => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  styles.useVariants({
    type,
  })

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

  return (
    <Animated.View
      style={[
        styles.container(width, height),
        { opacity: fadeAnim },
      ]}
      {...props}
    />
  );
};
