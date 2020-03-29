import { DocumentNode } from 'graphql';

import { mutationsType } from './mutations';
import { queriesType } from './queries';
import { subscriptionsType } from './subscriptions';

export const schema: DocumentNode[] = [
  // mutationsType,
  queriesType,
  // subscriptionsType
];