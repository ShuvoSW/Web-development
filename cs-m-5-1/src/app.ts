import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';


const app: Express = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1", routes)

export default app;
  
