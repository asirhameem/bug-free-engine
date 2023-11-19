import app from "./configs/express.config";
import AppDataSource from "./configs/orm.config";
import dotenv from "dotenv";
import configs from "./configs";
import path from "path";
import cors from "cors";

dotenv.config({
  path: path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
})
AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  });

app.use(cors())
app.listen(configs.port, ()=> {
  console.log("App is listening on port: " + configs.port);
});
