import {Request, Response} from "express";
import {ServiceBankBox} from "@Services/ServiceBankBox";
import {HttpUtil} from "@Utils/HttpUtil";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";

export class ControllerBankBox {
    private readonly _service: ServiceBankBox;

    constructor() {
        this._service = new ServiceBankBox();
    }

    private get service(): ServiceBankBox {
        return this._service;
    }

    async saveBankBox(request: Request, response: Response): Promise<Response> {
        try {
            const bankBoxDTO = {...request.body} as BankBoxDTO;

            const bankBox = await this.service.saveBankBox(bankBoxDTO);

            return await HttpUtil.successResponse(response, bankBox, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getBankBoxes(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const bankBoxes = await this.service.getBankBoxes(bankId);

            return await HttpUtil.successResponse(response, bankBoxes, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateBankBox(request: Request, response: Response): Promise<Response> {
        try {
            const bankBoxDTO = {...request.body} as BankBoxDTO;
            const id = request.params.id;
            const bankBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const bankBox = await this.service.updateBankBox(bankBoxId, bankBoxDTO);

            return await HttpUtil.successResponse(response, bankBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deleteBankBox(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankBoxId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const bankBox = await this.service.deleteBankBox(bankBoxId);

            return await HttpUtil.successResponse(response, bankBox, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
