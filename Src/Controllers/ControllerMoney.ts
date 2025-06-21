import {Request, Response} from "express";

export class ControllerMoney {
    async saveMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateMoney(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
