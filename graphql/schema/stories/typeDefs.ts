import { gql } from "apollo-server-express";
export const storyTypeDefs = gql`
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

  type Highlight {
    id: ID!
    coverPhoto: String!
    title: String!
    owners: [HighlightOwner!]
    stories: [HighlightStory!]
  }

  type HighlightOwner {
    id: ID!
    highlightId: ID!
    userId: ID!
    highlight: Highlight!
    user: User!
  }
`;
