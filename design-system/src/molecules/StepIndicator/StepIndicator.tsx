/**
 * StepIndicator component - Badge (numéro) + Text (instruction)
 */

import { View } from 'react-native';
import { Badge } from '../../atoms/Badge/Badge';
import { Text } from '../../atoms/Text/Text';
import type { StepIndicatorProps } from './StepIndicator.types';
import { spacing } from '../../tokens/spacing/spacing';
import { styles } from './StepIndicator.styles';

export const StepIndicator = ({
  stepNumber,
  instruction,
  duration,
  ...props
}: StepIndicatorProps) => {
  return (
    <View style={styles.container} {...props}>
      <Badge variant="primary" size="medium" style={styles.badge}>
        {stepNumber}
      </Badge>
      <View style={[styles.content, { marginLeft: spacing[3] }]}>
        <Text variant="body">
          {instruction}
        </Text>
        {duration !== undefined ? (
          <Text variant="caption">
            {duration} min
          </Text>
        ) : null}
      </View>
    </View>
  );
};
