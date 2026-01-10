/**
 * SearchTemplate component types
 */

import type { ViewStyle } from 'react-native';
import type { HeaderProps } from '../../organisms/Header/Header.types';
import type { RecipeCardProps } from '../../organisms/RecipeCard/RecipeCard.types';
import type { TagProps } from '../../molecules/Tag/Tag.types';

export type SearchTemplateProps = {
  header: HeaderProps;
  onSearch?: (query: string) => void;
  filters?: TagProps[];
  results: RecipeCardProps[];
  isLoading?: boolean;
  onRecipePress?: (recipeId: string) => void;
  style?: ViewStyle;
  testID?: string;
};
