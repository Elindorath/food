import type { z } from 'zod'
import { createIngredientSchema } from './create-ingredient.dto.ts'

export const updateIngredientSchema = createIngredientSchema.partial()

export type UpdateIngredientDto = z.infer<typeof updateIngredientSchema>
