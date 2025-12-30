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
import { RecipesService } from './recipes.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createRecipeSchema } from './dto/create-recipe.dto.ts'
import { updateRecipeSchema } from './dto/update-recipe.dto.ts'
import { recipeQuerySchema } from './dto/recipe-query.dto.ts'
import type { CreateRecipeDto } from './dto/create-recipe.dto.ts'
import type { UpdateRecipeDto } from './dto/update-recipe.dto.ts'
import type { RecipeQueryDto } from './dto/recipe-query.dto.ts'

@Controller('api/recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async findAll(@Query(new ZodValidationPipe(recipeQuerySchema)) query: RecipeQueryDto) {
    const result = await this.recipesService.findAll(query)

    return {
      data: result.recipes,
      meta: {
        total: result.total,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(result.total / query.limit),
      },
    }
  }

  @Get('search')
  async search(@Query(new ZodValidationPipe(recipeQuerySchema)) query: RecipeQueryDto) {
    const result = await this.recipesService.findAll(query)

    return {
      data: result.recipes,
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
    const recipe = await this.recipesService.findOne(id)

    return { data: recipe }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ZodValidationPipe(createRecipeSchema)) data: CreateRecipeDto) {
    const recipe = await this.recipesService.create(data)

    return { data: recipe }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateRecipeSchema)) data: UpdateRecipeDto
  ) {
    const recipe = await this.recipesService.update(id, data)

    return { data: recipe }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.recipesService.delete(id)
  }
}
