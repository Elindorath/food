/**
 * Input component types
 */

import type { TextInputProps as RNTextInputProps } from 'react-native';

export type InputProps = RNTextInputProps & {
  label?: string;
  error?: string;
  helperText?: string;
  testID?: string;
};
