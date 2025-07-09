import {Request, Response} from "express";
import {UserDTO} from "@Dtos/UserDTO";
import {ServiceUser} from "@Services/ServiceUser";
import {User} from "@Models/User";
import {HttpUtil} from "@Utils/HttpUtil";
import {generateUserToken} from "@Middlewares/UserAuthMiddleware";
import {UserLoggedDTO} from "@Dtos/Special/UserLoggedDTO";
import {ServiceUserToken} from "@Services/Session/ServiceUserToken";

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

            const resp = await this.serviceUser.getUserLogin(userDto);

            const token = await generateUserToken(resp);

            const userLogged: UserLoggedDTO = {
                user: resp,
                token: token
            };

            return await HttpUtil.successResponse<UserLoggedDTO>(response, userLogged, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async reactiveUser(request: Request, response: Response): Promise<Response> {
        try {
            const userDto: UserDTO = {...request.body} as UserDTO;

            const result = await this.serviceUser.reactiveUser(userDto);

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

    async deactivateUser(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const userId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const result: User = await this.serviceUser.deactivateUser(userId);

            return await HttpUtil.successResponse<User>(response, result, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async logoutAllSessions(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const userId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;
            const serviceUserToken: ServiceUserToken = new ServiceUserToken();

            await serviceUserToken.logoutAllUserToken(userId);

            type Body = {message: string};

            const respBody: Body = {message: "logout success"};

            return await HttpUtil.successResponse<Body>(response, respBody, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
