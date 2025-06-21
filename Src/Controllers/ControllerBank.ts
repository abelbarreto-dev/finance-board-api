import {Request, Response} from "express";

export class ControllerBank {
    async saveBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async deleteBank(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
