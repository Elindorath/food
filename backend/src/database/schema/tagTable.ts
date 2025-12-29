import { relations } from 'drizzle-orm'
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'
import { recipeTagTable } from './recipeTagTable.ts'
import { uuidv7 } from '../sqlHelpers/uuidv7.ts'

export const tagTable = pgTable('tag', {
  id: uuid('id')
    .primaryKey()
    .default(uuidv7()),
  name: varchar('name', { length: 100 }).notNull().unique(),
})

export const tagRelations = relations(tagTable, ({ many }) => ({
  recipeTags: many(recipeTagTable),
}))
