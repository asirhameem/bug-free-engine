import { DataSource } from "typeorm";
import configs from "./index";

const AppDataSource = new DataSource({
  type: "mysql",
  host: configs.db.host ?? '127.0.0.1',
  port: configs.db.port ?? '3306',
  username: configs.db.user ?? 'root',
  password: configs.db.password ?? 'root',
  database: configs.db.name ?? 'bug-free',
  entities: ["src/entities/*{.ts,.js}"],
  synchronize: true,
  logging: true,
  migrations: ["src/migrations/**/*{.ts,.js}"],
})

export default AppDataSource;
