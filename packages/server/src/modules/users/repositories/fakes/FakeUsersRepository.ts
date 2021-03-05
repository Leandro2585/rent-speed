import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

interface User {}

class FakeUsersRespository implements IUsersRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO) {}
}

export default FakeUsersRespository;
