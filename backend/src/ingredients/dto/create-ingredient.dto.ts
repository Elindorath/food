import { z } from 'zod'

export const createIngredientSchema = z.object({
  name: z.string().min(1).max(255),
})

export type CreateIngredientDto = z.infer<typeof createIngredientSchema>

