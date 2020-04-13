import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const enums = fileLoader(path.join(__dirname, './enums'));
const inputs = fileLoader(path.join(__dirname, './inputs'));
const scalars = fileLoader(path.join(__dirname, './scalars'));
const schema = fileLoader(path.join(__dirname, './schema'));
const types = fileLoader(path.join(__dirname, './types'));

export default mergeTypes([
  ...enums,
  ...inputs,
  ...scalars,
  ...schema,
  ...types
],
  // { all: true }
);
