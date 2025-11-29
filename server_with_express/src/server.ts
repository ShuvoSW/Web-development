import express, { Request, Response } from "express"
import { Pool } from "pg"
// const express = require('express')

const app = express()
const port = 5000
// parse
app.use(express.json());
// app.use(express.urlencoded());

//DB
const pool = new Pool({
  connectionString: `postgresql://neondb_owner:npg_3SZgd0xytJVp@ep-morning-violet-a4q1knec-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
})

const initDB = async() => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NULL,
    age INT,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    )
    `)
}

initDB()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello next level developers')
})

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "API is working"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})