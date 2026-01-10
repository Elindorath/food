/**
 * IngredientRow component - Text (nom) + Text (quantité) + Text (unité)
 */

import { View } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import type { IngredientRowProps } from './IngredientRow.types';
import { spacing } from '../../tokens/spacing';
import { styles } from './IngredientRow.styles';

export const IngredientRow = ({
  name,
  quantity,
  unit,
  style,
  ...props
}: IngredientRowProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text variant="body" style={styles.name}>
        {name}
      </Text>
      <View style={styles.quantityContainer}>
        <Text variant="body" style={styles.quantity}>
          {quantity}
        </Text>
        <Text variant="bodySmall" style={[styles.unit, { marginLeft: spacing[1] }]}>
          {unit}
        </Text>
      </View>
    </View>
  );
};
