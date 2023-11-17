import { DataSource } from "typeorm";
import configs from "./index";

const AppDataSource = new DataSource({
  type: "mysql",
  host: configs.db.host,
  port: configs.db.port,
  username: configs.db.user,
  password: configs.db.password,
  database: configs.db.name,
})

export default AppDataSource;
