import { defineConfig } from 'drizzle-kit'

import { getDatabaseConfiguration } from './src/config/databaseConfiguration.ts'

const databaseConfiguration = getDatabaseConfiguration()

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schema/**/*',
  out: './.drizzle',
  dbCredentials: {
    host: databaseConfiguration.host,
    port: databaseConfiguration.port,
    user: databaseConfiguration.username,
    password: databaseConfiguration.password,
    database: databaseConfiguration.database,
    ssl: databaseConfiguration.useTLS,
  },
  introspect: {
    casing: 'camel',
  },
  verbose: true,
  strict: true,
})
