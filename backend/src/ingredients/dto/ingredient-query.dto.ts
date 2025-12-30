import { z } from 'zod'

export const ingredientQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().optional(), // Free text search
})

export type IngredientQueryDto = z.infer<typeof ingredientQuerySchema>
