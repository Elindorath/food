/**
 * RecipeCard component types
 */

import type { ViewStyle } from 'react-native';

export type RecipeCardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  difficulty?: number;
  preparationTime?: number;
  cookingTime?: number;
  rating?: number;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
};
