import { gql } from 'apollo-server';

export const refreshAccessTokenInput = gql`
  input RefreshAccessTokenInput {
    accessToken: String
    refreshToken: String
  }
`;