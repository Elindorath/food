/**
 * Text component types
 */

import type { TextProps as RNTextProps } from 'react-native';
import type { Typography } from '../../tokens/typography';
import type { TextColor } from '../../theme/types';

export type TextVariant = keyof Typography;

export type TextProps = Omit<RNTextProps, 'style'> & {
  variant?: TextVariant;
  textColor?: TextColor;
  testID?: string;
};
