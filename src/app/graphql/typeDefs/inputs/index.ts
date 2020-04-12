import { DocumentNode } from 'graphql';

import { signUpInput } from './signUpInput';
import { updateUserInput } from './updateUserInput';
import { logInInput } from './logInInput';
import { refreshAccessTokenInput } from './refreshAccessTokenInput';

export const inputs: DocumentNode[] = [
  signUpInput,
  updateUserInput,
  logInInput,
  refreshAccessTokenInput
];