import {Request, Response} from "express";
import {UserDTO} from "@Dtos/UserDTO";
import {ServiceUser} from "@Services/ServiceUser";
import {User} from "@Models/User";
import {HttpUtil} from "@Utils/HttpUtil";

export class ControllerUser {
    private readonly serviceUser: ServiceUser;

    constructor() {
        this.serviceUser = new ServiceUser();
    }

    async saveUser(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;

            const result = await this.serviceUser.saveUser(userDto);

            return await HttpUtil.successResponse<User>(response, result, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getUserLogin(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;

            const result = await this.serviceUser.getUserLogin(userDto);

            return await HttpUtil.successResponse<User>(response, result, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateUser(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;
            const id = request.params.id;
            const userId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const result = await this.serviceUser.updateUser(userId, userDto);

            return await HttpUtil.successResponse<User>(response, result, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deleteUser(request: Request, response: Response): Promise<Response> {
        try {
            const user: User = {...request.body} as User;

            const result: User = await this.serviceUser.deleteUser(user);

            return await HttpUtil.successResponse<User>(response, result, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async logout(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: User = {...request.body} as User;

            const result = await this.serviceUser.logout(userDto);

            return await HttpUtil.successResponse<User>(response, result, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
