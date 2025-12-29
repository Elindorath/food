export { getDatabaseConfiguration };

export type DatabaseConfiguration = ReturnType<typeof getDatabaseConfiguration>;

const getDatabaseConfiguration = () => ({
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '') || 5432,
  username: process.env.POSTGRES_USERNAME ?? 'elindorath',
  password: process.env.POSTGRES_PASSWORD ?? 'password',
  database: process.env.POSTGRES_DATABASE ?? 'food',
  useTLS: process.env.POSTGRES_TLS === 'true',
  poolSize: 10,
});
