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
  Mutation: {
    addLikeToStory: async (
      _: any,
      { storyID, ownerID }: { storyID: string; ownerID: string }
    ) => {
      try {
        await prisma.like.upsert({
          where: {
            ownerId_storyId: {
              ownerId: ownerID,
              storyId: storyID,
            },
          },
          create: {
            storyId: storyID,
            ownerId: ownerID,
          },
          update: {},
        });
        return true;
      } catch {
        return false;
      }
    },

    removeLikeFromStory: async (
      _: any,
      { storyID, ownerID }: { storyID: string; ownerID: string }
    ) => {
      const deleted = await prisma.like.deleteMany({
        where: {
          storyId: storyID,
          ownerId: ownerID,
        },
      });
      return deleted.count > 0;
    },

    addLikeToPost: async (
      _: any,
      { postID, ownerID }: { postID: string; ownerID: string }
    ) => {
      try {
        await prisma.like.upsert({
          where: {
            ownerId_postId: {
              ownerId: ownerID,
              postId: postID,
            },
          },
          create: {
            postId: postID,
            ownerId: ownerID,
          },
          update: {},
        });
        return true;
      } catch {
        return false;
      }
    },

    removeLikeFromPost: async (
      _: any,
      { postID, ownerID }: { postID: string; ownerID: string }
    ) => {
      const deleted = await prisma.like.deleteMany({
        where: {
          postId: postID,
          ownerId: ownerID,
        },
      });
      return deleted.count > 0;
    },

    addLikeToComment: async (
      _: any,
      { commentID, ownerID }: { commentID: string; ownerID: string }
    ) => {
      try {
        await prisma.like.upsert({
          where: {
            ownerId_commentId: {
              ownerId: ownerID,
              commentId: commentID,
            },
          },
          create: {
            commentId: commentID,
            ownerId: ownerID,
          },
          update: {},
        });
        return true;
      } catch {
        return false;
      }
    },

    removeLikeFromComment: async (
      _: any,
      { commentID, ownerID }: { commentID: string; ownerID: string }
    ) => {
      const deleted = await prisma.like.deleteMany({
        where: {
          commentId: commentID,
          ownerId: ownerID,
        },
      });
      return deleted.count > 0;
    },
  },
  Comment: {},
};
