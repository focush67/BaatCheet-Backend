import { gql } from "apollo-server-express";

export const reactionTypeDefs = gql`
  type Like {
    id: ID!
    postId: ID
    storyId: ID
    ownerId: ID
    commentId: ID
    owner: User!
    post: Post
    story: Story
    comment: Comment
  }

  type Comment {
    id: ID!
    postId: ID
    storyId: ID
    content: String!
    ownerId: ID!
    isReply: Boolean
    replyToId: ID
    post: Post
    story: Story
    owner: User
    replyTo: Comment
    likes: [Like!]
    replies: [Comment!]
  }

  type Tag {
    id: ID!
    postId: ID!
    referenceUserId: ID!
    referenceUser: User!
    post: Post!
  }

  type Query {
    getLikesForPost(postID: ID!): [Like!]
    getLikesForComment(commentID: ID!): [Like!]
    getLikesForStory(storyID: ID!): [Like!]
    getPostsLikedByUser(userID: ID!): [Post!]

    getCommentsOnPost(postID: ID!): [Comment!]
    getRepliesOnStory(storyID: ID!): [Comment!]
    getRepliesOnComment(commentID: ID!): [Comment!]
  }

  type Mutation {
    addLikeToStory(storyID: ID!, ownerID: ID!): Boolean
    removeLikeFromStory(storyID: ID!, ownerID: ID!): [Like!]

    addLikeToPost(postID: ID!, ownerID: ID!): Boolean
    removeLikeFromPost(postID: ID!, ownerID: ID!): [Like!]

    addLikeToComment(commentID: ID!, ownerID: ID!): Boolean
    removeLikeFromComment(commentID: ID!, ownerID: ID!): [Like!]
  }
`;
