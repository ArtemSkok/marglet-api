import { gql } from 'apollo-server';

export default gql`
  input LogInInput {
    email: String!
    password: String!
  }
`;