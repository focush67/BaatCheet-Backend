import { Comment, Like, PrismaClient } from "../../../generated/prisma";
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
            mode: "insensitive",
          },
        },
      });
    },
  },

  Mutation: {
    createUser: async (_: any, { input }: { input: any }) => {
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
    posts: async (parent: any) => {
      const posts = await prisma.post.findMany({
        where: {
          ownerId: parent.id,
        },
      });
      return posts;
    },
    taggedPosts: async (parent: any) => {
      const posts = await prisma.tag.findMany({
        where: {
          referenceUserId: parent.id,
        },
        include: {
          post: true,
        },
      });
      const tagged = posts.map((tag) => tag.post).filter(Boolean);
      return tagged;
    },
    likes: async (parent: any) => {
      const liked = await prisma.like.findMany({
        where: {
          ownerId: parent.id,
        },
      });
      return liked as Like[];
    },
    comments: async (parent: any) => {
      const comments = await prisma.comment.findMany({
        where: {
          ownerId: parent.id,
        },
      });
      return comments as Comment[];
    },
    collections: async (parent: any) => {
      const collectionOwners = await prisma.collectionOwner.findMany({
        where: { userId: parent.id },
        include: {
          collection: {
            include: {
              posts: {
                include: {
                  post: true, // Include full post data
                },
              },
            },
          },
        },
      });

      const userCollections = collectionOwners.map((owner) => ({
        collection: owner.collection,
        posts: owner.collection.posts.map(
          (collectionPost) => collectionPost.post
        ),
      }));
      return userCollections;
    },
    highlights: async (parent: any) => {
      const highlightOwners = await prisma.highlightOwner.findMany({
        where: { userId: parent.id },
        include: {
          highlight: {
            include: {
              stories: {
                include: {
                  story: true, // Include full story data
                },
              },
            },
          },
        },
      });

      const highlights = highlightOwners.map((owner) => ({
        highlight: owner.highlight,
        stories: owner.highlight.stories.map(
          (highlightStory) => highlightStory.story
        ),
      }));
      return highlights;
    },
    stories: async (parent: any) => {
      const userStories = await prisma.story.findMany({
        where: { ownerId: parent.id },
        include: {
          likes: true,
          comments: {
            include: {
              owner: true,
              likes: true,
            },
          },
        },
      });
      return userStories;
    },
  },
};
