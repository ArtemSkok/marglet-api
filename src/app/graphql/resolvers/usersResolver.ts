import {
  IAuthContext,
  IUpdateUserMutationArgs
} from '../../models';
import { IUsersService } from '../../services/interfaces/IUsersService';

export const usersResolver = (usersService: IUsersService) => ({
  Query: {
    user: async (_, id: string) =>
      usersService.get(id)
  },
  Mutation: {
    updateUser: async (_, { input }: { input: IUpdateUserMutationArgs }, { user }: IAuthContext) =>
      usersService.update(user.id, input),

    deleteUser: async (_, _args, { user }: IAuthContext) =>
      usersService.delete(user.id)
  }
});
