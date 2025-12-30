import type { z } from 'zod'
import { createRecipeSchema } from './create-recipe.dto.ts'

export const updateRecipeSchema = createRecipeSchema.partial()

export type UpdateRecipeDto = z.infer<typeof updateRecipeSchema>
