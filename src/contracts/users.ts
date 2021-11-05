import { PostDto } from "./posts"

/**
 * Users search query parameters
 */
export type ListUsersQuery = {
    email?: string;
    name?: string;
}

/**
 * User
 */
export type UserDto = {
    id: number,
    email: string,
    name?: string,
    posts?: PostDto[],
}

/**
 * Create user request parameters
 */
export type CreateUserRequest = {
    email: string;
    name?: string;
}

/**
 * Update user request parameters
 */
export type UpdateUserRequest = {
    id: number,
    email?: string;
    name?: string;
}
