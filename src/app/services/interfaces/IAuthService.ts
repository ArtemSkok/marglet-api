import { ISignUpMutationArgs, IAuthResponse, IAccessTokenData } from '../../models';

export interface IAuthService {
  signUp(input: ISignUpMutationArgs): Promise<IAuthResponse>;
  logIn(email: string, password: string): Promise<IAuthResponse>;
  logOut(id: string): Promise<boolean>;
  refreshAccessToken(accessToken: string, refreshToken: string): Promise<IAuthResponse>;
}