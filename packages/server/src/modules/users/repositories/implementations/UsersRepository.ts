import { ICreateUsersDTO } from '@modules/users/dtos/ICreateUsersDTO';
import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../models/User'
import { getRepository, Repository } from 'typeorm';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User)
  }
  public async create(account: ICreateUsersDTO): Promise<User> {
    const user = this.ormRepository.create(account)
    await this.ormRepository.save(user)
    return user;
  }
  
}