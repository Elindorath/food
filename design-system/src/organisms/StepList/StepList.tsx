/**
 * StepList component - Liste de StepIndicator ordonnée
 */

import { View } from 'react-native';
import { StepIndicator } from '../../molecules/StepIndicator/StepIndicator';
import type { StepListProps } from './StepList.types';
import { styles } from './StepList.styles';

export const StepList = ({
  steps,
  ...props
}: StepListProps) => {
  return (
    <View style={styles.container} {...props}>
      {steps.map((step, index) => (
        <StepIndicator
          key={index}
          stepNumber={step.stepNumber || index + 1}
          instruction={step.instruction}
          duration={step.duration}
        />
      ))}
    </View>
  );
};
