import { mergeTypeDefs } from "@graphql-tools/merge";
import { userTypeDefs } from "./schema/users/typeDefs";
import { gql } from "apollo-server-express";

export const typeDefs = mergeTypeDefs([
  gql`
    scalar DateTime
    type Query {
      _empty: String
    }
    type Mutation {
      _empty: String
    }
  `,
  userTypeDefs,
]);
