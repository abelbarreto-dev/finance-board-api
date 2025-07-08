import {Request, Response} from "express";
import {HttpUtil} from "@Utils/HttpUtil";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {ServicePixKey} from "@Services/ServicePixKey";

export class ControllerPixKey {
    private readonly _service: ServicePixKey;

    constructor() {
        this._service = new ServicePixKey();
    }

    private get service(): ServicePixKey {
        return this._service;
    }

    async savePixKey(request: Request, response: Response): Promise<Response> {
        try {
            const pixKeyDTO = {...request.body} as PixKeyDTO;

            const pixKey = await this.service.savePixKey(pixKeyDTO);

            return await HttpUtil.successResponse(response, pixKey, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getPixKeys(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const bankId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const pixKeys = await this.service.getPixKeys(bankId);

            return await HttpUtil.successResponse(response, pixKeys, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updatePixKey(request: Request, response: Response): Promise<Response> {
        try {
            const pixKeyDTO = {...request.body} as PixKeyDTO;
            const id = request.params.id;
            const pixKeyId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const pixKey = await this.service.updatePixKey(pixKeyId, pixKeyDTO);

            return await HttpUtil.successResponse(response, pixKey, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async deletePixKey(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const pixKeyId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const deletedPixKey = await this.service.deletePixKey(pixKeyId);

            return await HttpUtil.successResponse(response, deletedPixKey, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
