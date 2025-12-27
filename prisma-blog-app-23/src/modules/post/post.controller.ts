import { Request, Response } from "express"

const createPost = (req: Request, res: Response) => {
    // res.send("Create a new post")
    console.log({ req, res });
}

export const postController = {
    createPost
}