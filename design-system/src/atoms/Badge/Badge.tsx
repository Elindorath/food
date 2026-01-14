/**
 * Badge component - Small label component
 */

import { View } from '../View/View';
import { Text } from '../Text/Text';
import type { BadgeProps } from './Badge.types';
import { styles } from './Badge.styles';

export const Badge = ({
  children,
  variant,
  size = 'medium',
  ...props
}: BadgeProps) => {
  styles.useVariants({ color: variant, size });

  return (
    <View style={styles.container} {...props}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
