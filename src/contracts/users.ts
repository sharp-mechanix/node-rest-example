import { PostDto } from "./posts"

/**
 * Users search query parameters
 */
export type ListUsersQueryDto = {
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
export type CreateUserRequestDto = {
    email: string;
    name?: string;
}

/**
 * Update user request parameters
 */
export type UpdateUserRequestDto = {
    id: number,
    email?: string;
    name?: string;
}
