import { Injectable, NotFoundException } from '@nestjs/common'
import { RecipesRepository } from './recipes.repository.ts'
import type { CreateRecipeDto } from './dto/create-recipe.dto.ts'
import type { UpdateRecipeDto } from './dto/update-recipe.dto.ts'
import type { RecipeQueryDto } from './dto/recipe-query.dto.ts'
import type { RecipeWithRelations } from './recipes.repository.ts'

@Injectable()
export class RecipesService {
  constructor(private recipesRepository: RecipesRepository) {}

  async findAll(query: RecipeQueryDto) {
    return await this.recipesRepository.findAll(query)
  }

  async findOne(id: string): Promise<RecipeWithRelations> {
    const recipe = await this.recipesRepository.findOne(id)

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`)
    }

    return recipe
  }

  async create(data: CreateRecipeDto): Promise<RecipeWithRelations> {
    return await this.recipesRepository.create(data)
  }

  async update(id: string, data: UpdateRecipeDto): Promise<RecipeWithRelations> {
    const recipe = await this.recipesRepository.update(id, data)

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`)
    }

    return recipe
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.recipesRepository.delete(id)

    if (!deleted) {
      throw new NotFoundException(`Recipe with ID ${id} not found`)
    }
  }
}
