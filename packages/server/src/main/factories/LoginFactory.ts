import { CreateUserController } from '@modules/users/controllers/CreateUserController'
import { Controller } from '@shared/protocols/http'

export const makeLoginFactory = (): Controller => {
  return new CreateUserController()
}