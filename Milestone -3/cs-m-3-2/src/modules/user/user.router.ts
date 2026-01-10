import { Request, Response, Router } from "express";
import { pool } from "../../database/db";

const router = Router()

router.post("/", async (req: Request, res: Response) => {
    // const body = req.body;
    // console.log(body);

    const {name, email, password} = req.body;

    const result = await pool.query(`
        INSERT INTO users(name, email,password) VALUES($1, $2, $3) RETURNING *
        `, [name, email, password])
        // console.log(result);
        res.status(201).json({
            success: true,
            message: "User created",
            data: result.rows[0]
        })
})

export const userRouter = router;
