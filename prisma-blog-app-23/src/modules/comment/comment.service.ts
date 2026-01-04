const createComment = async(payload: {
    comment: string;
    authorId: string;
    postId: string;
    parentId?: string;
}) => {
    console.log("Create comment service!", payload);
};

export const CommentService = {
    createComment
}