import { pgTable, uuid, varchar, decimal, unique, index } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { recipeTable } from './recipeTable.ts';
import { ingredientTable } from './ingredientTable.ts';
import { uuidv7 } from '../sqlHelpers/uuidv7.ts';

export const recipeIngredientTable = pgTable(
  'recipe_ingredient',
  {
    id: uuid('id')
      .primaryKey()
      .default(uuidv7()),
    recipeId: uuid('recipe_id')
      .notNull()
      .references(() => recipeTable.id, { onDelete: 'cascade' }),
    ingredientId: uuid('ingredient_id')
      .notNull()
      .references(() => ingredientTable.id, { onDelete: 'cascade' }),
    quantity: decimal('quantity', { precision: 10, scale: 2 }).notNull(),
    unit: varchar('unit', { length: 50 }).notNull().default('unité'),
  },
  (table) => [
    unique().on(table.recipeId, table.ingredientId),
    index('idx_recipe_ingredient_recipe_id').on(table.recipeId),
    index('idx_recipe_ingredient_ingredient_id').on(table.ingredientId),
  ],
);

export const recipeIngredientRelations = relations(recipeIngredientTable, ({ one }) => ({
  recipe: one(recipeTable, {
    fields: [recipeIngredientTable.recipeId],
    references: [recipeTable.id],
  }),
  ingredient: one(ingredientTable, {
    fields: [recipeIngredientTable.ingredientId],
    references: [ingredientTable.id],
  }),
}));
