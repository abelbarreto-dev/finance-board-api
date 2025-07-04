import {Request, Response} from "express";

export class ControllerOperaMoneyBox {
    async saveOperaMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getOperaMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
