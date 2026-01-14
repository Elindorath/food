/**
 * IngredientRow component - Text (nom) + Text (quantité) + Text (unité)
 */

import { View } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import type { IngredientRowProps } from './IngredientRow.types';
import { styles } from './IngredientRow.styles';

export const IngredientRow = ({
  name,
  quantity,
  unit,
  ...props
}: IngredientRowProps) => {
  return (
    <View style={styles.container} {...props}>
      <Text variant="body">
        {name}
      </Text>
      <View style={styles.quantityContainer}>
        <Text variant="body">
          {quantity}
        </Text>
        <Text variant="bodySmall">
          {unit}
        </Text>
      </View>
    </View>
  );
};
