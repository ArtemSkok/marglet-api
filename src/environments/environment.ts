import { IEnvironment } from './IEnvironment';

export const environment: IEnvironment = {
  production: process.env.NODE_ENV === 'production',
  port: +process.env.PORT,
  mongodb: {
    connectionURI: process.env.MONGO_CONNECTION_URI,
    dbName: process.env.MONGO_DB_NAME,
    collectionsNames: {
      users: process.env.MONGO_COLLECTION_NAME_USERS,
      sessions: process.env.MONGO_COLLECTION_NAME_SESSIONS,
    }
  },
  auth: {
    authTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
  apolloEngine: {
    apiKey: process.env.ENGINE_API_KEY
  }
};
