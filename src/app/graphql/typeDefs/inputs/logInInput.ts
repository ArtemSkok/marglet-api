import { gql } from 'apollo-server';

export const logInInput = gql`
  input LogInInput {
    email: String
    password: String
  }
`;