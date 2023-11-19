import express, {Request, Response} from 'express';
import routers from "../routers";
import cookieParser from "cookie-parser"
import {createClient} from "redis";
import session from "express-session";
import configs from "./index";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin : ['http://localhost:3000'],
}

app.use(cors(corsOptions));

const redisClient = createClient({
  url: 'redis://redis:6379'
});
redisClient.connect().catch(console.error);

// todo: Initialize redis store with connect-redis


app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: configs.jwt.secret,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 10,
  },
}));

// Routes - you would define your routes here
app.use('/v1', routers);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello I am working !!')
})


export default app;