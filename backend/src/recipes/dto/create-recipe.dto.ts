import { z } from 'zod'

export const createRecipeIngredientSchema = z.object({
  ingredientId: z.uuidv7(),
  quantity: z.number().positive(),
  unit: z.string().max(50).default('unité'),
})

export const createRecipeStepSchema = z.object({
  stepOrder: z.number().int().min(1),
  instruction: z.string().min(1),
  duration: z.number().int().min(0).optional(),
})

export const createRecipeSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  preparationTime: z.number().int().min(0).default(0),
  cookingTime: z.number().int().min(0).default(0),
  servings: z.number().int().min(1).default(1),
  difficulty: z.number().int().min(1).max(5),
  rating: z.number().int().min(1).max(5).optional(),
  ingredients: z.array(createRecipeIngredientSchema).default([]),
  steps: z.array(createRecipeStepSchema).default([]),
  tagIds: z.array(z.uuidv7()).default([]),
})

export type CreateRecipeDto = z.infer<typeof createRecipeSchema>
