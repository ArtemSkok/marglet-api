import { Context } from '../../models';
import { IUsersService } from '../../services/interfaces/IUsersService';

export const usersResolver = (usersService: IUsersService) => ({
    Query: {
        user: async (_, _args, { user }: Context) => await usersService.get(user.id)
    },
});
