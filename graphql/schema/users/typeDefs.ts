import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  # User Type Definition
  type User {
    id: ID!
    username: String!
    email: String!
    name: String
    profilePicture: String!
    bio: String
    createdAt: String! # Using String instead of DateTime for simplicity
    followers: [User!]! # Self-referencing relationship
    following: [User!]! # Self-referencing relationship
  }

  # Input types for mutations
  input CreateUserInput {
    username: String!
    email: String!
    name: String
    profilePicture: String!
    bio: String
  }

  input UpdateUserInput {
    name: String
    profilePicture: String
    bio: String
  }

  # Query definitions
  type Query {
    getAllUsers: [User!]
    getUserById(id: ID!): User
    searchUsers(username: String!): [User!]
  }

  # Mutation definitions
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
    followUser(followerId: ID!, followingId: ID!): Boolean!
    unfollowUser(followerId: ID!, followingId: ID!): Boolean!
  }
`;
