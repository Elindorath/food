/**
 * RecipeCard component types
 */

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
  testID?: string;
};
