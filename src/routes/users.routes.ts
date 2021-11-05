import { Router, Request, Response } from 'express';
import UsersController from '../controllers/users.controller';
import { CreateUserRequest, ListUsersQuery, UpdateUserRequest } from '../contracts/users';
import { CreateUserValidator } from '../validators/users.validator'

const router = Router();
const controller = new UsersController();

router.get('/users', async (request: Request, response: Response) => {
    try {
        const query: ListUsersQuery = {
            email: request.query.email as string,
            name: request.query.email as string
        }

        response.json(await controller.listUsers(query));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.get('/users/:id', async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id, 10);

        response.json(await controller.getUserById(id));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.post('/users', async (request: Request, response: Response) => {
    try {
        const newUserRequest = request.body as CreateUserRequest;

        const validator = new CreateUserValidator();
        const validationResult = validator.validate(newUserRequest);
        if (validationResult.email) {
            response.status(400).json(validationResult);
            return;
        }

        response.json(await controller.createUser(newUserRequest));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.put('/users', async (request: Request, response: Response) => {
    try {
        const updateUserRequest = request.body as UpdateUserRequest;

        response.json(await controller.updateUser(updateUserRequest));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.delete('/users/:id', async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id, 10);

        await controller.deleteUser(id);

        response.status(200);
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

/**
 * Connects 'users' API endpoint with controller
 */
export default router;
