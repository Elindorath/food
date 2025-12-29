import { getDatabaseConfiguration } from "./databaseConfiguration.ts";

export { getConfiguration };

export type Configuration = ReturnType<typeof getConfiguration>;

const getConfiguration = () => ({
  env: process.env.ENV ?? 'development',
  app: {
    port: parseInt(process.env.PORT ?? '9000'),
    name: 'food',
  },
  database: getDatabaseConfiguration(),
});
