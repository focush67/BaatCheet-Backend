import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    name: String
    profilePicture: String!
    bio: String
    createdAt: String!
    followers: [User!]
    following: [User!]
    likes: [Like!]
    comments: [Comment!]
    collections: [UserCollection!]
    highlights: [HighlightOwner!]
    stories: [UserStory!]
    posts: [Post!]
    taggedPosts: [Tag!]
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

  type UserCollection {
    collection: Collection!
    posts: [Post!]
  }

  type UserHighlight {
    highlight: Highlight!
    stories: [Story!]
  }

  type UserStory {
    id: ID!
    content: String!
    createdAt: String!
    likes: [Like!]
    comments: [Comment!]
  }

  type Highlight {
    id: ID!
    coverPhoto: String!
    title: String!
    owners: [HighlightOwner!]
    stories: [HighlightStory!]
  }

  type Story {
    id: ID!
    content: String!
    ownerId: String!
    owner: User!
    highlights: [HighlightStory!]
    likes: [Like!]
    comments: [Comment!]
  }

  type HighlightStory {
    id: ID!
    highlightId: String!
    storyId: String!
    highlight: Highlight!
    story: Story!
  }

  type HighlightOwner {
    id: ID!
    highlightId: ID!
    userId: ID!
    highlight: Highlight!
    user: User!
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
