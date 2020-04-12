import { inject, injectable } from 'inversify';
import { AuthenticationError } from 'apollo-server';

import { TYPES } from '../ioc/types';
import { exception } from '../decorators/exceptionDecorator';
import { IAuthService } from './interfaces/IAuthService';
import { ISignUpMutationArgs, IAccessTokenData } from '../models';
import { User, Session } from '../entities';
import { HashingUtil, JWTUtil } from '../utils';
import { UsersRepository, SessionsRepository } from '../repositories';

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject(TYPES.UsersRepository) private readonly userRepository: UsersRepository,
    @inject(TYPES.SessionsRepository) private readonly sessionsRepository: SessionsRepository,
  ) { }

  @exception()
  async signUp(input: ISignUpMutationArgs) {
    const existingUser: User = await this.userRepository.findOne({ email: input.email });

    if (existingUser) {
      throw new AuthenticationError('User with this email already exists');
    }

    const hashedPassword: string = await HashingUtil.hash(input.password);
    const user = new User({
      email: input.email,
      hashedPassword,
      firstName: input.firstName,
      lastName: input.lastName,
      login: input.login,
      birthDate: input.birthDate
    });

    const { accessToken, refreshToken } = JWTUtil.generateTokenPair({ id: user.id, email: user.email });

    const session = new Session({
      userId: user.id,
      refreshToken
    });

    await Promise.all([
      this.userRepository.insertOne(user),
      this.sessionsRepository.insertOne(session)
    ]);

    return { userId: user.id, accessToken, refreshToken };
  }

  @exception()
  async logIn(email: string, password: string) {
    const user: User = await this.userRepository.findOne({ email });

    if (!user) {
      throw new AuthenticationError('User with this email does not exist');
    }

    const isValidPassword = await HashingUtil.compare(password, user.hashedPassword);

    if (!isValidPassword) {
      throw new AuthenticationError('Invalid password');
    }

    const { accessToken, refreshToken } = JWTUtil.generateTokenPair({ id: user.id, email });

    const session = new Session({
      userId: user.id,
      refreshToken
    });

    await this.sessionsRepository.upsertOne(
      { userId: user.id },
      {
        $set: {
          ...session
        }
      }
    );

    return { userId: user.id, accessToken, refreshToken };
  }

  @exception()
  async logOut(userId: string) {
    await this.sessionsRepository.deleteOne({ userId });
    return true;
  }

  @exception()
  async refreshAccessToken(accessToken: string, refreshToken: string) {
    const parsedAccessToken = JWTUtil.verifyAccessToken(accessToken, true);

    if (!parsedAccessToken) {
      throw new AuthenticationError('Invalid access-token');
    }

    const { user } = parsedAccessToken;
    const session = await this.sessionsRepository.findOne({ userId: user.id });

    if (!session) {
      throw new AuthenticationError('Session does not exist');
    }
    if (session.refreshToken !== refreshToken) {
      throw new AuthenticationError('Invalid refresh token');
    }

    const newTokensPair = JWTUtil.generateTokenPair({ id: user.id, email: user.email });

    await this.sessionsRepository.updateOne(
      { userId: user.id },
      {
        $set: {
          refreshToken,
        }
      }
    );

    return {
      userId: user.id,
      accessToken: newTokensPair.accessToken,
      refreshToken: newTokensPair.refreshToken
    };
  }
}