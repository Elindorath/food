/**
 * Text component types
 */

import type { TextProps as RNTextProps } from 'react-native';
import type { typography } from '../../tokens/typography';

export type TextVariant = keyof typeof typography.variants;

export type TextProps = Omit<RNTextProps, 'style'> & {
  variant?: TextVariant;
  color?: string;
  testID?: string;
};
