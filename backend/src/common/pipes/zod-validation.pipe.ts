import { Injectable, BadRequestException } from '@nestjs/common'
import type { PipeTransform } from '@nestjs/common'
import type { ZodError, ZodType } from 'zod'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value)

      return parsedValue
    } catch (error) {
      const zodError = error as ZodError

      throw new BadRequestException({
        message: 'Validation failed',
        errors: zodError.issues.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      })
    }
  }
}
