import express, { Request, Response } from "express"
import { Pool } from "pg"

const app = express()

app.use(express.json());

const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_DVesdRHhK0M1@ep-quiet-pond-a83ihk48-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
});

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT null,
            email VARCHAR(100) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `)
    console.log("Database Connected");
}
initDB();

app.post("/users", async (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);
})

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "This is the server root route",
        path: req.path
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})