import { sql } from 'drizzle-orm';

import type { ColumnsSelection } from 'drizzle-orm';
import type { SubqueryWithSelection } from 'drizzle-orm/pg-core';

export function subQueryColumn<T extends ColumnsSelection, R extends string>(
  subQuery: SubqueryWithSelection<T, R>,
  column: keyof T
) {
  return sql`${sql.raw(`"${subQuery._.alias}"`)}.${subQuery[column]}`;
}
