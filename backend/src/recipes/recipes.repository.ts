import { Injectable } from '@nestjs/common'
import { eq, and, or, sql, ilike, inArray, gte, lte, desc } from 'drizzle-orm'
import { DrizzleService } from '../database/drizzle.service.ts'
import { recipeTable } from '../database/schema/recipeTable.ts'
import { recipeIngredientTable } from '../database/schema/recipeIngredientTable.ts'
import { ingredientTable } from '../database/schema/ingredientTable.ts'
import { stepTable } from '../database/schema/stepTable.ts'
import { recipeTagTable } from '../database/schema/recipeTagTable.ts'
import { tagTable } from '../database/schema/tagTable.ts'
import type { CreateRecipeDto } from './dto/create-recipe.dto.ts'
import type { UpdateRecipeDto } from './dto/update-recipe.dto.ts'
import type { RecipeQueryDto } from './dto/recipe-query.dto.ts'
import { jsonAgg } from '../database/sqlHelpers/jsonAgg.ts'
import { jsonBuildObject } from '../database/sqlHelpers/jsonBuildObject.ts'
import { unaccent } from '../database/sqlHelpers/unaccent.ts'

export type RecipeWithRelations = {
  id: string
  title: string
  description: string | null
  preparationTime: number
  cookingTime: number
  servings: number
  difficulty: number
  rating: number | null
  updatedAt: Date
  ingredients: Array<{
    id: string
    ingredientId: string
    ingredientName: string
    quantity: string
    unit: string
  }>
  steps: Array<{
    id: string
    stepOrder: number
    instruction: string
    duration: number | null
  }>
  tags: Array<{
    id: string
    tagId: string
    tagName: string
  }>
}

@Injectable()
export class RecipesRepository {
  constructor(private drizzleService: DrizzleService) {}

  async findAll(query: RecipeQueryDto): Promise<{ recipes: RecipeWithRelations[]; total: number }> {
    const { page, limit, q, ingredients, tagIds, difficulty, minRating, maxPreparationTime, maxCookingTime, maxTotalTime } = query

    const offset = (page - 1) * limit

    // Build where conditions
    const conditions = []

    // Text search
    if (q !== undefined && q !== '') {
      conditions.push(
        or(
          sql`to_tsvector('french', coalesce(${recipeTable.title}, '') || ' ' || coalesce(${recipeTable.description}, '')) @@ plainto_tsquery('french', ${q})`,
          ilike(unaccent(recipeTable.title), `%${q}%`),
          ilike(unaccent(recipeTable.description), `%${q}%`)
        )
      )
    }

    // Filter by difficulty
    if (difficulty !== undefined) {
      conditions.push(eq(recipeTable.difficulty, difficulty))
    }

    // Filter by rating
    if (minRating !== undefined) {
      conditions.push(gte(recipeTable.rating, minRating))
    }

    // Filter by preparation time
    if (maxPreparationTime !== undefined) {
      conditions.push(lte(recipeTable.preparationTime, maxPreparationTime))
    }

    // Filter by cooking time
    if (maxCookingTime !== undefined) {
      conditions.push(lte(recipeTable.cookingTime, maxCookingTime))
    }

    // Filter by total time
    if (maxTotalTime !== undefined) {
      conditions.push(
        sql`${recipeTable.preparationTime} + ${recipeTable.cookingTime} <= ${maxTotalTime}`
      )
    }

    // Filter by ingredients
    if (ingredients && ingredients.length > 0) {
      const recipeIdsWithIngredients = await this.drizzleService.db
        .selectDistinct({ recipeId: recipeIngredientTable.recipeId })
        .from(recipeIngredientTable)
        .where(inArray(recipeIngredientTable.ingredientId, ingredients))

      const recipeIds = recipeIdsWithIngredients.map((r) => r.recipeId)

      if (recipeIds.length > 0) {
        conditions.push(inArray(recipeTable.id, recipeIds))
      } else {
        // No recipes match, return empty result
        return { recipes: [], total: 0 }
      }
    }

    // Filter by tags
    if (tagIds && tagIds.length > 0) {
      const recipeIdsWithTags = await this.drizzleService.db
        .selectDistinct({ recipeId: recipeTagTable.recipeId })
        .from(recipeTagTable)
        .where(inArray(recipeTagTable.tagId, tagIds))

      const recipeIds = recipeIdsWithTags.map((r) => r.recipeId)

      if (recipeIds.length > 0) {
        conditions.push(inArray(recipeTable.id, recipeIds))
      } else {
        // No recipes match, return empty result
        return { recipes: [], total: 0 }
      }
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined

    // Get total count
    const totalResult = await this.drizzleService.db
      .select({ count: sql<number>`count(*)` })
      .from(recipeTable)
      .where(whereClause)

    const total = totalResult[0]?.count ?? 0

    // Get recipes with relations
    const recipes = await this.drizzleService.db
      .select({
        id: recipeTable.id,
        title: recipeTable.title,
        description: recipeTable.description,
        preparationTime: recipeTable.preparationTime,
        cookingTime: recipeTable.cookingTime,
        servings: recipeTable.servings,
        difficulty: recipeTable.difficulty,
        rating: recipeTable.rating,
        updatedAt: recipeTable.updatedAt,
        ingredients: jsonAgg(
          jsonBuildObject({
            id: recipeIngredientTable.id,
            ingredientId: recipeIngredientTable.ingredientId,
            ingredientName: ingredientTable.name,
            quantity: recipeIngredientTable.quantity,
            unit: recipeIngredientTable.unit,
          }),
          [recipeIngredientTable.id]
        ),
        steps: jsonAgg(
          jsonBuildObject({
            id: stepTable.id,
            stepOrder: stepTable.stepOrder,
            instruction: stepTable.instruction,
            duration: stepTable.duration,
          }),
          [stepTable.stepOrder]
        ),
        tags: jsonAgg(
          jsonBuildObject({
            id: recipeTagTable.id,
            tagId: recipeTagTable.tagId,
            tagName: tagTable.name,
          }),
          [recipeTagTable.id]
        ),
      })
      .from(recipeTable)
      .leftJoin(recipeIngredientTable, eq(recipeTable.id, recipeIngredientTable.recipeId))
      .leftJoin(ingredientTable, eq(recipeIngredientTable.ingredientId, ingredientTable.id))
      .leftJoin(stepTable, eq(recipeTable.id, stepTable.recipeId))
      .leftJoin(recipeTagTable, eq(recipeTable.id, recipeTagTable.recipeId))
      .leftJoin(tagTable, eq(recipeTagTable.tagId, tagTable.id))
      .where(whereClause)
      .groupBy(recipeTable.id)
      .orderBy(desc(recipeTable.updatedAt))
      .limit(limit)
      .offset(offset)

    // Parse JSON aggregates
    const parsedRecipes: RecipeWithRelations[] = recipes.map((recipe) => {
      // jsonAgg returns null when no rows, so we need to handle that
      const parseJsonAgg = (value: unknown): unknown[] => {
        if (value === null || value === undefined) {
          return []
        }

        if (Array.isArray(value)) {
          return value
        }

        // Sometimes it might be a string that needs parsing
        if (typeof value === 'string') {
          try {
            const parsed = JSON.parse(value) as unknown

            return Array.isArray(parsed) ? parsed : []
          } catch {
            return []
          }
        }

        return []
      }

      const parsedIngredients = parseJsonAgg(recipe.ingredients) as Array<{
        id: string
        ingredientId: string
        ingredientName: string
        quantity: string
        unit: string
      }>
      const parsedSteps = parseJsonAgg(recipe.steps) as Array<{
        id: string
        stepOrder: number
        instruction: string
        duration: number | null
      }>
      const parsedTags = parseJsonAgg(recipe.tags) as Array<{
        id: string
        tagId: string
        tagName: string
      }>

      return {
        ...recipe,
        ingredients: parsedIngredients,
        steps: parsedSteps,
        tags: parsedTags,
      }
    })

    return { recipes: parsedRecipes, total }
  }

  async findOne(id: string): Promise<RecipeWithRelations | null> {
    const result = await this.drizzleService.db
      .select({
        id: recipeTable.id,
        title: recipeTable.title,
        description: recipeTable.description,
        preparationTime: recipeTable.preparationTime,
        cookingTime: recipeTable.cookingTime,
        servings: recipeTable.servings,
        difficulty: recipeTable.difficulty,
        rating: recipeTable.rating,
        updatedAt: recipeTable.updatedAt,
        ingredients: jsonAgg(
          jsonBuildObject({
            id: recipeIngredientTable.id,
            ingredientId: recipeIngredientTable.ingredientId,
            ingredientName: ingredientTable.name,
            quantity: recipeIngredientTable.quantity,
            unit: recipeIngredientTable.unit,
          }),
          [recipeIngredientTable.id]
        ),
        steps: jsonAgg(
          jsonBuildObject({
            id: stepTable.id,
            stepOrder: stepTable.stepOrder,
            instruction: stepTable.instruction,
            duration: stepTable.duration,
          }),
          [stepTable.stepOrder]
        ),
        tags: jsonAgg(
          jsonBuildObject({
            id: recipeTagTable.id,
            tagId: recipeTagTable.tagId,
            tagName: tagTable.name,
          }),
          [recipeTagTable.id]
        ),
      })
      .from(recipeTable)
      .leftJoin(recipeIngredientTable, eq(recipeTable.id, recipeIngredientTable.recipeId))
      .leftJoin(ingredientTable, eq(recipeIngredientTable.ingredientId, ingredientTable.id))
      .leftJoin(stepTable, eq(recipeTable.id, stepTable.recipeId))
      .leftJoin(recipeTagTable, eq(recipeTable.id, recipeTagTable.recipeId))
      .leftJoin(tagTable, eq(recipeTagTable.tagId, tagTable.id))
      .where(eq(recipeTable.id, id))
      .groupBy(recipeTable.id)
      .limit(1)

    if (result.length === 0 || result[0] === undefined) {
      return null
    }

    const recipe = result[0]

    // jsonAgg returns null when no rows, so we need to handle that
    const parseJsonAgg = (value: unknown): unknown[] => {
      if (value === null || value === undefined) {
        return []
      }

      if (Array.isArray(value)) {
        return value
      }

      // Sometimes it might be a string that needs parsing
      if (typeof value === 'string') {
        try {
          const parsed = JSON.parse(value) as unknown

          return Array.isArray(parsed) ? parsed : []
        } catch {
          return []
        }
      }

      return []
    }

    const parsedIngredients = parseJsonAgg(recipe.ingredients) as Array<{
      id: string
      ingredientId: string
      ingredientName: string
      quantity: string
      unit: string
    }>
    const parsedSteps = parseJsonAgg(recipe.steps) as Array<{
      id: string
      stepOrder: number
      instruction: string
      duration: number | null
    }>
    const parsedTags = parseJsonAgg(recipe.tags) as Array<{
      id: string
      tagId: string
      tagName: string
    }>

    return {
      ...recipe,
      ingredients: parsedIngredients,
      steps: parsedSteps,
      tags: parsedTags,
    }
  }

  async create(data: CreateRecipeDto): Promise<RecipeWithRelations> {
    return await this.drizzleService.db.transaction(async (tx) => {
      // Insert recipe
      const [recipe] = await tx
        .insert(recipeTable)
        .values({
          title: data.title,
          description: data.description,
          preparationTime: data.preparationTime,
          cookingTime: data.cookingTime,
          servings: data.servings,
          difficulty: data.difficulty,
          rating: data.rating,
        })
        .returning()

      if (!recipe) {
        throw new Error('Failed to create recipe')
      }

      // Insert ingredients
      if (data.ingredients.length > 0) {
        await tx.insert(recipeIngredientTable).values(
          data.ingredients.map((ing) => ({
            recipeId: recipe.id,
            ingredientId: ing.ingredientId,
            quantity: ing.quantity.toString(),
            unit: ing.unit,
          }))
        )
      }

      // Insert steps
      if (data.steps.length > 0) {
        await tx.insert(stepTable).values(
          data.steps.map((step) => ({
            recipeId: recipe.id,
            stepOrder: step.stepOrder,
            instruction: step.instruction,
            duration: step.duration,
          }))
        )
      }

      // Insert tags
      if (data.tagIds.length > 0) {
        await tx.insert(recipeTagTable).values(
          data.tagIds.map((tagId) => ({
            recipeId: recipe.id,
            tagId,
          }))
        )
      }

      // Return full recipe with relations
      const fullRecipe = await this.findOne(recipe.id)

      if (!fullRecipe) {
        throw new Error('Failed to retrieve created recipe')
      }

      return fullRecipe
    })
  }

  async update(id: string, data: UpdateRecipeDto): Promise<RecipeWithRelations | null> {
    return await this.drizzleService.db.transaction(async (tx) => {
      // Check if recipe exists
      const existing = await tx
        .select()
        .from(recipeTable)
        .where(eq(recipeTable.id, id))
        .limit(1)

      if (existing.length === 0) {
        return null
      }

      // Update recipe
      const updateData: Partial<typeof recipeTable.$inferInsert> = {}

      if (data.title !== undefined) {
        updateData.title = data.title
      }

      if (data.description !== undefined) {
        updateData.description = data.description
      }

      if (data.preparationTime !== undefined) {
        updateData.preparationTime = data.preparationTime
      }

      if (data.cookingTime !== undefined) {
        updateData.cookingTime = data.cookingTime
      }

      if (data.servings !== undefined) {
        updateData.servings = data.servings
      }

      if (data.difficulty !== undefined) {
        updateData.difficulty = data.difficulty
      }

      if (data.rating !== undefined) {
        updateData.rating = data.rating
      }

      if (Object.keys(updateData).length > 0) {
        await tx.update(recipeTable).set(updateData).where(eq(recipeTable.id, id))
      }

      // Update ingredients if provided
      if (data.ingredients !== undefined) {
        // Delete existing ingredients
        await tx.delete(recipeIngredientTable).where(eq(recipeIngredientTable.recipeId, id))

        // Insert new ingredients
        if (data.ingredients.length > 0) {
          await tx.insert(recipeIngredientTable).values(
            data.ingredients.map((ing) => ({
              recipeId: id,
              ingredientId: ing.ingredientId,
              quantity: ing.quantity.toString(),
              unit: ing.unit,
            }))
          )
        }
      }

      // Update steps if provided
      if (data.steps !== undefined) {
        // Delete existing steps
        await tx.delete(stepTable).where(eq(stepTable.recipeId, id))

        // Insert new steps
        if (data.steps.length > 0) {
          await tx.insert(stepTable).values(
            data.steps.map((step) => ({
              recipeId: id,
              stepOrder: step.stepOrder,
              instruction: step.instruction,
              duration: step.duration,
            }))
          )
        }
      }

      // Update tags if provided
      if (data.tagIds !== undefined) {
        // Delete existing tags
        await tx.delete(recipeTagTable).where(eq(recipeTagTable.recipeId, id))

        // Insert new tags
        if (data.tagIds.length > 0) {
          await tx.insert(recipeTagTable).values(
            data.tagIds.map((tagId) => ({
              recipeId: id,
              tagId,
            }))
          )
        }
      }

      // Return full recipe with relations
      return await this.findOne(id)
    })
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.drizzleService.db
      .delete(recipeTable)
      .where(eq(recipeTable.id, id))
      .returning({ id: recipeTable.id })

    return result.length > 0
  }
}
