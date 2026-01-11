/**
 * Input component - Text input field
 */

import { useState } from 'react'
import type { BlurEvent, FocusEvent } from 'react-native'
import { TextInput, View } from 'react-native'
import type { InputProps } from './Input.types'
import { Text } from '../Text/Text'
import { styles } from './Input.styles'

export const Input = ({
  label,
  error,
  helperText,
  onFocus,
  onBlur,
  editable = true,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  styles.useVariants({
    state: isFocused
      ? 'focused'
      : error !== undefined
        ? 'error'
        : !editable
          ? 'disabled'
          : undefined,
  })

  return (
    <View style={styles.container}>
      {label !== undefined && <Text variant="label" style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error !== undefined && <Text style={styles.errorText}>{error}</Text>}
      {(error === undefined) && helperText !== undefined && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  )
}
