import { sql } from 'drizzle-orm'

// import { objectEntries } from 'src/common/lib/object/betterTypes.ts'

import type { SQL } from 'drizzle-orm'

import type { SQLExpression } from './types.ts'

export function jsonBuildObject<Shape extends { [key: string]: SQLExpression }>(
  shape: Shape
) {
  const sqlChunks: SQL[] = []

  for (const [key, value] of Object.entries(shape)) {
    sqlChunks.push(sql.join([sql.raw(`'${key}'`), sql`${value}`], sql`, `))
  }

  return sql<{
    [key in keyof Shape]: Shape[key] extends SQLExpression<infer Value>
      ? Value
      : never
  }>`json_build_object(${sql.join(sqlChunks, sql`, `)})`
}
