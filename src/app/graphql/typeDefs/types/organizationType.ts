import { gql } from 'apollo-server';

export const organizationType = gql`
  type Organization {
    id: ID!
    domain: String
  }
`;