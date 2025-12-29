import type { AnyColumn, SQL } from 'drizzle-orm'

export type SQLExpression<T = unknown> =
  | SQL<T>
  | SQL.Aliased<T>
  | AnyColumn<{ data: T }>
