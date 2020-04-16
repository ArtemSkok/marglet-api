export interface ISignUpMutationArgs {
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  birthDate?: Date;
  // photoUrl?: string;
  password: string;
}
