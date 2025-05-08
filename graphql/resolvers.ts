import { userResolvers } from "./schema/users/resolvers";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    _empty: () => "Placeholder",
  },
  Mutation: {
    ...userResolvers.Mutation,
    _empty: () => "Placeholder",
  },
  User: {
    ...userResolvers.User,
  },
};
