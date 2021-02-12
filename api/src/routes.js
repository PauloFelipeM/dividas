import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DebtController from './app/controllers/DebtController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/debts', DebtController.index);
routes.get('/debts/:id', DebtController.view);
routes.post('/debts', DebtController.store);
routes.put('/debts/:id', DebtController.update);
routes.delete('/debts/:id', DebtController.delete);


export default routes;
