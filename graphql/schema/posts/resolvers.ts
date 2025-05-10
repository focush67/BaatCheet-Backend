import { PrismaClient } from "../../../generated/prisma";
const prisma = new PrismaClient();

export const postResolvers = {
  Query: {
    getAllPosts: async () => {
      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include: {
          likes: true,
          comments: true,
          tags: true,
        },
      });

      return posts;
    },

    getPostById: async (_: any, { postID }: { postID: string }) => {
      const post = await prisma.post.findUnique({
        where: {
          id: postID,
        },
        include: {
          likes: true,
          comments: true,
          tags: true,
        },
      });
      return post;
    },

    getPostsForUser: async (_: any, { userID }: { userID: string }) => {
      const posts = await prisma.post.findMany({
        where: {
          ownerId: userID,
        },
        include: {
          likes: true,
          comments: true,
          tags: true,
        },
      });

      return posts;
    },
  },

  Mutation: {
    createPost: async (
      _: any,
      {
        input,
      }: {
        input: {
          coverPhoto: string;
          caption: string;
          ownerId: string;
        };
      }
    ) => {
      const newPost = await prisma.post.create({
        data: {
          coverPhoto: input.coverPhoto,
          caption: input.caption,
          ownerId: input.ownerId,
        },
      });

      return newPost;
    },

    deletePost: async (_: any, { input }: { input: any }) => {
      const deletion = await prisma.post.delete({
        where: {
          id: input.postID,
        },
      });
      if (deletion) {
        return true;
      } else {
        return false;
      }
    },
  },

  Post: {},
};
