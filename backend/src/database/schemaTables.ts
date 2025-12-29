import { ingredientTable, ingredientRelations } from './schema/ingredientTable.ts'
import { recipeTable, recipeRelations } from './schema/recipeTable.ts'
import { recipeIngredientTable, recipeIngredientRelations } from './schema/recipeIngredientTable.ts'
import { recipeTagTable, recipeTagRelations } from './schema/recipeTagTable.ts'
import { stepTable, stepRelations } from './schema/stepTable.ts'
import { tagTable, tagRelations } from './schema/tagTable.ts'

export const schemaTables = {
  ingredientTable,
  ingredientRelations,
  recipeTable,
  recipeRelations,
  recipeIngredientTable,
  recipeIngredientRelations,
  recipeTagTable,
  recipeTagRelations,
  stepTable,
  stepRelations,
  tagTable,
  tagRelations,
}
