import { Post, PrismaClient, User } from '@prisma/client';
import { CreateUserRequest, ListUsersQuery, UpdateUserRequest, UserDto } from '../contracts/users';
import { mapper } from "../mapping/mapper";

/**
 * API for managing users
 */
class UsersController {
    /**
     * Returns users with their posts
     * @param query Search query
     */
    async listUsers(query: ListUsersQuery): Promise<UserDto[]> {
        const prisma = new PrismaClient();

        const users = await prisma.user.findMany({
            include: {
                posts: true
            },
            where: {
                email: query.email,
                name: query.name
            }
        });

        return users.map((user: User & { posts: Post[] }) => mapper.map(user, 'UserDto', 'UserWithPosts'));
    }

    /**
     * Gets user by ID
     */
    async getUserById(id: number): Promise<UserDto> {
        const prisma = new PrismaClient();

        const user = await prisma.user.findFirst({
            include: {
                posts: true
            },
            where: { id }
        });

        return user;
    }

    /**
     * Creates user with given name and email
     */
    async createUser(request: CreateUserRequest): Promise<UserDto> {
        const prisma = new PrismaClient();

        const newUser = await prisma.user.create({
            data: {
                email: request.email,
                name: request.name
            }
        });

        return newUser;
    }

    /**
     * Updates user by ID
     */
    async updateUser(request: UpdateUserRequest): Promise<UserDto> {
        const prisma = new PrismaClient();

        const updatedUser = await prisma.user.update({
            where: {
                id: request.id
            },
            data: {
                email: request.email,
                name: request.name
            }
        });

        return updatedUser;
    }

    /**
     * Deletes user by ID
     */
     async deleteUser(id: number): Promise<void> {
        const prisma = new PrismaClient();

        await prisma.user.delete({ where: { id } });
    }
}

export default UsersController;
