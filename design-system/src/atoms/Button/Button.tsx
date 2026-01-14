/**
 * Button component - Interactive button
 */

import { TouchableOpacity } from 'react-native';
import type { ButtonProps } from './Button.types';
import { Text } from '../Text/Text';
import { Spinner } from '../Spinner/Spinner';
import { styles } from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  onPress,
  ...props
}: ButtonProps) => {
  styles.useVariants({
    variant,
    size,
    fullWidth,
  })

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <Spinner size="small" />
      ) : (
        <Text variant="body">{children}</Text>
      )}
    </TouchableOpacity>
  );
};
