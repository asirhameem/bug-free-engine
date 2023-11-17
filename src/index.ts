import express, {Request, Response} from "express";
import configs from "./configs/index";
const app =express();

app.get('/', (req: Request, res: Response) => {
    res.send("endpoint is ok");
});

app.listen(3000, () => {
    console.log(configs);
    console.log("application listening on port 3000");
})
