import { shield, allow } from 'graphql-shield';

import { isAuthenticated } from './isAuthenticated';

export const permissionsMidleware = shield({
  Query: {
    user: allow,
  },
  Mutation: {
    signUp: allow,
    logIn: allow,
    logOut: isAuthenticated,
    refreshAccessToken: allow,
    deleteUser: isAuthenticated,
    updateUser: isAuthenticated,
  },
});
