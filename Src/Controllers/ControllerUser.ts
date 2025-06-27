import {Request, Response} from "express";
import {BaseException} from "@Exceptions/BaseException";
import {UserDTO} from "@Dtos/UserDTO";
import {ServiceUser} from "@Services/ServiceUser";
import {User} from "../Models/User";

export class ControllerUser {
    private readonly serviceUser: ServiceUser;

    constructor() {
        this.serviceUser = new ServiceUser();
    }

    async saveUser(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;

            const result = await this.serviceUser.saveUser(userDto);

            return response.json(result);
        }
        catch (error: any) {
            const baseException = error as BaseException;
            return response.status(baseException.code).json({
                message: baseException.message
            });
        }
    }

    async getUserLogin(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;

            const result = await this.serviceUser.getUserLogin(userDto);

            return response.json(result);
        }
        catch (error: any) {
            const baseException = error as BaseException;
            return response.status(baseException.code).json({
                message: baseException.message
            });
        }
    }

    async updateUser(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;
            const id = request.params.id;
            const userId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const result = await this.serviceUser.updateUser(userId, userDto);

            return response.json(result);
        }
        catch (error: any) {
            const baseException = error as BaseException;
            return response.status(baseException.code).json({
                message: baseException.message
            });
        }
    }

    async deleteUser(request: Request, response: Response): Promise<Response> {
        try {
            const user: User = {...request.body} as User;

            const result: User = await this.serviceUser.deleteUser(user);

            return response.json(result);
        }
        catch (error: any) {
            const baseException = error as BaseException;
            return response.status(baseException.code).json({
                message: baseException.message
            });
        }
    }

    async logout(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: User = {...request.body} as User;

            const result = await this.serviceUser.getUserLogin(userDto);

            return response.json(result);
        }
        catch (error: any) {
            const baseException = error as BaseException;
            return response.status(baseException.code).json({
                message: baseException.message
            });
        }
    }
}
