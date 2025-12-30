import { Request, Response } from "express"
import { postService } from "./post.service"

const createPost = async (req: Request, res: Response) => {
    // res.send("Create a new post")
    // console.log({ req, res });
    try {
        console.log(req.user);
        const result = await postService.createPost(req.body)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error: "Post creation failed",
            details: e
        })
    }
}

export const postController = {
    createPost
}