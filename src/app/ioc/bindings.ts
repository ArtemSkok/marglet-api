import { interfaces, AsyncContainerModule } from 'inversify';

import { TYPES } from './types';
import { MongoDBProviderFactory } from '../factories/MongoDBProviderFactory';
import { createRepository } from '../factories/RepositoryFactory';
import { IUsersService, UsersService, AuthService, IAuthService } from '../services';
import { environment } from '../../environments/environment';
import { SessionsRepository, UsersRepository } from '../repositories';

export const bindings = new AsyncContainerModule(async (bind: interfaces.Bind) => {
  const database = await new MongoDBProviderFactory().create();

  const usersRepository = createRepository(UsersRepository, database, environment.mongodb.collectionsNames.users);
  const sessionsRepository = createRepository(SessionsRepository, database, environment.mongodb.collectionsNames.sessions);
  bind<UsersRepository>(TYPES.UsersRepository).toConstantValue(usersRepository);
  bind<SessionsRepository>(TYPES.SessionsRepository).toConstantValue(sessionsRepository);

  bind<IUsersService>(TYPES.UsersService).to(UsersService);
  bind<IAuthService>(TYPES.AuthService).to(AuthService);
});
