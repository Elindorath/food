import { Module } from '@nestjs/common'
import { RecipesController } from './recipes.controller.ts'
import { RecipesService } from './recipes.service.ts'
import { RecipesRepository } from './recipes.repository.ts'
import { DrizzleModule } from '../database/drizzle.module.ts'

@Module({
  imports: [DrizzleModule],
  controllers: [RecipesController],
  providers: [RecipesService, RecipesRepository],
  exports: [RecipesService],
})
export class RecipesModule {}
