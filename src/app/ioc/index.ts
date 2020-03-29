import 'reflect-metadata';
import { Container } from 'inversify';

import { bindings } from './bindings';

const createContainer = async () => {
    const c = new Container();

    await c.loadAsync(bindings);

    return c;
};

export const container = createContainer();
