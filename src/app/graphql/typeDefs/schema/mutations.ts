import { gql } from 'apollo-server';

export const mutationsType = gql`
  type Mutation {
    updateUser(input: UpdateUserInput): Boolean
    deleteUser: Boolean
    signUp(input: SignUpInput): AuthResponse
    logIn(input: LogInInput): AuthResponse
    logOut: Boolean
    refreshAccessToken(input: RefreshAccessTokenInput): AuthResponse
  }
`;
