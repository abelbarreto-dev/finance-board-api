import {UserDTO} from "@Dtos/UserDTO";
import {User} from "../Models/User";
import {UserUtil} from "@Utils/UserUtil";

export class ServiceUser {
    async saveUser(userDTO: UserDTO): Promise<User> {
        UserUtil.checkUser(userDTO);

        return new User();
    }

    async getUserLogin(userDTO: UserDTO): Promise<User> {
        return new User();
    }

    async updateUser(id: number, userDTO: UserDTO): Promise<User> {
        UserUtil.checkUser(userDTO);

        return new User();
    }

    async deleteUser(user: User): Promise<User> {
        return new User();
    }

    async logout(user: User): Promise<User> {
        return new User();
    }
}
