import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

class FakeUsersRespository implements IUsersRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO) {
    const { name, email, password } = data;
    const user = {
      // id: uuid(),
      name,
      email,
      password
    };
    return void;
  }
}

export default FakeUsersRespository;
