/**
 * FormField component types
 */

import type { InputProps } from '../../atoms/Input/Input.types';

export type FormFieldProps = InputProps & {
  required?: boolean;
};
