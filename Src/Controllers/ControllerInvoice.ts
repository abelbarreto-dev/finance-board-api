import {Request, Response} from "express";

export class ControllerInvoice {
    async saveInvoice(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getInvoice(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateInvoice(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
