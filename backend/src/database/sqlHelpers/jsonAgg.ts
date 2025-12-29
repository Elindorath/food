import { sql } from 'drizzle-orm'

import type { SQLExpression } from './types.ts'

export function jsonAgg<Type>(
  sqlExpression: SQLExpression<Type>,
  sortExpressions?: SQLExpression[]
) {
  return sql<
    Type[]
  >`json_agg(${sqlExpression}${sortExpressions ? sql` order by ${sql.join(sortExpressions, sql`, `)}` : sql``})`
}
