import { IUpdateUserMutationArgs } from '../../models';
import { User } from '../../entities/User';

export interface IUsersService {
  get(id: string): Promise<User>;
  update(id: string, input: IUpdateUserMutationArgs): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}