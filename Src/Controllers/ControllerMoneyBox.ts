import {Request, Response} from "express";
import {ServiceMoneyBox} from "@Services/ServiceMoneyBox";
import {HttpUtil} from "@Utils/HttpUtil";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";

export class ControllerMoneyBox {
    private readonly _service: ServiceMoneyBox;

    constructor() {
        this._service = new ServiceMoneyBox();
    }

    private get service(): ServiceMoneyBox {
        return this._service;
    }

    async saveMoneyBox(request: Request, response: Response): Promise<Response> {
        try {
            const moneyBoxDTO = {...request.body} as MoneyBoxDTO;

            const moneyBox = await this.service.saveMoneyBox(moneyBoxDTO);

            return await HttpUtil.successResponse(response, moneyBox, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getMoneyBoxes(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const moneyId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const moneyBoxes = await this.service.getMoneyBoxes(moneyId);

            return await HttpUtil.successResponse(response, moneyBoxes, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateMoneyBox(request: Request, response: Response): Promise<Response> {
        try {
            const moneyBoxDTO = {...request.body} as MoneyBoxDTO;
            const id = request.params.id;
            const moneyBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const moneyBox = await this.service.updateMoneyBox(moneyBoxId, moneyBoxDTO);

            return await HttpUtil.successResponse(response, moneyBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deleteMoneyBox(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const moneyBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const moneyBox = await this.service.deleteMoneyBox(moneyBoxId);

            return await HttpUtil.successResponse(response, moneyBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
