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
import { TagsService } from './tags.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createTagSchema } from './dto/create-tag.dto.ts'
import { updateTagSchema } from './dto/update-tag.dto.ts'
import { tagQuerySchema } from './dto/tag-query.dto.ts'
import type { CreateTagDto } from './dto/create-tag.dto.ts'
import type { UpdateTagDto } from './dto/update-tag.dto.ts'
import type { TagQueryDto } from './dto/tag-query.dto.ts'

@ApiTags('tags')
@Controller('api/tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiOperation({ summary: 'List all tags', description: 'Retrieves a paginated list of tags with search capability' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number', example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items per page', example: 20 })
  @ApiQuery({ name: 'q', required: false, type: String, description: 'Text search' })
  @ApiResponse({ status: 200, description: 'Tags list retrieved successfully' })
  async findAll(@Query(new ZodValidationPipe(tagQuerySchema)) query: TagQueryDto) {
    const result = await this.tagsService.findAll(query)

    return {
      data: result.tags,
      meta: {
        total: result.total,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(result.total / query.limit),
      },
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tag by ID', description: 'Retrieves the details of a specific tag' })
  @ApiParam({ name: 'id', description: 'Tag ID (UUID v7)', type: String })
  @ApiResponse({ status: 200, description: 'Tag retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Tag not found' })
  async findOne(@Param('id') id: string) {
    const tag = await this.tagsService.findOne(id)

    return { data: tag }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new tag', description: 'Creates a new tag in the database' })
  @ApiBody({ description: 'Tag data to create', schema: { type: 'object', properties: { name: { type: 'string', minLength: 1, maxLength: 255, example: 'Vegetarian' } }, required: ['name'] } })
  @ApiResponse({ status: 201, description: 'Tag created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async create(@Body(new ZodValidationPipe(createTagSchema)) data: CreateTagDto) {
    const tag = await this.tagsService.create(data)

    return { data: tag }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a tag', description: 'Updates the information of an existing tag' })
  @ApiParam({ name: 'id', description: 'Tag ID (UUID v7)', type: String })
  @ApiBody({ description: 'Tag update data', schema: { type: 'object', properties: { name: { type: 'string', minLength: 1, maxLength: 255, example: 'Vegetarian' } } } })
  @ApiResponse({ status: 200, description: 'Tag updated successfully' })
  @ApiResponse({ status: 404, description: 'Tag not found' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateTagSchema)) data: UpdateTagDto
  ) {
    const tag = await this.tagsService.update(id, data)

    return { data: tag }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a tag', description: 'Deletes a tag from the database' })
  @ApiParam({ name: 'id', description: 'Tag ID (UUID v7)', type: String })
  @ApiResponse({ status: 204, description: 'Tag deleted successfully' })
  @ApiResponse({ status: 404, description: 'Tag not found' })
  async delete(@Param('id') id: string) {
    await this.tagsService.delete(id)
  }
}
