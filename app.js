import express from 'express'
import Userrouter from './routes/user.js';
import Datarouter from './routes/data.js'
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import { config } from 'dotenv';

export const app = express();

config({
    path: "./data/config.env",
  });

app.use(express.json());
app.use(cookieParser());

app.use(Userrouter);
app.use(Datarouter);
app.use(errorMiddleware);