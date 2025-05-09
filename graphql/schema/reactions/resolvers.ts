import { Comment, Like, PrismaClient, Post } from "../../../generated/prisma";
const prisma = new PrismaClient();

export const reactionResolvers = {
  Query: {
    getLikesForPost: async (_: any, { postID }: { postID: string }) => {
      const likes = await prisma.like.findMany({
        where: {
          postId: postID,
        },
        include: {
          owner: true,
        },
      });

      return likes as Like[];
    },
    getLikesForComment: async (
      _: any,
      { commentID }: { commentID: string }
    ) => {
      const likes = await prisma.like.findMany({
        where: {
          commentId: commentID,
        },
        include: {
          owner: true,
        },
      });
      return likes as Like[];
    },
    getLikesForStory: async (_: any, { storyID }: { storyID: string }) => {
      const likes = await prisma.like.findMany({
        where: {
          storyId: storyID,
        },
        include: {
          owner: true,
        },
      });
      return likes as Like[];
    },
    getPostsLikedByUser: async (_: any, { userID }: { userID: string }) => {
      const likes = await prisma.like.findMany({
        where: {
          ownerId: userID,
          postId: {
            not: null,
          },
        },
        include: {
          post: {
            include: {
              likes: true,
              comments: true,
              tags: true,
              owner: true,
            },
          },
        },
      });

      const posts = likes.map((like) => like.post).filter(Boolean);
      return posts as Post[];
    },
    getCommentsOnPost: async (_: any, { postID }: { postID: string }) => {
      const comments = await prisma.comment.findMany({
        where: {
          postId: postID,
        },
      });
      return comments as Comment[];
    },
    getRepliesOnStory: async (_: any, { storyID }: { storyID: string }) => {
      const comments = await prisma.comment.findMany({
        where: {
          storyId: storyID,
        },
      });
      return comments as Comment[];
    },
    getRepliesOnComment: async (
      _: any,
      { commentID }: { commentID: string }
    ) => {
      const replies = await prisma.comment.findMany({
        where: {
          isReply: true,
          id: commentID,
        },
      });
      return replies as Comment[];
    },
  },
  Comment: {},
};
