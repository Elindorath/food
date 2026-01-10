/**
 * SearchBar component types
 */

import type { ViewStyle } from 'react-native';
import type { InputProps } from '../../atoms/Input/Input.types';

export type SearchBarProps = Omit<InputProps, 'label'> & {
  onSearch?: (query: string) => void;
  containerStyle?: ViewStyle;
  placeholder?: string;
};
