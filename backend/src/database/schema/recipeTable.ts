import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  timestamp,
  index,
  check,
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';
import { recipeIngredientTable } from './recipeIngredientTable.js';
import { stepTable } from './stepTable.js';
import { recipeTagTable } from './recipeTagTable.js';
import { uuidv7 } from '../sqlHelpers/uuidv7.ts';

export const recipeTable = pgTable(
  'recipe',
  {
    id: uuid('id')
      .primaryKey()
      .default(uuidv7()),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description'),
    preparationTime: integer('preparation_time').notNull().default(0),
    cookingTime: integer('cooking_time').notNull().default(0),
    servings: integer('servings').notNull().default(1),
    difficulty: integer('difficulty').notNull(),
    rating: integer('rating'),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    check('difficulty_check', sql`${table.difficulty} >= 1 AND ${table.difficulty} <= 5`),
    check('rating_check', sql`${table.rating} IS NULL OR (${table.rating} >= 1 AND ${table.rating} <= 5)`),
    index('idx_recipe_title_trgm').using('gin', sql`${table.title} gin_trgm_ops`),
    index('idx_recipe_description_trgm').using('gin', sql`${table.description} gin_trgm_ops`),
    index('idx_recipe_fulltext').using(
      'gin',
      sql`to_tsvector('french', coalesce(${table.title}, '') || ' ' || coalesce(${table.description}, ''))`,
    ),
    index('idx_recipe_difficulty').on(table.difficulty),
    index('idx_recipe_rating').on(table.rating),
    index('idx_recipe_preparation_time').on(table.preparationTime),
    index('idx_recipe_cooking_time').on(table.cookingTime),
    index('idx_recipe_total_time').on(
      sql`${table.preparationTime} + ${table.cookingTime}`,
    ),
  ],
);

export const recipeRelations = relations(recipeTable, ({ many }) => ({
  recipeIngredients: many(recipeIngredientTable),
  steps: many(stepTable),
  recipeTags: many(recipeTagTable),
}));
