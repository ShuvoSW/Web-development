import { prisma } from "../../lib/prisma";

const createComment = async (payload: {
    content: string;
    authorId: string;
    postId: string;
    parentId?: string;
}) => {
    // console.log("Create comment service!", payload);
    await prisma.post.findUniqueOrThrow({
        where: {
             id: payload.postId
        }
    })


    if(payload.parentId){
        await prisma.comment.findUniqueOrThrow({
            where: {
                id: payload.parentId
            }
        })
    }
    return await prisma.comment.create({
        data: payload
    })
};

const getCommentById = async (id: string) => {
    // console.log("Comment id: ", commentId);
    return await prisma.comment.findUnique({
        where: {
            id
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true,
                    views: true
                }
            }
        }
    })
}

export const CommentService = {
    createComment,
    getCommentById
}