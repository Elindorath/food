import { sql } from 'drizzle-orm'

import type { SQL } from 'drizzle-orm'

import type { SQLExpression } from './types.ts'

export function coalesce<
  BaseType extends string | number | boolean,
  InputType extends BaseType | null,
  OutputType extends BaseType | null,
>(
  baseColumn: SQLExpression<InputType> | InputType,
  overrideColumn?: SQLExpression<OutputType> | OutputType
): SQL<InputType | OutputType> {
  return sql`coalesce(${baseColumn}, ${overrideColumn})`
}
