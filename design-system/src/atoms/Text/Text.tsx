/**
 * Text component - Typography component with variants
 */

import { Text as RNText } from 'react-native';
import type { TextProps } from './Text.types';
import { styles } from './Text.styles';

export const Text = ({
  variant = 'body',
  color,
  children,
  ...props
}: TextProps) => {
  styles.useVariants({
    variant,
  })

  return (
    <RNText style={styles.text(color)} {...props}>
      {children}
    </RNText>
  );
};
