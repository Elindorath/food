import { bindIfParam, sql } from 'drizzle-orm';

import type { BinaryOperator, SQL, SQLWrapper } from 'drizzle-orm';

export const eqAny: BinaryOperator = (
  left: SQLWrapper,
  right: unknown
): SQL => {
  return sql`${left} = ANY(${bindIfParam(right, left)})`;
};
