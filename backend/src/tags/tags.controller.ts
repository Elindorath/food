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
import { TagsService } from './tags.service.ts'
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.ts'
import { createTagSchema } from './dto/create-tag.dto.ts'
import { updateTagSchema } from './dto/update-tag.dto.ts'
import { tagQuerySchema } from './dto/tag-query.dto.ts'
import type { CreateTagDto } from './dto/create-tag.dto.ts'
import type { UpdateTagDto } from './dto/update-tag.dto.ts'
import type { TagQueryDto } from './dto/tag-query.dto.ts'

@Controller('api/tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
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
  async findOne(@Param('id') id: string) {
    const tag = await this.tagsService.findOne(id)

    return { data: tag }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ZodValidationPipe(createTagSchema)) data: CreateTagDto) {
    const tag = await this.tagsService.create(data)

    return { data: tag }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateTagSchema)) data: UpdateTagDto
  ) {
    const tag = await this.tagsService.update(id, data)

    return { data: tag }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.tagsService.delete(id)
  }
}
