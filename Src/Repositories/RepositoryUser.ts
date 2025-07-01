import {UserDTO} from "@Dtos/UserDTO";
import {User} from "@Models/User";

export class RepositoryUser {
    async saveUser(userDTO: UserDTO): Promise<User> {}

    async getUserLogin(userDTO: UserDTO): Promise<User> {}

    async updateUser(id: number, userDTO: UserDTO): Promise<User> {}

    async deleteUser(user: User): Promise<User> {}
}
