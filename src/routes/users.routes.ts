import { Router, Request, Response } from 'express';
import UsersController from '../controllers/users.controller';
import { CreateUserRequest, ListUsersQuery, UpdateUserRequest } from '../contracts/users';

const router = Router();
const controller = new UsersController();

router.get('/users', async (request: Request, response: Response) => {
    const query: ListUsersQuery = {
        email: request.query.email as string,
        name: request.query.email as string
    }

    response.json(await controller.listUsers(query));
});

router.get('/users/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id, 10);

    response.json(await controller.getUserById(id));
});

router.post('/users', async (request: Request, response: Response) => {
    const newUserRequest = request.body as CreateUserRequest;

    response.json(await controller.createUser(newUserRequest));
});

router.put('/users', async (request: Request, response: Response) => {
    const updateUserRequest = request.body as UpdateUserRequest;

    response.json(await controller.updateUser(updateUserRequest));
});

router.delete('/users/:id', async (request: Request, response: Response) => {
    const id = parseInt(request.params.id, 10);

    await controller.deleteUser(id);

    response.status(200);
});

/**
 * Connects 'users' API endpoint with controller
 */
export default router;
