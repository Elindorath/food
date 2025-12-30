import { Injectable, NotFoundException } from '@nestjs/common'
import { IngredientsRepository } from './ingredients.repository.ts'
import type { CreateIngredientDto } from './dto/create-ingredient.dto.ts'
import type { UpdateIngredientDto } from './dto/update-ingredient.dto.ts'
import type { IngredientQueryDto } from './dto/ingredient-query.dto.ts'
import type { Ingredient } from './ingredients.repository.ts'

@Injectable()
export class IngredientsService {
  constructor(private ingredientsRepository: IngredientsRepository) {}

  async findAll(query: IngredientQueryDto) {
    return await this.ingredientsRepository.findAll(query)
  }

  async findOne(id: string): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.findOne(id)

    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`)
    }

    return ingredient
  }

  async create(data: CreateIngredientDto): Promise<Ingredient> {
    return await this.ingredientsRepository.create(data)
  }

  async update(id: string, data: UpdateIngredientDto): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.update(id, data)

    if (!ingredient) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`)
    }

    return ingredient
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.ingredientsRepository.delete(id)

    if (!deleted) {
      throw new NotFoundException(`Ingredient with ID ${id} not found`)
    }
  }
}
