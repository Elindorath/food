import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DrizzleModule } from './database/drizzle.module.ts'
import { getConfiguration } from './config/configuration.ts'
import { RecipesModule } from './recipes/recipes.module.ts'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      cache: true,
      load: [getConfiguration],
      isGlobal: true,
    }),
    DrizzleModule,
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
