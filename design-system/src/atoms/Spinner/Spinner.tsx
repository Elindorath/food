/**
 * Spinner component - Loading indicator
 */

import { ActivityIndicator } from 'react-native';
import type { SpinnerProps } from './Spinner.types';
import { colors } from '../../tokens/colors/colors';
import { styles } from './Spinner.styles';

export const Spinner = ({
  size = 'medium',
  color = colors.primary[600],
  ...props
}: SpinnerProps) => {
  styles.useVariants({
    size,
  })

  return (
    <ActivityIndicator
      size={size === 'small' ? 'small' : 'large'}
      color={color}
      style={styles.spinner}
      {...props}
    />
  );
};
