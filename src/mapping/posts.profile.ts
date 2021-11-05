import { Post } from "@prisma/client";
import { createMetadataMap } from "@automapper/pojos";
import { PostDto } from "../contracts/posts";
import { Mapper, MappingProfile } from "@automapper/types";
import { CamelCaseNamingConvention } from "@automapper/core";

createMetadataMap<Post>('Post', {
    id: Number,
    title: String,
    createdAt: Date,
    updatedAt: Date,
    content: String,
    authorId: Number,
    published: Boolean
});

createMetadataMap<PostDto>('PostDto', {
    id: Number,
    title: String,
    createdAt: Date,
    updatedAt: Date,
    content: String
});

/** Mapping profile for posts */
export const postsProfile: MappingProfile = (mapper: Mapper) => {
    // Here we rely on automatic mapping
    mapper.createMap<Post, PostDto>('Post', 'PostDto', {
        namingConventions: new CamelCaseNamingConvention()
    });
}