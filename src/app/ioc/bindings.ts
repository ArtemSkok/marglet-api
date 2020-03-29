import { interfaces, AsyncContainerModule } from 'inversify';

import { TYPE } from './types';
import { MongoDBProviderFactory } from '../factories/MongoDBProviderFactory';
import { createRepository } from '../factories/RepositoryFactory';
import { UsersRepository } from '../repositories/UsersRepository';
import { UsersService } from '../services/UsersService';
import { IUsersService } from '../services/interfaces/IUsersService';
import { environment } from '../../environments/environment';

export const bindings = new AsyncContainerModule(async (bind: interfaces.Bind) => {
    const database = await new MongoDBProviderFactory().create();

    const usersRepository = createRepository(UsersRepository, database, environment.mongodb.collectionsNames.users);

    bind<UsersRepository>(TYPE.UsersRepository).toConstantValue(usersRepository);
    bind<IUsersService>(TYPE.UsersService).to(UsersService);
});
