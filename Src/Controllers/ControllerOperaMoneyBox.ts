import {Request, Response} from "express";
import {HttpUtil} from "@Utils/HttpUtil";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {ServiceOperaMoneyBox} from "@Services/ServiceOperaMoneyBox";

export class ControllerOperaMoneyBox {
    private readonly _service: ServiceOperaMoneyBox;

    constructor() {
        this._service = new ServiceOperaMoneyBox();
    }

    private get service(): ServiceOperaMoneyBox {
        return this._service;
    }

    async saveOperaMoneyBox(request: Request, response: Response): Promise<Response> {
        try {
            const operaMoneyBoxDTO = {...request.body} as OperaMoneyBoxDTO;

            const operaMoneyBox = await this.service.saveOperaMoneyBox(operaMoneyBoxDTO);

            return await HttpUtil.successResponse(response, operaMoneyBox, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getOperaMoneyBoxes(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const moneyBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const operaMoneyBoxes = await this.service.getOperaMoneyBoxes(moneyBoxId);

            return await HttpUtil.successResponse(response, operaMoneyBoxes, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
