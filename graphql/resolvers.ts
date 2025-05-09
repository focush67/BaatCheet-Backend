import { userResolvers } from "./schema/users/resolvers";
import { postResolvers } from "./schema/posts/resolvers";
import { reactionResolvers } from "./schema/reactions/resolvers";
export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
    ...reactionResolvers.Query,
    _empty: () => "Placeholder",
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...reactionResolvers.Mutation,
    _empty: () => "Placeholder",
  },
  User: {
    ...userResolvers.User,
  },
  Comment: {
    ...reactionResolvers.Comment,
  },
};
