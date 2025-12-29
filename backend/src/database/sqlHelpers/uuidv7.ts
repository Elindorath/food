import { sql } from 'drizzle-orm'

export function uuidv7() {
  return sql<string>`uuidv7()`
}
