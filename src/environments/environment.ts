import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  port: 3030,

  mongodb: {
    dbName: 'marglet',
    // connectionURI: 'mongodb://localhost:27017',
    connectionURI: 'mongodb://mongo:27017',
    collectionsNames: {
      users: 'users',
    }
  },

  auth: {
    tokenSecret: 'dh2D@hGejeof8Y9$@_3',
    refreshTokenSecret: 'a$$sSd_asdaBd@dsd0391v_1',
  }

};
