import { gql } from 'apollo-server';

export default gql`
  type Query {
    user(id: String): User
  }
`;