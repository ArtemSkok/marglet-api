import { gql } from 'apollo-server';

export default gql`
  input RefreshAccessTokenInput {
    accessToken: String
    refreshToken: String
  }
`;