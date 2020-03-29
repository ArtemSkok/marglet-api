import { gql } from 'apollo-server';

export const subscriptionsType = gql`
    type Subscription {
        # messageAdded(channelId: ID!): Message
    }
`;
