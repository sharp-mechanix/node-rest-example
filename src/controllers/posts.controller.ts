import { Request, Response } from 'express';

/**
 * Test controller just to make sure server works
 */
class PostsController {
    /**
     * Returns test string
     */
    async getPost(_: Request, response: Response): Promise<void> {
        response.send("OK");
    }
}

export default PostsController;