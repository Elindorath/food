import type { Ingredient } from './ingredient';
import type { Tag } from './tag';

export type Recipe = {
  id: string;
  title: string;
  description?: string;
  preparationTime: number;
  cookingTime: number;
  servings: number;
  difficulty: number;
  rating?: number;
  updatedAt: string;
  ingredients?: RecipeIngredient[];
  steps?: Step[];
  tags?: Tag[];
};

export type RecipeIngredient = {
  id: string;
  recipeId: string;
  ingredientId: string;
  quantity: number;
  unit: string;
  ingredient?: Ingredient;
};

export type Step = {
  id: string;
  recipeId: string;
  stepOrder: number;
  instruction: string;
  duration?: number;
};
