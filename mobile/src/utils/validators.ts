import { z } from 'zod';

// Recipe validators
export const createRecipeSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255, 'Title is too long'),
  description: z.string().optional(),
  preparationTime: z.number().int().min(0, 'Preparation time must be positive'),
  cookingTime: z.number().int().min(0, 'Cooking time must be positive'),
  servings: z.number().int().min(1, 'Servings must be at least 1'),
  difficulty: z.number().int().min(1, 'Difficulty must be between 1 and 5').max(5, 'Difficulty must be between 1 and 5'),
  rating: z.number().int().min(1).max(5).optional(),
});

export type CreateRecipeFormData = z.infer<typeof createRecipeSchema>;

export const updateRecipeSchema = createRecipeSchema.partial();

export type UpdateRecipeFormData = z.infer<typeof updateRecipeSchema>;

// Ingredient validators
export const createIngredientSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
});

export type CreateIngredientFormData = z.infer<typeof createIngredientSchema>;

// Tag validators
export const createTagSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
});

export type CreateTagFormData = z.infer<typeof createTagSchema>;
