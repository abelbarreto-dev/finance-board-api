import {Request, Response} from "express";
import {ServiceOperaInvoice} from "@Services/ServiceOperaInvoice";
import {HttpUtil} from "@Utils/HttpUtil";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";

export class ControllerOperaInvoice {
    private readonly _service: ServiceOperaInvoice;

    constructor() {
        this._service = new ServiceOperaInvoice();
    }

    private get service(): ServiceOperaInvoice {
        return this._service;
    }

    async saveOperaInvoice(request: Request, response: Response): Promise<Response> {
        try {
            const operaInvoiceDTO = {...request.body} as OperaInvoiceDTO;

            const operaInvoice = await this.service.saveOperaInvoice(operaInvoiceDTO);

            return await HttpUtil.successResponse(response, operaInvoice, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getOperaInvoices(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id;
            const invoiceId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const operaInvoices = await this.service.getOperaInvoices(invoiceId);

            return await HttpUtil.successResponse(response, operaInvoices, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
