import {Request, Response} from "express";
import {HttpUtil} from "@Utils/HttpUtil";
import {ServiceOperaBankBox} from "@Services/ServiceOperaBankBox";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";

export class ControllerOperaBankBox {
    private readonly _service: ServiceOperaBankBox;

    constructor() {
        this._service = new ServiceOperaBankBox();
    }

    private get service(): ServiceOperaBankBox {
        return this._service;
    }

    async saveOperaBankBox(request: Request, response: Response): Promise<Response> {
        try {
            const operaBankBoxDTO = {...request.body} as OperaBankBoxDTO;

            const operaBankBox = await this.service.saveOperaBankBox(operaBankBoxDTO);

            return await HttpUtil.successResponse(response, operaBankBox, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getOperaBankBoxes(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const bankBox = await this.service.getOperaBankBoxes(bankBoxId);

            return await HttpUtil.successResponse(response, bankBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateOperaBankBox(request: Request, response: Response): Promise<Response> {
        try {
            const operaBankBoxDTO = {...request.body} as OperaBankBoxDTO;
            const id = request.params.id;
            const operaBankBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const operaBankBox = await this.service.updateOperaBankBox(operaBankBoxId, operaBankBoxDTO);

            return await HttpUtil.successResponse(response, operaBankBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
