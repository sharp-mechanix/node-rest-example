import { Router, Request, Response } from 'express';
import { CreatePostRequest, ListPostsQuery, UpdatePostRequest } from '../contracts/posts';
import PostsController from '../controllers/posts.controller';

const router = Router();
const controller = new PostsController();

router.get('/posts', async (request: Request, response: Response) => {
    try {
        const query: ListPostsQuery = {
            title: request.query.title as string,
            content: request.query.content as string,
            createdAt: !!request.query.createdAt ? new Date(request.query.createdAt as string) : undefined
        }

        response.json(await controller.getPosts(query));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.get('/posts/:id', async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id, 10);

        response.json(await controller.getPostById(id));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.post('/posts', async (request: Request, response: Response) => {
    try {
        const newPostRequest = request.body as CreatePostRequest;

        response.json(await controller.createPost(newPostRequest));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.put('/posts', async (request: Request, response: Response) => {
    try {
        const updatePostRequest = request.body as UpdatePostRequest;

        response.json(await controller.updatePost(updatePostRequest));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.put('/posts/:id/publish', async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id, 10);

        response.json(await controller.publishPost(id));
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

router.delete('/posts/:id', async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id, 10);

        await controller.deletePost(id);

        response.status(200);
    }
    catch (e) {
        console.error(e);
        response.status(500).json({ error: "Unexpected error occured" });
    }
});

/**
 * Connects 'posts' API endpoint with controller
 */
export default router;
