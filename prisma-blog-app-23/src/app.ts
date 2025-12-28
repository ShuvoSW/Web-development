import express, { Application } from "express"
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { Request } from "express";
import { Response } from "express";

const app: Application = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/posts", postRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
})

export default app;