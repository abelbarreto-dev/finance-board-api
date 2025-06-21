import {Request, Response} from "express";

export class ControllerMoneyBox {
    async saveMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async deleteMoneyBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
