import { pgTable, uuid, varchar, index } from 'drizzle-orm/pg-core'
import { relations, sql } from 'drizzle-orm'
import { recipeIngredientTable } from './recipeIngredientTable.ts'
import { uuidv7 } from '../sqlHelpers/uuidv7.ts'

export const ingredientTable = pgTable(
  'ingredient',
  {
    id: uuid('id')
      .primaryKey()
      .default(uuidv7()),
    name: varchar('name', { length: 255 }).notNull().unique(),
  },
  (table) => [
    index('idx_ingredient_name_trgm').using('gin', sql`${table.name} gin_trgm_ops`),
  ],
)

export const ingredientRelations = relations(ingredientTable, ({ many }) => ({
  recipeIngredients: many(recipeIngredientTable),
}))
