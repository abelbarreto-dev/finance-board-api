import {User} from "@Models/User";

/**
 * THIS IS ONLY FOR RESPONSE CONTEXT!
 */
export interface UserLoggedDTO {
    user: User,
    token: string
}
