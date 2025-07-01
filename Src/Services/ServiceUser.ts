import {UserDTO} from "@Dtos/UserDTO";
import {User} from "../Models/User";
import {UserUtil} from "@Utils/UserUtil";
import {genSalt, hash} from "bcrypt";
import * as process from "node:process";
import {RepositoryUser} from "@Repositories/RepositoryUser";

export class ServiceUser {
    private readonly _salt = process.env.SALT_NUMBER || "0";
    private readonly _repository;

    constructor() {
        this._repository = new RepositoryUser();
    }

    private get repository(): RepositoryUser {
        return this._repository;
    }

    private get salt(): number {
        return parseInt(this._salt);
    }

    async saveUser(userDTO: UserDTO): Promise<User> {
        UserUtil.checkUser(userDTO);

        const salt: string = await genSalt(this.salt);

        const passwdCrypted = await hash(userDTO.password, salt);

        userDTO = {
            ...userDTO,
            password: passwdCrypted
        } as UserDTO;

        return await this.repository.saveUser(userDTO);
    }

    async getUserLogin(userDTO: UserDTO): Promise<User> {
        const passwdCrypted = await hash(userDTO.password, this.salt);

        userDTO = {
            ...userDTO,
            password: passwdCrypted
        } as UserDTO;

        return await this.repository.getUserLogin(userDTO);
    }

    async updateUser(id: number, userDTO: UserDTO): Promise<User> {
        UserUtil.checkUser(userDTO);

        return await this.repository.updateUser(id, userDTO);
    }

    async deleteUser(user: User): Promise<User> {
        return await this.repository.deleteUser(user);
    }

    async logout(user: User): Promise<User> {
        return new User();
    }
}
