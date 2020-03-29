import { gql } from 'apollo-server';

export const queriesType = gql`
    type Query {
        user: User
        # channels: [Channel]
        # messages(channelId: ID!): [Message]
    }
`;