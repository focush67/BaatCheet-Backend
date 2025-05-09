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
    addLikeToStory(storyID: ID!): Boolean
    removeLikeFromStory(storyID: ID!): [Like!]

    addLikeToPost(postID: ID!): Boolean
    removeLikeFromPost(postID: ID!): [Like!]

    addLikeToComment(commentID: ID!): Boolean
    removeLikeFromComment(commentID: ID!): [Like!]
  }
`;
