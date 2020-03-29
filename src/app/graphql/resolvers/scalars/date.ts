import { GraphQLScalarType } from 'graphql';

export const dateScalarResolver = new GraphQLScalarType({
  name: 'Date',
  description: 'UTC date format representing the number of milliseconds passed since January 1, 1970, 00:00:00 UTC.',
  serialize(value: number): number { // TODO: add logic
    const result = value;
    return result;
  },
  parseValue(value: number): number { // TODO: add logic
    const result = value;
    return result;
  },
});