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
import { IngredientsService } from './ingredients.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createIngredientSchema } from './dto/create-ingredient.dto.ts'
import { updateIngredientSchema } from './dto/update-ingredient.dto.ts'
import { ingredientQuerySchema } from './dto/ingredient-query.dto.ts'
import type { CreateIngredientDto } from './dto/create-ingredient.dto.ts'
import type { UpdateIngredientDto } from './dto/update-ingredient.dto.ts'
import type { IngredientQueryDto } from './dto/ingredient-query.dto.ts'

@ApiTags('ingredients')
@Controller('api/ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  @ApiOperation({ summary: 'List all ingredients', description: 'Retrieves a paginated list of ingredients with search capability' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page', example: 20 })
  @ApiQuery({ name: 'q', required: false, type: String, description: 'Text search' })
  @ApiResponse({ status: 200, description: 'Ingredients list retrieved successfully' })
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
  @ApiOperation({ summary: 'Get ingredient by ID', description: 'Retrieves the details of a specific ingredient' })
  @ApiParam({ name: 'id', description: 'Ingredient ID (UUID v7)', type: String })
  @ApiResponse({ status: 200, description: 'Ingredient retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  async findOne(@Param('id') id: string) {
    const ingredient = await this.ingredientsService.findOne(id)

    return { data: ingredient }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new ingredient', description: 'Creates a new ingredient in the database' })
  @ApiBody({ description: 'Ingredient data to create', schema: { type: 'object', properties: { name: { type: 'string', minLength: 1, maxLength: 255, example: 'Tomato' } }, required: ['name'] } })
  @ApiResponse({ status: 201, description: 'Ingredient created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async create(@Body(new ZodValidationPipe(createIngredientSchema)) data: CreateIngredientDto) {
    const ingredient = await this.ingredientsService.create(data)

    return { data: ingredient }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an ingredient', description: 'Updates the information of an existing ingredient' })
  @ApiParam({ name: 'id', description: 'Ingredient ID (UUID v7)', type: String })
  @ApiBody({ description: 'Ingredient update data', schema: { type: 'object', properties: { name: { type: 'string', minLength: 1, maxLength: 255, example: 'Tomato' } } } })
  @ApiResponse({ status: 200, description: 'Ingredient updated successfully' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateIngredientSchema)) data: UpdateIngredientDto
  ) {
    const ingredient = await this.ingredientsService.update(id, data)

    return { data: ingredient }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an ingredient', description: 'Deletes an ingredient from the database' })
  @ApiParam({ name: 'id', description: 'Ingredient ID (UUID v7)', type: String })
  @ApiResponse({ status: 204, description: 'Ingredient deleted successfully' })
  @ApiResponse({ status: 404, description: 'Ingredient not found' })
  async delete(@Param('id') id: string) {
    await this.ingredientsService.delete(id)
  }
}
