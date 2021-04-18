import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO';
import { User } from '../../models/User';

export interface IUsersRepository {
  create(account: ICreateUsersDTO): Promise<User>;
}