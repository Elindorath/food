/**
 * StepList component types
 */

import type { StepIndicatorProps } from '../../molecules/StepIndicator/StepIndicator.types';

export type StepListProps = {
  steps: StepIndicatorProps[];
  testID?: string;
};
