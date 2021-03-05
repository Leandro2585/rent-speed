import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUsersRepository from '../repositories/IUsersRepository';

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: ICreateUserDTO) {
    const user = this.usersRepository.create({ name, email, password });

    return user;
  }
}

export default CreateUserService;
