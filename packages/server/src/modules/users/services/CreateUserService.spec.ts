import CreateUserService from './CreateUserService';

let createUser: CreateUserService;
describe('CreateUserService', () => {
  beforeEach(() => {
    createUser = new CreateUserService();
  });
  it('should be able to a new create user', async () => {
    const user = await createUser.execute({
      name: 'john doe',
      email: 'johndoe@example.com',
      password: '123456'
    });

    expect(user).toHaveProperty('id');
  });
});
