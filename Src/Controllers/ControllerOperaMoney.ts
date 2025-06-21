import {Request, Response} from "express";

export class ControllerOperaMoney {
    async saveOperaMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getOperaMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateOperaMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
