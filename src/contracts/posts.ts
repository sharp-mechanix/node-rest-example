/**
 * Posts search query parameters
 */
export type ListPostsQuery = {
    title?: string;
    content?: string;
    createdAt?: string;
}

/**
 * Post
 */
export type PostDto = {
    id: number;
    createdAt: Date,
    updatedAt: Date,
    title: string,
    content?: string
}