import { rule } from 'graphql-shield';

import { IAuthContext } from '../../models';

export const isAuthenticated = rule({ cache: 'contextual' })(
  (parent: any, args: any, context: IAuthContext) => context.user != null
);
