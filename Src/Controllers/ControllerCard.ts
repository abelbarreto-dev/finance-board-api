import {Request, Response} from "express";

export class ControllerCard {
    async saveCard(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async getCard(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async updateCard(request: Request, response: Response): Promise<Response> {
        return response.json();
    }

    async deleteCard(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}
