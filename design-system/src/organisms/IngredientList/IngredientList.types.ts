/**
 * IngredientList component types
 */

import type { ViewStyle } from 'react-native';
import type { IngredientRowProps } from '../../molecules/IngredientRow/IngredientRow.types';

export type IngredientListProps = {
  ingredients: IngredientRowProps[];
  style?: ViewStyle;
  testID?: string;
};
