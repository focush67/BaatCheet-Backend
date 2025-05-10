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

  type Collection {
    id: ID!
    title: String!
    owners: [CollectionOwner!]
    posts: [CollectionPost!]
  }

  type CollectionOwner {
    id: ID!
    collectionId: String!
    userId: String!
    collection: Collection!
    user: User!
  }

  type CollectionPost {
    id: ID!
    collectionId: String!
    postId: String!
    colleciton: Collection!
    post: Post!
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
