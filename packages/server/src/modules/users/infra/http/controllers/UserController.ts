import { Request, Response } from 'express';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, cnh, birth, password } = request.body;

    return response.json().send();
  }
}

export default UserController;
