import { PrismaClient } from '@prisma/client';
import { CreatePostRequestDto, ListPostsQueryDto as ListPostsQueryDto, PostDto, PublishPostRequestDto, UpdatePostRequestDto } from '../contracts/posts';

/**
 * Test controller just to make sure server works
 */
class PostsController {
    /**
     * Returns test string
     */
    async getPosts(request: ListPostsQueryDto): Promise<PostDto[]> {
        const prisma = new PrismaClient();

        const posts = await prisma.post.findMany({
            where: {
                title: request.title,
                content: request.content,
                createdAt: request.createdAt
            }
        });

        return posts;
    }

    /**
     * Gets post by ID
     */
    async getPostById(id: number): Promise<PostDto> {
        const prisma = new PrismaClient();

        const post = await prisma.post.findFirst({ where: { id } });

        return post;
    }

    /**
     * Creates new post
     */
    async createPost(request: CreatePostRequestDto): Promise<PostDto> {
        const prisma = new PrismaClient();

        const newPost = await prisma.post.create({
            data: {
                title: request.title,
                content: request.content,
                published: request.published,
                authorId: request.authorId
            }
        });

        return newPost;
    }

    /**
     * Creates new post
     */
     async updatePost(request: UpdatePostRequestDto): Promise<PostDto> {
        const prisma = new PrismaClient();

        const updatedPost = await prisma.post.update({
            where: {
                id: request.id
            },
            data: {
                title: request.title,
                content: request.content,
                published: request.published
            }
        });

        return updatedPost;
    }

    /**
     * Mark post as published
     */
    async publishPost(id: number): Promise<PostDto> {
        const prisma = new PrismaClient();

        const publishedPost = await prisma.post.update({
            where: {
                id
            },
            data: {
                published: true
            }
        });

        return publishedPost;
    }

    /**
     * Delete post by ID
     */
    async deletePost(id: number): Promise<void> {
        const prisma = new PrismaClient();

        await prisma.post.delete({ where: { id }});
    }
}

export default PostsController;