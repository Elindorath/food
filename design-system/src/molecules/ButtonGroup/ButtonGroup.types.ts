/**
 * ButtonGroup component types
 */

import type { ButtonProps } from '../../atoms/Button/Button.types';

export type ButtonGroupItem = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export type ButtonGroupProps = {
  buttons: ButtonGroupItem[];
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  fullWidth?: boolean;
};
