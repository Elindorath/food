import { sql } from 'drizzle-orm'

import type { SQLExpression } from './types.ts'

export function boolAnd(sqlExpression: SQLExpression<boolean>) {
  return sql<boolean>`bool_and(${sqlExpression})`
}
