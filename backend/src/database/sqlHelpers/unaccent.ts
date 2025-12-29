import { sql } from 'drizzle-orm';

import type { Column, SQL } from 'drizzle-orm';

export const unaccent = (
  column: Column | SQL.Aliased | SQL | string
): SQL<string> => {
  return sql`UNACCENT(${column})`;
};
