import { ICreateUsersDTO } from '../dtos/ICreateUsersDTO';

export interface IUsersRepository {
  create(account: ICreateUsersDTO): Promise<void>;
}