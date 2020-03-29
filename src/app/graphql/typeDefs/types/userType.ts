import { gql } from 'apollo-server';

export const userType = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    displayName: String
    birthDate: Date
    email: String
    photoUrl: String
    isVerified: Boolean
    createdAt: Date
    updatedAt: Date
  }
`;
