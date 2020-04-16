import { gql } from 'apollo-server';

export default gql`
  type AuthResponse {
    userId: String
    accessToken: String
    refreshToken: String
  }
`;