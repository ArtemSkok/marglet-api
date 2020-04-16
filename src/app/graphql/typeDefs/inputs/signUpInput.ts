import { gql } from 'apollo-server';

export default gql`
  input SignUpInput {
    email: String!
    password: String!
    login: String
    firstName: String!
    lastName: String!
    birthDate: String
  }
`;
