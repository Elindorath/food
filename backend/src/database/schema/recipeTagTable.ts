import { pgTable, uuid, unique, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { recipeTable } from './recipeTable.ts';
import { tagTable } from './tagTable.ts';
import { uuidv7 } from '../sqlHelpers/uuidv7.ts';

export const recipeTagTable = pgTable(
  'recipe_tag',
  {
    id: uuid('id')
      .primaryKey()
      .default(uuidv7()),
    recipeId: uuid('recipe_id')
      .notNull()
      .references(() => recipeTable.id, { onDelete: 'cascade' }),
    tagId: uuid('tag_id')
      .notNull()
      .references(() => tagTable.id, { onDelete: 'cascade' }),
  },
  (table) => [
    unique().on(table.recipeId, table.tagId),
    index('idx_recipe_tag_recipe_id').on(table.recipeId),
    index('idx_recipe_tag_tag_id').on(table.tagId),
  ],
);

export const recipeTagRelations = relations(recipeTagTable, ({ one }) => ({
  recipe: one(recipeTable, {
    fields: [recipeTagTable.recipeId],
    references: [recipeTable.id],
  }),
  tag: one(tagTable, {
    fields: [recipeTagTable.tagId],
    references: [tagTable.id],
  }),
}));
