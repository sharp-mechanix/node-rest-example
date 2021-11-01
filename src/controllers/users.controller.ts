import { PrismaClient } from '@prisma/client'
import { CreateUserRequestDto, ListUsersQueryDto, UpdateUserRequestDto, UserDto } from '../contracts/users';

/**
 * API for managing users
 */
class UsersController {
    /**
     * Returns users with their posts
     * @param query Search query
     */
    async listUsers(query: ListUsersQueryDto): Promise<UserDto[]> {
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

        return users;
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
    async createUser(request: CreateUserRequestDto): Promise<UserDto> {
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
    async updateUser(request: UpdateUserRequestDto): Promise<UserDto> {
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
