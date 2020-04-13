import {
  IAuthContext,
  ISignUpMutationArgs,
  ILogInMutationArgs,
  IRefreshAccessTokenMutationArgs
} from '../../models';
import { IAuthService } from '../../services/interfaces/IAuthService';

export const authResolver = (authService: IAuthService) => ({
  Mutation: {
    signUp: async (_, { input }: { input: ISignUpMutationArgs }) =>
      authService.signUp(input),

    logIn: async (_, { input }: { input: ILogInMutationArgs }) =>
      authService.logIn(input.email, input.password),

    logOut: async (_, _args: void, { user }: IAuthContext) =>
      authService.logOut(user.id),

    refreshAccessToken: async (_, { input }: { input: IRefreshAccessTokenMutationArgs }) =>
      authService.refreshAccessToken(input.accessToken, input.refreshToken),
  }
});
