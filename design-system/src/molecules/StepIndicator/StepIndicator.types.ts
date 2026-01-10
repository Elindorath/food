/**
 * StepIndicator component types
 */

import type { ViewStyle } from 'react-native';

export type StepIndicatorProps = {
  stepNumber: number;
  instruction: string;
  duration?: number;
  style?: ViewStyle;
  testID?: string;
};
