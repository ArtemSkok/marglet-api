import { dateScalarResolver } from './date';
import { GraphQLScalarType } from 'graphql';

export const scalarResolvers: GraphQLScalarType[] = [
  dateScalarResolver,
];
