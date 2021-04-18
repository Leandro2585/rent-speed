import { Controller, HttpRequest, HttpResponse } from '@shared/protocols/http';
import { ok, serverError } from '@shared/helpers/HttpHelpers'

export class CreateUserController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, birth, password, confirmPassword } = httpRequest.body
      new Promise(resolve => resolve(null))
      return ok({ name, email, birth, password, confirmPassword })
    } catch (error) {
      return serverError(error)
    }
  }
}