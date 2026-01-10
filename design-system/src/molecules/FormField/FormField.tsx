/**
 * FormField component - Label + Input + ErrorMessage
 */

import { Input } from '../../atoms/Input/Input';
import type { FormFieldProps } from './FormField.types';

export const FormField = ({
  label,
  required,
  error,
  helperText,
  ...props
}: FormFieldProps) => {
  const displayLabel = required !== undefined && label !== undefined ? `${label} *` : label;

  return (
    <Input
      label={displayLabel}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};
