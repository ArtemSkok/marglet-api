import { gql } from 'apollo-server';

export default gql`
  type Channel {
    id: ID!
    name: String
    description: String
    isPrivate: Boolean
  }
`;