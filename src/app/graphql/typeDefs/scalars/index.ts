import { DocumentNode } from 'graphql';

import { DateScalar } from './date';

export const scalars: DocumentNode[] = [
  DateScalar,
];