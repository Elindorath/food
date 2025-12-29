import { pgTable, uuid, text, integer, unique, index } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { recipeTable } from './recipeTable.ts'
import { uuidv7 } from '../sqlHelpers/uuidv7.ts'

export const stepTable = pgTable(
  'step',
  {
    id: uuid('id')
      .primaryKey()
      .default(uuidv7()),
    recipeId: uuid('recipe_id')
      .notNull()
      .references(() => recipeTable.id, { onDelete: 'cascade' }),
    stepOrder: integer('step_order').notNull(),
    instruction: text('instruction').notNull(),
    duration: integer('duration'), // en minutes (optionnel)
  },
  (table) => [
    unique().on(table.recipeId, table.stepOrder),
    index('idx_step_recipe_id').on(table.recipeId),
  ],
)

export const stepRelations = relations(stepTable, ({ one }) => ({
  recipe: one(recipeTable, {
    fields: [stepTable.recipeId],
    references: [recipeTable.id],
  }),
}))
