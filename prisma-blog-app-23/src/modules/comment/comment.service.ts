import { CommentStatus } from "../../../generated/prisma/enums";
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

const getCommentByAuthor = async (authorId: string) => {
//   console.log({authorId});
return await prisma.comment.findMany({
    where: {
        authorId
    },
    orderBy: {createdAt: "desc"},
    include: {
        post: {
            select: {
                id: true,
                title: true
            }
        }
    }
})
}

// 1. nijar comment delete korta parba
// login takte hobe
// tar nijar comment kina ata check korta hobe

const deleteComment = async(commentId: string, authorId: string) => {
    // console.log("delete comment");
    // console.log({commentId, authorId});
    const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    console.log(commentData);
    if (!commentData) {
        throw new Error("Your Provided input is invalid1")
    }

    return await prisma.comment.delete({
        where: {
            id: commentData.id
        }
    })
}

// authorId, commentId, updatedData
const updateComment = async (commentId: string, data: {content?: string, status?: CommentStatus}, authorId: string) => {
    // console.log({commentId, data, authorId});

     const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    console.log(commentData);
    if (!commentData) {
        throw new Error("Your Provided input is invalid1")
    }

    return await prisma.comment.update({
        where: {
            id: commentId,
            authorId
        },
        data
    })
}

export const CommentService = {
    createComment,
    getCommentById,
    getCommentByAuthor,
    deleteComment,
    updateComment
}