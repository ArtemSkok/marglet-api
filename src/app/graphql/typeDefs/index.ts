import { mergeTypes } from 'merge-graphql-schemas';
import { DocumentNode } from 'graphql';

// import { enums } from './enums';
import { inputs } from './inputs';
import { scalars } from './scalars';
import { schema } from './schema';
import { types } from './types';


const typeDefs: DocumentNode[] = [
  // ...enums,
  ...inputs,
  ...scalars,
  ...schema,
  ...types
];

export default mergeTypes(typeDefs);