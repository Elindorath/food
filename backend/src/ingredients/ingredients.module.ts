import { Module } from '@nestjs/common'
import { IngredientsController } from './ingredients.controller.ts'
import { IngredientsService } from './ingredients.service.ts'
import { IngredientsRepository } from './ingredients.repository.ts'
import { DrizzleModule } from '../database/drizzle.module.ts'

@Module({
  imports: [DrizzleModule],
  controllers: [IngredientsController],
  providers: [IngredientsService, IngredientsRepository],
  exports: [IngredientsService],
})
export class IngredientsModule {}
