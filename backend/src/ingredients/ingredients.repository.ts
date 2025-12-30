import { Injectable } from '@nestjs/common'
import { eq, and, sql, ilike, desc } from 'drizzle-orm'
import { DrizzleService } from '../database/drizzle.service.ts'
import { ingredientTable } from '../database/schema/ingredientTable.ts'
import type { CreateIngredientDto } from './dto/create-ingredient.dto.ts'
import type { UpdateIngredientDto } from './dto/update-ingredient.dto.ts'
import type { IngredientQueryDto } from './dto/ingredient-query.dto.ts'
import { unaccent } from '../database/sqlHelpers/unaccent.ts'

export type Ingredient = {
  id: string
  name: string
}

@Injectable()
export class IngredientsRepository {
  constructor(private drizzleService: DrizzleService) {}

  async findAll(query: IngredientQueryDto): Promise<{ ingredients: Ingredient[]; total: number }> {
    const { page, limit, q } = query

    const offset = (page - 1) * limit

    // Build where conditions
    const conditions = []

    // Text search
    if (q !== undefined && q !== '') {
      conditions.push(ilike(unaccent(ingredientTable.name), `%${q}%`))
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined

    // Get total count
    const totalResult = await this.drizzleService.db
      .select({ count: sql<number>`count(*)` })
      .from(ingredientTable)
      .where(whereClause)

    const total = totalResult[0]?.count ?? 0

    // Get ingredients
    const ingredients = await this.drizzleService.db
      .select({
        id: ingredientTable.id,
        name: ingredientTable.name,
      })
      .from(ingredientTable)
      .where(whereClause)
      .orderBy(desc(ingredientTable.name))
      .limit(limit)
      .offset(offset)

    return { ingredients, total }
  }

  async findOne(id: string): Promise<Ingredient | null> {
    const result = await this.drizzleService.db
      .select({
        id: ingredientTable.id,
        name: ingredientTable.name,
      })
      .from(ingredientTable)
      .where(eq(ingredientTable.id, id))
      .limit(1)

    if (result.length === 0 || result[0] === undefined) {
      return null
    }

    return result[0]
  }

  async create(data: CreateIngredientDto): Promise<Ingredient> {
    const [ingredient] = await this.drizzleService.db
      .insert(ingredientTable)
      .values({
        name: data.name,
      })
      .returning()

    if (!ingredient) {
      throw new Error('Failed to create ingredient')
    }

    return ingredient
  }

  async update(id: string, data: UpdateIngredientDto): Promise<Ingredient | null> {
    // Check if ingredient exists
    const existing = await this.drizzleService.db
      .select()
      .from(ingredientTable)
      .where(eq(ingredientTable.id, id))
      .limit(1)

    if (existing.length === 0) {
      return null
    }

    // Update ingredient
    if (data.name !== undefined) {
      const [updated] = await this.drizzleService.db
        .update(ingredientTable)
        .set({ name: data.name })
        .where(eq(ingredientTable.id, id))
        .returning()

      if (!updated) {
        return null
      }

      return updated
    }

    return existing[0] as Ingredient
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.drizzleService.db
      .delete(ingredientTable)
      .where(eq(ingredientTable.id, id))
      .returning({ id: ingredientTable.id })

    return result.length > 0
  }
}
