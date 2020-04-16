import { gql } from 'apollo-server';

export default gql`
  input UpdateUserInput {
    email: String
    password: String
    login: String
    firstName: String
    lastName: String
    birthDate: String
  }
`;
