/**
 * Button component - Interactive button
 */

import { TouchableOpacity } from 'react-native';
import type { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.styles';
import { Text } from '../Text/Text';
import { Spinner } from '../Spinner/Spinner';
import { createStyleSheet } from '../../unistyles';

const fullWidthStyle = createStyleSheet(() => ({
  fullWidth: {
    width: '100%',
  },
}));

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  style,
  textStyle,
  onPress,
  ...props
}: ButtonProps) => {
  const styles = getButtonStyles(variant, size, disabled || loading);
  const spinnerColor = typeof styles.text.color === 'string' ? styles.text.color : undefined;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        fullWidth && fullWidthStyle.fullWidth,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <Spinner size="small" color={spinnerColor} />
      ) : (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};
