export interface Context {
  user: {
    id: string;
  };
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  userId: string;
}

export interface CreateUserMutationArgs {
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  birthDate: string;
  password: string;
}