import {Request, Response} from "express";

export class ControllerUser {
    async saveUser(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getUserLogin(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateUser(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async deleteUser(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async logout(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
