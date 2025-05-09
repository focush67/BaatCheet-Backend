import { gql } from "apollo-server-express";

export const postTypeDefs = gql`
  type Post {
    id: ID!
    coverPhoto: String!
    caption: String
    createdAt: String
    ownerId: ID!
    owner: User
    likes: [Like!]
    comments: [Comment!]
    tags: [Tag!]
    savedInCollections: [SavedInCollection!]
  }

  type SavedInCollection {
    collection: [Collection!]
    owners: [User!]
  }

  input CreatePostInput {
    coverPhoto: String!
    caption: String
    ownerId: String!
  }

  type WallPost {
    id: ID!
    coverPhoto: String!
    caption: String
    createdAt: String
    owner: User!
    likes: [Like!]
    comments: [Comment!]
    tags: [Tag!]
  }

  type Query {
    getAllPosts: [WallPost!]
    getPostById(postID: String!): [WallPost!]
    getPostsForUser(userID: ID!): [WallPost!]
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    deletePost(postID: String!): Boolean
  }
`;
