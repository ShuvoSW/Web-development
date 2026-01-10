import express, { Request, Response } from "express"
import { userRouter } from "./modules/user/user.router";
import { initDB } from "./database/db";
import { authRouter } from "./modules/auth/auth.router";

const app = express()

app.use(express.json());


initDB();

app.use("/api/v1/users", userRouter)

app.use("/api/v1/auth", authRouter)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "This is the server root route",
        path: req.path
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})