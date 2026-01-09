import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';

const app: Express = express()

app.use(
    cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
})
);

// betters auth routes
app.all("/api/v1/auth/*splat", toNodeHandler(auth));

app.use(express.json())

async function createAdmin() {
    await auth.api.createUser({
        body: {
           name: "Shuvo",
           email: "shuvomajumder3369@gmail.com",
           password: "123456",
           role: "admin"
        }
    })
}
// createAdmin() // run once to create admin user or seedAdmin

app.use("/api/v1", routes)

export default app;
  
// branch setup