import { fluentProvide } from 'inversify-binding-decorators';

import { TYPES } from '../ioc/types';
import { MongoDBProvider } from '../providers/mongo/MongoDBProvider';
import { environment } from '../../environments/environment';

@fluentProvide(TYPES.MongoDBProviderFactory).inSingletonScope().done()
export class MongoDBProviderFactory {
    public create() {
        const options = {
            uri: environment.mongodb.connectionURI,
            databaseName: environment.mongodb.dbName
        };
        const provider = new MongoDBProvider(options);
        return provider.getConnection();
    }
}
