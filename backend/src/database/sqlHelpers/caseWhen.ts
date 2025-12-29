import { sql } from 'drizzle-orm';

import type { SQL } from 'drizzle-orm';

import type { SQLExpression } from './types.ts';

export class SQLCaseWhen<T = never> {
  private cases: SQL<T>;

  constructor(init?: SQL<T> | SQLCaseWhen<T>) {
    this.cases = init
      ? sql`${init instanceof SQLCaseWhen ? init.cases : init}`
      : sql<T>`case`;
  }

  when<Then>(
    whenExpression: SQLExpression,
    thenExpression: SQLExpression<Then>
  ) {
    this.cases.append(sql` when ${whenExpression} then ${thenExpression}`);

    return this as SQLCaseWhen<T | Then>;
  }

  else<Else>(elseExpression: SQLExpression<Else>) {
    return sql<T | Else>`${this.cases} else ${elseExpression} end`;
  }

  elseNull() {
    return sql<T | null>`${this.cases} end`;
  }
}

export function caseWhen<Then>(
  whenExpression: SQLExpression,
  thenExpression: SQLExpression<Then>
) {
  return new SQLCaseWhen().when(whenExpression, thenExpression);
}
