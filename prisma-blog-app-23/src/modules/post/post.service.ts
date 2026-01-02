import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt" | 'authorId'>, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    })
    return result
}

const getAllPost = async ({
    search,
    tags
}: {
    search: string | undefined,
    tags: string[] | []
}) => {

    const andConditions = []

    if(search) {
        andConditions.push({ OR: [
                {
                    title: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    content: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    tags: {
                        has: search 
                    }
                }
            ]})
    }

    const allPost = await prisma.post.findMany({
        where: {
          AND: [ // AND: [false, tags]
             
            {tags: {
                hasEvery: tags as string[]
            }}
          ]
        }
    })
    return allPost;
}

export const postService = {
    createPost,
    getAllPost
}