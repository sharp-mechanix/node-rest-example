import { Post, User } from "@prisma/client";
import { createMetadataMap } from "@automapper/pojos";
import { UserDto } from "../contracts/users";
import { Mapper, MappingProfile } from "@automapper/types";
import { CamelCaseNamingConvention, mapFrom, mapWith } from "@automapper/core";

createMetadataMap<User>('User', {
    id: Number,
    email: String,
    name: String,
});

type UserWithPosts = User & { posts: Post[] };
createMetadataMap<UserWithPosts>('UserWithPosts', {
    id: Number,
    email: String,
    name: String,
    posts: 'Post[]'
});

createMetadataMap<UserDto>('UserDto', {
    id: Number,
    email: String,
    name: String,
    posts: 'PostDto[]'
});

/** Mapping profile for Users */
export const usersProfile: MappingProfile = (mapper: Mapper) => {
    mapper
        .createMap<User, UserDto>('User', 'UserDto', {
            namingConventions: new CamelCaseNamingConvention()
        })
        // Map fields explicitly to show how it's done
        .forMember((d: UserDto) => d.id, mapFrom((s: User) => s.id))
        .forMember((d: UserDto) => d.email, mapFrom((s: User) => s.email))
        .forMember((d: UserDto) => d.name, mapFrom((s: User) => s.name));

    mapper
        .createMap<UserWithPosts, UserDto>('UserWithPosts', 'UserDto', {
            namingConventions: new CamelCaseNamingConvention()
        })
        .forMember((d: UserDto) => d.posts, mapWith('PostDto', 'Post', (s: UserWithPosts) => s.posts));
}
