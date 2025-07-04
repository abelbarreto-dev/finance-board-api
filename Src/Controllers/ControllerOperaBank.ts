import {Request, Response} from "express";
import {ServiceOperaBank} from "@Services/ServiceOperaBank";
import {HttpUtil} from "@Utils/HttpUtil";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";

export class ControllerOperaBank {
    private readonly _service: ServiceOperaBank;

    constructor() {
        this._service = new ServiceOperaBank();
    }

    private get service(): ServiceOperaBank {
        return this._service;
    }

    async saveOperaBank(request: Request, response: Response): Promise<Response> {
        try {
            const operaBankDTO = {...request.body} as OperaBankDTO;

            const operaBank = await this.service.saveOperaBank(operaBankDTO);

            return await HttpUtil.successResponse(response, operaBank, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getOperaBanks(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const operaBanks = await this.service.getOperaBanks(bankId);

            return await HttpUtil.successResponse(response, operaBanks, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
