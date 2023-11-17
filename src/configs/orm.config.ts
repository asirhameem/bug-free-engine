import dotenv from "dotenv";
dotenv.config();

module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'bug_free',
  port: process.env.DATABASE_PORT || 3306,
  charset: 'utf8',
  driver: 'mysql',
  synchronize: false,
  entities: process.env.NODE_ENV !== 'production' ? ['**/**.entity.ts'] : ['dist/**/*.entity.js'],
  logging: process.env.NODE_ENV !== 'production' ? 'all' : 'error',
  migrations: process.env.NODE_ENV !== 'production' ? ['src/migrations/*.ts'] : ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  connectTimeout: 30000,
  acquireTimeout: 30000
};