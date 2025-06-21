import {Request, Response} from "express";

export class ControllerBankBox {
    async saveBankBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getBankBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateBankBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async deleteBankBox(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
