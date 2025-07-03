import {Request, Response} from "express";
import {ServiceBank} from "@Services/ServiceBank";
import {HttpUtil} from "@Utils/HttpUtil";
import {BankDTO} from "@Dtos/BankDTO";

export class ControllerBank {
    private readonly _service: ServiceBank;

    constructor() {
        this._service = new ServiceBank();
    }

    private get service(): ServiceBank {
        return this._service;
    }

    async saveBank(request: Request, response: Response): Promise<Response> {
        try {
            const bankDTO = {...request.body} as BankDTO;

            const newBank = await this.service.saveBank(bankDTO);

            return await HttpUtil.successResponse<BankDTO>(response, newBank, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getBankById(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const bank = await this.service.getBankById(bankId);

            return await HttpUtil.successResponse<BankDTO>(response, bank, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getBanks(request: Request, response: Response): Promise<Response> {
        try {
            const userId = request.params.userId;
            const id_user = userId.match(/^[0-9]+$/) ? parseInt(userId) : -1;

            const banks = await this.service.getBanks(id_user);

            return await HttpUtil.successResponse(response, banks, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateBank(request: Request, response: Response): Promise<Response> {
        try {
            const bankDTO = {...request.body} as BankDTO;
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const updatedBank = await this.service.updateBank(bankId, bankDTO);

            return await HttpUtil.successResponse<BankDTO>(response, updatedBank, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deleteBank(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.bankId;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const deletedBank = await this.service.deleteBank(bankId);

            return await HttpUtil.successResponse<BankDTO>(response, deletedBank, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
