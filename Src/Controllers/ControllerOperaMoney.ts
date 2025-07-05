import {Request, Response} from "express";
import {ServiceOperaMoney} from "@Services/ServiceOperaMoney";
import {HttpUtil} from "@Utils/HttpUtil";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";

export class ControllerOperaMoney {
    private readonly _service: ServiceOperaMoney;

    constructor() {
        this._service = new ServiceOperaMoney();
    }

    private get service(): ServiceOperaMoney {
        return this._service;
    }

    async saveOperaMoney(request: Request, response: Response): Promise<Response> {
        try {
            const operaMoneyDTO = {...request.body} as OperaMoneyDTO;

            const operaMoney = await this.service.saveOperaMoney(operaMoneyDTO);

            return await HttpUtil.successResponse(response, operaMoney, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getOperaMoneys(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const moneyId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const operaMoneys = await this.service.getOperaMoneys(moneyId);

            return await HttpUtil.successResponse(response, operaMoneys, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
