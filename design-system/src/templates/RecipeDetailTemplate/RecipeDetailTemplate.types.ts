/**
 * RecipeDetailTemplate component types
 */

import type { ImageSourcePropType } from 'react-native';
import type { HeaderProps } from '../../organisms/Header/Header.types';
import type { IngredientListProps } from '../../organisms/IngredientList/IngredientList.types';
import type { StepListProps } from '../../organisms/StepList/StepList.types';

export type RecipeDetailTemplateProps = {
  header: HeaderProps;
  imageUrl?: string | ImageSourcePropType;
  title: string;
  description?: string;
  tags?: string[];
  difficulty?: number;
  preparationTime?: number;
  cookingTime?: number;
  rating?: number;
  ingredients: IngredientListProps['ingredients'];
  steps: StepListProps['steps'];
  testID?: string;
};
