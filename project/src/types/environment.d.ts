export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_USER : string;
      DB_HOST : string;
      DB_DATABASE : string;
      DB_PASSWORD : string;
      DB_PORT : number;
      HASURA_GRAPHQL_DATABASE_URL : string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}