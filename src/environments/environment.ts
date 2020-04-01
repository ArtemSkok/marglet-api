import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: process.env.NODE_ENV === 'production',
  port: +process.env.PORT,

  mongodb: {
    connectionURI: process.env.MONGO_CONNECTION_URI,
    dbName: process.env.MONGO_DB_NAME,
    collectionsNames: {
      users: process.env.MONGO_COLLECTION_NAME_USERS,
    }
  },
};
