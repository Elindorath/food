/**
 * IngredientList component types
 */

import type { IngredientRowProps } from '../../molecules/IngredientRow/IngredientRow.types';

export type IngredientListProps = {
  ingredients: IngredientRowProps[];
  testID?: string;
};
