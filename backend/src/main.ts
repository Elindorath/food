import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import type { NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module.ts'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import type { Configuration } from './config/configuration.ts'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get<ConfigService<Configuration>>(ConfigService)
  const port = configService.getOrThrow('app.port', { infer: true })

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Food Recipe API')
    .setDescription('API for managing recipes, ingredients and tags')
    .setVersion('1.0')
    .addTag('ingredients', 'Ingredients management')
    .addTag('recipes', 'Recipes management')
    .addTag('tags', 'Tags management')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Food Recipe API Documentation',
  })

  await app.listen(port, '0.0.0.0')
  console.log(`Application is running on: http://localhost:${port}`)
  console.log(`Swagger documentation available at: http://localhost:${port}/api/docs`)
}

void bootstrap()
