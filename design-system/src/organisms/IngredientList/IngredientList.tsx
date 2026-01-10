/**
 * IngredientList component - Liste de IngredientRow avec gestion d'état
 */

import { View } from 'react-native';
import { IngredientRow } from '../../molecules/IngredientRow/IngredientRow';
import type { IngredientListProps } from './IngredientList.types';
import { Divider } from '../../atoms/Divider/Divider';
import { styles } from './IngredientList.styles';

export const IngredientList = ({
  ingredients,
  style,
  ...props
}: IngredientListProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {ingredients.map((ingredient, index) => (
        <View key={index}>
          <IngredientRow {...ingredient} />
          {index < ingredients.length - 1 && <Divider />}
        </View>
      ))}
    </View>
  );
};
