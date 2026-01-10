/**
 * Input component types
 */

import type { TextInputProps as RNTextInputProps, ViewStyle, TextStyle } from 'react-native';

export type InputProps = RNTextInputProps & {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  testID?: string;
};
