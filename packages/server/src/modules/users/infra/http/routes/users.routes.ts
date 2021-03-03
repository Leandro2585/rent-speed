import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', () => console.log('GET Users'));

export default usersRouter;
