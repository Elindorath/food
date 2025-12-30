import { Injectable, NotFoundException } from '@nestjs/common'
import { TagsRepository } from './tags.repository.ts'
import type { CreateTagDto } from './dto/create-tag.dto.ts'
import type { UpdateTagDto } from './dto/update-tag.dto.ts'
import type { TagQueryDto } from './dto/tag-query.dto.ts'
import type { Tag } from './tags.repository.ts'

@Injectable()
export class TagsService {
  constructor(private tagsRepository: TagsRepository) {}

  async findAll(query: TagQueryDto) {
    return await this.tagsRepository.findAll(query)
  }

  async findOne(id: string): Promise<Tag> {
    const tag = await this.tagsRepository.findOne(id)

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`)
    }

    return tag
  }

  async create(data: CreateTagDto): Promise<Tag> {
    return await this.tagsRepository.create(data)
  }

  async update(id: string, data: UpdateTagDto): Promise<Tag> {
    const tag = await this.tagsRepository.update(id, data)

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`)
    }

    return tag
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.tagsRepository.delete(id)

    if (!deleted) {
      throw new NotFoundException(`Tag with ID ${id} not found`)
    }
  }
}
