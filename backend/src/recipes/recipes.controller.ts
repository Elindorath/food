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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger'
import { RecipesService } from './recipes.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createRecipeSchema } from './dto/create-recipe.dto.ts'
import { updateRecipeSchema } from './dto/update-recipe.dto.ts'
import { recipeQuerySchema } from './dto/recipe-query.dto.ts'
import type { CreateRecipeDto } from './dto/create-recipe.dto.ts'
import type { UpdateRecipeDto } from './dto/update-recipe.dto.ts'
import type { RecipeQueryDto } from './dto/recipe-query.dto.ts'

@ApiTags('recipes')
@Controller('api/recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOperation({ summary: 'List all recipes', description: 'Retrieves a paginated list of recipes with search capability' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page', example: 20 })
  @ApiQuery({ name: 'q', required: false, type: String, description: 'Text search' })
  @ApiResponse({ status: 200, description: 'Recipes list retrieved successfully' })
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
  @ApiOperation({ summary: 'Search recipes', description: 'Search recipes with filters and pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page', example: 20 })
  @ApiQuery({ name: 'q', required: false, type: String, description: 'Text search' })
  @ApiResponse({ status: 200, description: 'Search results retrieved successfully' })
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
  @ApiOperation({ summary: 'Get recipe by ID', description: 'Retrieves the complete details of a specific recipe' })
  @ApiParam({ name: 'id', description: 'Recipe ID (UUID v7)', type: String })
  @ApiResponse({ status: 200, description: 'Recipe retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async findOne(@Param('id') id: string) {
    const recipe = await this.recipesService.findOne(id)

    return { data: recipe }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new recipe', description: 'Creates a new recipe with ingredients, steps and tags' })
  @ApiBody({ description: 'Recipe data to create' })
  @ApiResponse({ status: 201, description: 'Recipe created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async create(@Body(new ZodValidationPipe(createRecipeSchema)) data: CreateRecipeDto) {
    const recipe = await this.recipesService.create(data)

    return { data: recipe }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a recipe', description: 'Updates the information of an existing recipe' })
  @ApiParam({ name: 'id', description: 'Recipe ID (UUID v7)', type: String })
  @ApiBody({ description: 'Recipe update data' })
  @ApiResponse({ status: 200, description: 'Recipe updated successfully' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateRecipeSchema)) data: UpdateRecipeDto
  ) {
    const recipe = await this.recipesService.update(id, data)

    return { data: recipe }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a recipe', description: 'Deletes a recipe from the database' })
  @ApiParam({ name: 'id', description: 'Recipe ID (UUID v7)', type: String })
  @ApiResponse({ status: 204, description: 'Recipe deleted successfully' })
  @ApiResponse({ status: 404, description: 'Recipe not found' })
  async delete(@Param('id') id: string) {
    await this.recipesService.delete(id)
  }
}
