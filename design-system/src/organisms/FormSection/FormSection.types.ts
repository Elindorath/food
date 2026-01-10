/**
 * FormSection component types
 */

import type { ViewStyle } from 'react-native';

export type FormSectionProps = {
  title: string;
  children: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
};
