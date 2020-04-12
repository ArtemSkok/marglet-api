import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { environment } from '../../environments/environment';
import { IAccessTokenData } from '../models';

enum TokenType {
  REFRESH = 'REFRESH',
  AUTH = 'AUTH',
}

interface IJWT {
  tokenType: TokenType;
}

interface IAuthToken extends IJWT {
  user: IAccessTokenData;
  tokenType: TokenType.AUTH;
}

interface IRefreshToken extends IJWT {
  id: string;
  tokenType: TokenType.REFRESH;
}

export class JWTUtil {
  public static verifyAccessToken(token: string, ignoreExpiration: boolean = false): IAuthToken | null {
    try {
      if (token) {
        return jwt.verify(token, environment.auth.authTokenSecret, { ignoreExpiration }) as IAuthToken;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  public static generateAccessToken(user: IAccessTokenData): string {
    const payload: IAuthToken = {
      user,
      tokenType: TokenType.AUTH,
    };
    return jwt.sign(payload, environment.auth.authTokenSecret, { expiresIn: 3600 });
  }

  public static generateRefreshToken(): string {
    const payload: IRefreshToken = {
      id: uuidv4(),
      tokenType: TokenType.REFRESH,
    };

    return jwt.sign(payload, environment.auth.refreshTokenSecret);
  }

  public static generateTokenPair(user: IAccessTokenData): {
    accessToken: string,
    refreshToken: string
  } {
    const accessToken: string = this.generateAccessToken(user);
    const refreshToken: string = this.generateRefreshToken();

    return { accessToken, refreshToken };
  }
}
