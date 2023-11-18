import express, {Request, Response} from 'express';
import routers from "../routers";


const app = express();

// Routes - you would define your routes here
app.use('/v1', routers);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am working !!')
})

export default app;