/**
 * Text component types
 */

import type { TextStyle, TextProps as RNTextProps, StyleProp } from 'react-native';
import type { typography } from '../../tokens/typography';

export type TextVariant = keyof typeof typography.variants;

export type TextProps = Omit<RNTextProps, 'style'> & {
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
  color?: string;
  testID?: string;
};
