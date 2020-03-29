export interface IEnvironment {
  production: boolean;
  port: number;

  mongodb: {
    dbName: string;
    connectionURI: string;
    collectionsNames: {
      users: string;
    }
  }

  auth: {
    tokenSecret: string;
    refreshTokenSecret: string;
  }
}