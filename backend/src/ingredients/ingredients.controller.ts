import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { IngredientsService } from './ingredients.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createIngredientSchema } from './dto/create-ingredient.dto.ts'
import { updateIngredientSchema } from './dto/update-ingredient.dto.ts'
import { ingredientQuerySchema } from './dto/ingredient-query.dto.ts'
import type { CreateIngredientDto } from './dto/create-ingredient.dto.ts'
import type { UpdateIngredientDto } from './dto/update-ingredient.dto.ts'
import type { IngredientQueryDto } from './dto/ingredient-query.dto.ts'

@Controller('api/ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async findAll(@Query(new ZodValidationPipe(ingredientQuerySchema)) query: IngredientQueryDto) {
    const result = await this.ingredientsService.findAll(query)

    return {
      data: result.ingredients,
      meta: {
        total: result.total,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(result.total / query.limit),
      },
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const ingredient = await this.ingredientsService.findOne(id)

    return { data: ingredient }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ZodValidationPipe(createIngredientSchema)) data: CreateIngredientDto) {
    const ingredient = await this.ingredientsService.create(data)

    return { data: ingredient }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateIngredientSchema)) data: UpdateIngredientDto
  ) {
    const ingredient = await this.ingredientsService.update(id, data)

    return { data: ingredient }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.ingredientsService.delete(id)
  }
}
