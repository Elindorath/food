import { Module } from '@nestjs/common'
import { TagsController } from './tags.controller.ts'
import { TagsService } from './tags.service.ts'
import { TagsRepository } from './tags.repository.ts'
import { DrizzleModule } from '../database/drizzle.module.ts'

@Module({
  imports: [DrizzleModule],
  controllers: [TagsController],
  providers: [TagsService, TagsRepository],
  exports: [TagsService],
})
export class TagsModule {}
