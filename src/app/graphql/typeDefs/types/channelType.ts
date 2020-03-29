import { gql } from 'apollo-server';

export const channelType = gql`
  type Channel {
    id: ID!
    name: String
    description: String
    isPrivate: Boolean
  }
`;