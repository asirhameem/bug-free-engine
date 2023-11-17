import express, {Request, Response} from 'express';


const app = express();

// Routes - you would define your routes here
app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am working !!')
})

export default app;