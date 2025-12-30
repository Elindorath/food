import { z } from 'zod'

export const recipeQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().optional(), // Free text search
  ingredients: z
    .union([z.uuidv7(), z.array(z.uuidv7())])
    .optional()
    .transform((val) => {
      if (val === undefined) return undefined

      return Array.isArray(val) ? val : [val]
    }), // Search by ingredient(s)
  tagIds: z
    .union([z.uuidv7(), z.array(z.uuidv7())])
    .optional()
    .transform((val) => {
      if (val === undefined) return undefined

      return Array.isArray(val) ? val : [val]
    }), // Filter by tag(s)
  difficulty: z.coerce.number().int().min(1).max(5).optional(),
  minRating: z.coerce.number().int().min(1).max(5).optional(),
  maxPreparationTime: z.coerce.number().int().min(0).optional(),
  maxCookingTime: z.coerce.number().int().min(0).optional(),
  maxTotalTime: z.coerce.number().int().min(0).optional(),
})

export type RecipeQueryDto = z.infer<typeof recipeQuerySchema>
