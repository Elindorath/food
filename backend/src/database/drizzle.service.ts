import { Injectable } from '@nestjs/common'
import type { OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { schemaTables } from './schemaTables.ts'
import type { Configuration } from '../config/configuration.ts'

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool
  public db: ReturnType<typeof drizzle>

  constructor(private configService: ConfigService<Configuration>) {
    this.pool = new Pool({
      host: this.configService.getOrThrow('database.host', { infer: true }),
      port: this.configService.getOrThrow('database.port', { infer: true }),
      user: this.configService.getOrThrow('database.username', { infer: true }),
      password: this.configService.getOrThrow('database.password', { infer: true }),
      database: this.configService.getOrThrow('database.database', { infer: true }),
      ssl: this.configService.getOrThrow('database.useTLS', { infer: true })
        ? { rejectUnauthorized: false }
        : false,
      max: this.configService.getOrThrow('database.poolSize', { infer: true }),
    })

    this.db = drizzle(this.pool, {
      casing: 'snake_case',
      schema: schemaTables,
    })
  }

  async onModuleInit() {
    // Test connection
    await this.pool.query('SELECT 1')
  }

  async onModuleDestroy() {
    await this.pool.end()
  }
}
