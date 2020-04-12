import { gql } from 'apollo-server';

export const queriesType = gql`
  type Query {
    user(id: String): User
  }
`;