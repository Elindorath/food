/**
 * RecipeListTemplate component types
 */

import type { ViewStyle } from 'react-native';
import type { RecipeCardProps } from '../../organisms/RecipeCard/RecipeCard.types';
import type { HeaderProps } from '../../organisms/Header/Header.types';

export type RecipeListTemplateProps = {
  header: HeaderProps;
  onSearch?: (query: string) => void;
  recipes: RecipeCardProps[];
  isLoading?: boolean;
  onRecipePress?: (recipeId: string) => void;
  style?: ViewStyle;
  testID?: string;
};
