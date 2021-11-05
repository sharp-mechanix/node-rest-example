/**
 * Posts search query parameters
 */
export type ListPostsQuery = {
    title?: string;
    content?: string;
    createdAt?: Date;
}

/**
 * Post
 */
export type PostDto = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content?: string;
}

/**
 * Create post request parameters
 */
export type CreatePostRequest = {
    title: string;
    content?: string;
    authorId: number;
    published: boolean;
}

/**
 * Update post request parameters
 */
export type UpdatePostRequest = {
    id: number;
    title?: string;
    content?: string;
    published?: boolean;
}

/**
 * Publish post request parameters
 */
export type PublishPostRequest = {
    id: number;
}
