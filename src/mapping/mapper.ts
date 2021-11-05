import { createMapper } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { postsProfile } from "./posts.profile";
import { usersProfile } from "./users.profile";

/** Global mapper */
export const mapper = createMapper({
    name: 'globalMapper',
    pluginInitializer: pojos
}).addProfile(postsProfile).addProfile(usersProfile);
