import { gql } from 'apollo-server';

export default gql`
  type Message {
    id: ID!
    text: String
    createdTimestamp: Date
    isEdited: Boolean
    lastEditedTimestamp: Date
    isDeleted: Boolean
    deletedTimestamp: Date
    readBy: [User]
    author: User
    sender: User
  }
`;