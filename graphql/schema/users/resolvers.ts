import { PrismaClient } from "../../../generated/prisma";
const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    getAllUsers: async () => {
      return await prisma.user.findMany();
    },
    getUserById: async (_: any, { id }: { id: string }) => {
      return await prisma.user.findUnique({
        where: { id },
      });
    },
    searchUsers: async (_: any, { username }: { username: string }) => {
      return await prisma.user.findMany({
        where: {
          username: {
            contains: username,
            mode: "insensitive", // Case insensitive search
          },
        },
      });
    },
  },
  Mutation: {
    createUser: async (_: any, { input }: { input: any }) => {
      console.log("Input", input);
      try {
        const response = await prisma.user.create({
          data: input,
        });
        return response;
      } catch (error: any) {
        console.error("Prisma error in createUser:", error.message);
        throw new Error("Failed to create user. Check console for details.");
      }
    },

    updateUser: async (_: any, { id, input }: { id: string; input: any }) => {
      return await prisma.user.update({
        where: { id },
        data: input,
      });
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      await prisma.user.delete({
        where: { id },
      });
      return true;
    },
    followUser: async (
      _: any,
      { followerId, followingId }: { followerId: string; followingId: string }
    ) => {
      await prisma.follow.create({
        data: {
          sourceId: followerId,
          targetId: followingId,
        },
      });
      return true;
    },
    unfollowUser: async (
      _: any,
      { followerId, followingId }: { followerId: string; followingId: string }
    ) => {
      await prisma.follow.deleteMany({
        where: {
          sourceId: followerId,
          targetId: followingId,
        },
      });
      return true;
    },
  },

  // FIELD RESOLVERS (for relationships)
  User: {
    followers: async (parent: any) => {
      const follows = await prisma.follow.findMany({
        where: { targetId: parent.id },
        include: { follower: true },
      });
      return follows.map((f) => f.follower);
    },
    following: async (parent: any) => {
      const follows = await prisma.follow.findMany({
        where: { sourceId: parent.id },
        include: { following: true },
      });
      return follows.map((f) => f.following);
    },
  },
};
