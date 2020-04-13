import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    email: String
    login: String
    firstName: String
    lastName: String
    birthDate: Date
    # photoUrl: String
    isVerified: Boolean
    createdAt: Date
    updatedAt: Date
  }
`;
