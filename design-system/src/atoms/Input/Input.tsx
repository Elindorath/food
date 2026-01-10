/**
 * Input component - Text input field
 */

import { useState } from 'react';
import type { BlurEvent, FocusEvent } from 'react-native';
import { TextInput, View } from 'react-native';
import type { InputProps } from './Input.types';
import { inputStyles } from './Input.styles';
import { Text } from '../Text/Text';
import { createStyleSheet } from '../../unistyles';

const labelStyle = createStyleSheet(() => ({
  label: {
    marginBottom: 4,
  },
}));

export const Input = ({
  label,
  error,
  helperText,
  containerStyle,
  inputStyle,
  onFocus,
  onBlur,
  editable = true,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputContainerStyle = [
    inputStyles.input,
    isFocused && inputStyles.inputFocused,
    error !== undefined ? inputStyles.inputError : undefined,
    !editable && inputStyles.inputDisabled,
  ];

  return (
    <View style={[inputStyles.container, containerStyle]}>
      {label !== undefined && <Text variant="label" style={labelStyle.label}>{label}</Text>}
      <TextInput
        style={[inputContainerStyle, inputStyle]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error !== undefined && <Text style={inputStyles.errorText}>{error}</Text>}
      {(error === undefined) && helperText !== undefined && <Text style={inputStyles.helperText}>{helperText}</Text>}
    </View>
  );
};
