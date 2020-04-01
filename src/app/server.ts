import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { mergeResolvers } from 'merge-graphql-schemas';

import typeDefs from './graphql/typeDefs';
import { TYPE } from './ioc/types';
import { container } from './ioc';
import { IUsersService } from './services/interfaces/IUsersService';
import { usersResolver } from './graphql/resolvers';
import { environment } from '../environments/environment';


export const createGraphQLServer = async () => {

  const c = await container;

  const usersService = c.get<IUsersService>(TYPE.UsersService);
  const resolvers = mergeResolvers([
    usersResolver(usersService),
  ]);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    mocks: true,
    mockEntireSchema: false
  });

  server
    .listen({ port: environment.port })
    .then(({ url }) => console.log(`🚀 Server started at ${url}`));


  return server;
};
