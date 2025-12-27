import { Request, Response } from "express"
import { postService } from "./post.service"
import { Post } from "../../../generated/prisma/client"

const createPost = (req: Request, res: Response) => {
    // res.send("Create a new post")
    // console.log({ req, res });
    try{
        const result = await postService.createPost(req.body as Omit<Post, "id" | "createdAt" | "updatedAt">)
    }
}

export const postController = {
    createPost
}