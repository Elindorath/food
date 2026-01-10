/**
 * StepList component types
 */

import type { ViewStyle } from 'react-native';
import type { StepIndicatorProps } from '../../molecules/StepIndicator/StepIndicator.types';

export type StepListProps = {
  steps: StepIndicatorProps[];
  style?: ViewStyle;
  testID?: string;
};
