import {Request, Response} from "express";
import {ServiceCard} from "@Services/ServiceCard";
import {HttpUtil} from "@Utils/HttpUtil";
import {CardDTO} from "@Dtos/CardDTO";

export class ControllerCard {
    private readonly _service: ServiceCard;

    constructor() {
        this._service = new ServiceCard();
    }

    private get service(): ServiceCard {
        return this._service;
    }

    async saveCard(request: Request, response: Response): Promise<Response> {
        try {
            const cardDTO = {...request.body} as CardDTO;

            const card = await this.service.saveCard(cardDTO);

            return await HttpUtil.successResponse(response, card, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getCardById(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const cardId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const card = await this.service.getCardById(cardId);

            return await HttpUtil.successResponse(response, card, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getCards(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const cards = await this.service.getCards(bankId);

            return await HttpUtil.successResponse(response, cards, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateCard(request: Request, response: Response): Promise<Response> {
        try {
            const cardDTO = {...request.body} as CardDTO;
            const id = request.params.id;
            const cardId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const card = await this.service.updateCard(cardId, cardDTO);

            return await HttpUtil.successResponse(response, card, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deleteCard(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const cardId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const deletedCard = await this.service.deleteCard(cardId);

            return await HttpUtil.successResponse(response, deletedCard, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
