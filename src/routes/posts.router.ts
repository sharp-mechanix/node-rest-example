import { Router } from 'express';
import PostsController from '../controllers/posts.controller';

const router = Router();
const controller = new PostsController();

/** Get test message route */
router.get('/posts', controller.getPost);

/**
 * Connects 'posts' API endpoint with controller
 */
export default router;
