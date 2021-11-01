/**
 * Posts search query parameters
 */
export type ListPostsQueryDto = {
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
export type CreatePostRequestDto = {
    title: string;
    content?: string;
    authorId: number;
    published: boolean;
}

/**
 * Update post request parameters
 */
export type UpdatePostRequestDto = {
    id: number;
    title?: string;
    content?: string;
    published?: boolean;
}

/**
 * Publish post request parameters
 */
export type PublishPostRequestDto = {
    id: number;
}
