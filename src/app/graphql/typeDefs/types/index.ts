import { DocumentNode } from 'graphql';

import { channelType } from './channelType';
import { messageType } from './messageType';
import { organizationType } from './organizationType';
import { userType } from './userType';
import { authResponseType }from './authResponseType';

export const types: DocumentNode[] = [
  // channelType,
  // messageType,
  // organizationType,
  userType,
  authResponseType
];