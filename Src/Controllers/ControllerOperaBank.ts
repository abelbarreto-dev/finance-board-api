import {Request, Response} from "express";

export class ControllerOperaBank {
    async saveOperaBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getOperaBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateOperaBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
