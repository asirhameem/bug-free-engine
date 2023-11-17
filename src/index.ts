import app from "./configs/express.config";
import AppDataSource from "./configs/orm.config";
import configs from "./configs";

AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  });

app.listen(configs.port, ()=> {
  console.log("App is listening on port: " + configs.port);
});
