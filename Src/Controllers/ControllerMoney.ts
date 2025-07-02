import {Request, Response} from "express";
import {HttpUtil} from "@Utils/HttpUtil";
import {MoneyDTO} from "@Dtos/MoneyDTO";
import {ServiceMoney} from "@Services/ServiceMoney";
import {Money} from "@Models/Money";

export class ControllerMoney {
    private readonly _service: ServiceMoney;

    constructor() {
        this._service = new ServiceMoney();
    }

    private get service(): ServiceMoney {
        return this._service;
    }

    async saveMoney(request: Request, response: Response): Promise<Response> {
        try {
            const moneyDto = {...request.body} as MoneyDTO;

            const newMoney = await this.service.saveMoney(moneyDto);

            return await HttpUtil.successResponse<Money>(response, newMoney, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getMoney(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const userId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const money = await this.service.getMoney(userId);

            return await HttpUtil.successResponse<Money>(response, money, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateMoney(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const moneyId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const moneyDto = {...request.body} as MoneyDTO;

            const updatedMoney = await this.service.updateMoney(moneyId, moneyDto);

            return await HttpUtil.successResponse<Money>(response, updatedMoney, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
