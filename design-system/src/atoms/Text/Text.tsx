/**
 * Text component - Typography component with variants
 */

import { Text as RNText } from 'react-native';
import type { TextStyle } from 'react-native';
import type { TextProps } from './Text.types';
import { typography } from '../../tokens/typography';

export const Text = ({
  variant = 'body',
  style,
  color,
  children,
  ...props
}: TextProps) => {
  const variantStyles = typography.variants[variant];
  const textStyle: TextStyle = {
    ...variantStyles,
    ...(color !== undefined ? { color } : {}),
  };

  return (
    <RNText style={[textStyle, style]} {...props}>
      {children}
    </RNText>
  );
};
