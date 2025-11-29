import express, { Request, Response } from "express"
// const express = require('express')
const app = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello next level developers')
})

// parse
app.use(express.json());
// app.use(express.urlencoded());

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