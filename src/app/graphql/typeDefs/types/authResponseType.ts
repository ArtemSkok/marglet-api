import { gql } from 'apollo-server';

export const authResponseType = gql`
  type AuthResponse {
    userId: String
    accessToken: String
    refreshToken: String
  }
`;