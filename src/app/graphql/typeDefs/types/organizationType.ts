import { gql } from 'apollo-server';

export default gql`
  type Organization {
    id: ID!
    domain: String
  }
`;