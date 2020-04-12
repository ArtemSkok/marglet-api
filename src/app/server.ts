import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { mergeResolvers } from 'merge-graphql-schemas';
import { applyMiddleware } from 'graphql-middleware';
import { IncomingMessage } from 'http';

import { environment } from '../environments/environment';
import typeDefs from './graphql/typeDefs';
import { usersResolver, authResolver } from './graphql/resolvers';
import { IAuthContext } from './models';
import { permissionsMidleware } from './graphql';
import { JWTUtil, HTTPHeadersUtil } from './utils';
import { IAuthService, IUsersService } from './services';
import { TYPES } from './ioc/types';
import { createContainer } from './ioc';

export const createGraphQLServer = async () => {
  const container = await createContainer();

  const usersService = container.get<IUsersService>(TYPES.UsersService);
  const authService = container.get<IAuthService>(TYPES.AuthService);

  const resolvers = mergeResolvers([
    usersResolver(usersService),
    authResolver(authService)
  ]);

  const execSchema = makeExecutableSchema({ typeDefs, resolvers });
  const shieldedSchema = applyMiddleware(execSchema, permissionsMidleware);

  const server = new ApolloServer({
    context: ({ req, connection }: { req: IncomingMessage, connection: any }): IAuthContext => {
      if (connection) {
        return connection.context;
      }
      const authHeader: string = req.headers.authorization as string;
      const token = HTTPHeadersUtil.getBearerToken(authHeader);
      const parsedToken = JWTUtil.verifyAccessToken(token);
      return {
        user: parsedToken
          ? parsedToken.user
          : null
      };
    },
    schema: shieldedSchema,
    introspection: true,
    playground: true,
    tracing: true,
    mocks: false,
    mockEntireSchema: false,
    engine: {
      apiKey: environment.apolloEngine.apiKey,
    }
  });

  server
    .listen({ port: environment.port })
    .then(({ url }) => {
      console.log(`🚀 Server started at ${url}`);

    });

  return server;
};
