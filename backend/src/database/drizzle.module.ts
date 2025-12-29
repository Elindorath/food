import { Module, Global } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DrizzleService } from './drizzle.service.ts'

@Global()
@Module({
  imports: [ConfigModule],
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleModule {}
