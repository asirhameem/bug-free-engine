import dotenv from 'dotenv'
import path from 'path'
import {DatabaseConfig} from "../interfaces/config.interface";

dotenv.config({
  path: path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
})

const db: DatabaseConfig = {
  host: process.env.DATABASE_HOST ?? '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  name: process.env.DATABASE_NAME ?? 'bug_free',
  user: process.env.DATABASE_USER ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? 'root',
};
export default {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT ?? 8080,
  salt: process.env.NODE_SALT ?? 10,
  db,
  jwt: {
    secret: process.env.JWT_SECRET ?? 'my-app-secret',
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN ?? "36000",
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
}
