import { inject, injectable } from 'inversify';

import { TYPES } from '../ioc/types';
import { exception } from '../decorators/exceptionDecorator';
import { IUsersService } from './interfaces/IUsersService';
import { IUpdateUserMutationArgs } from '../models';
import { UsersRepository, SessionsRepository } from '../repositories';
import { HashingUtil } from '../utils';

@injectable()
export class UsersService implements IUsersService {
  constructor(
    @inject(TYPES.UsersRepository) private readonly userRepository: UsersRepository,
    @inject(TYPES.SessionsRepository) private readonly sessionsRepository: SessionsRepository,
  ) { }

  @exception()
  async get(id: string) {
    return this.userRepository.findOne({ id });
  }

  @exception()
  async update(id: string, input: IUpdateUserMutationArgs) {
    const fieldsToUpdate: any = { ...input }; // TODO: Add typings

    if (input.password) {
      delete fieldsToUpdate.password;
      fieldsToUpdate.hashedPassword = await HashingUtil.hash(input.password);
    }

    const { result } = await this.userRepository.updateOne(
      { id },
      {
        $set: fieldsToUpdate
      });

    return Boolean(result.ok);
  }

  @exception()
  async delete(id: string) {
    const [
      { result: deleteUserRes },
      { result: deleteSessionRes }
    ] = await Promise.all([
      this.userRepository.deleteOne({ id }),
      this.sessionsRepository.deleteOne({ userId: id })
    ]);

    return Boolean(deleteUserRes.ok) && Boolean(deleteSessionRes.ok);
  }
}