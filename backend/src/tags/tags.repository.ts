import { Injectable } from '@nestjs/common'
import { eq, and, sql, ilike, desc } from 'drizzle-orm'
import { DrizzleService } from '../database/drizzle.service.ts'
import { tagTable } from '../database/schema/tagTable.ts'
import type { CreateTagDto } from './dto/create-tag.dto.ts'
import type { UpdateTagDto } from './dto/update-tag.dto.ts'
import type { TagQueryDto } from './dto/tag-query.dto.ts'
import { unaccent } from '../database/sqlHelpers/unaccent.ts'

export type Tag = {
  id: string
  name: string
}

@Injectable()
export class TagsRepository {
  constructor(private drizzleService: DrizzleService) {}

  async findAll(query: TagQueryDto): Promise<{ tags: Tag[]; total: number }> {
    const { page, limit, q } = query

    const offset = (page - 1) * limit

    // Build where conditions
    const conditions = []

    // Text search
    if (q !== undefined && q !== '') {
      conditions.push(ilike(unaccent(tagTable.name), `%${q}%`))
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined

    // Get total count
    const totalResult = await this.drizzleService.db
      .select({ count: sql<number>`count(*)` })
      .from(tagTable)
      .where(whereClause)

    const total = totalResult[0]?.count ?? 0

    // Get tags
    const tags = await this.drizzleService.db
      .select({
        id: tagTable.id,
        name: tagTable.name,
      })
      .from(tagTable)
      .where(whereClause)
      .orderBy(desc(tagTable.name))
      .limit(limit)
      .offset(offset)

    return { tags, total }
  }

  async findOne(id: string): Promise<Tag | null> {
    const result = await this.drizzleService.db
      .select({
        id: tagTable.id,
        name: tagTable.name,
      })
      .from(tagTable)
      .where(eq(tagTable.id, id))
      .limit(1)

    if (result.length === 0 || result[0] === undefined) {
      return null
    }

    return result[0]
  }

  async create(data: CreateTagDto): Promise<Tag> {
    const [tag] = await this.drizzleService.db
      .insert(tagTable)
      .values({
        name: data.name,
      })
      .returning()

    if (!tag) {
      throw new Error('Failed to create tag')
    }

    return tag
  }

  async update(id: string, data: UpdateTagDto): Promise<Tag | null> {
    // Check if tag exists
    const existing = await this.drizzleService.db
      .select()
      .from(tagTable)
      .where(eq(tagTable.id, id))
      .limit(1)

    if (existing.length === 0) {
      return null
    }

    // Update tag
    if (data.name !== undefined) {
      const [updated] = await this.drizzleService.db
        .update(tagTable)
        .set({ name: data.name })
        .where(eq(tagTable.id, id))
        .returning()

      if (!updated) {
        return null
      }

      return updated
    }

    return existing[0] as Tag
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.drizzleService.db
      .delete(tagTable)
      .where(eq(tagTable.id, id))
      .returning()

    return result.length > 0
  }
}
