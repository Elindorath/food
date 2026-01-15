/**
 * Text component types
 */

import type { TextProps as RNTextProps } from 'react-native';
import type { Typography } from '../../tokens/typography';

export type TextVariant = keyof Typography;

export type TextProps = Omit<RNTextProps, 'style'> & {
  variant?: TextVariant;
  color?: string;
  testID?: string;
};
