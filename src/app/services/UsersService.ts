import { inject, injectable } from 'inversify';

import { TYPE } from '../ioc/types';
import { exception } from '../decorators/exceptionDecorator';
import { IUsersService } from './interfaces/IUsersService';
import { UsersRepository } from '../repositories/UsersRepository';

@injectable()
export class UsersService implements IUsersService {
    constructor(
        @inject(TYPE.UsersRepository) private readonly repository: UsersRepository
    ) { }

    @exception()
    public get(id: string) {
        return this.repository.findOne({ id });
    }
}