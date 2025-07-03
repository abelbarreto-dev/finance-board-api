import {Request, Response} from "express";
import {HttpUtil} from "@Utils/HttpUtil";
import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {ServiceInvoice} from "@Services/ServiceInvoice";

export class ControllerInvoice {
    private readonly _service: ServiceInvoice;

    constructor() {
        this._service = new ServiceInvoice();
    }

    private get service(): ServiceInvoice {
        return this._service;
    }

    async saveInvoice(request: Request, response: Response): Promise<Response> {
        try {
            const invoiceDTO = {...request.body} as InvoiceDTO;

            const invoice = await this.service.saveInvoice(invoiceDTO);

            return await HttpUtil.successResponse(response, invoice, 201);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async getInvoices(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.cardId;
            const cardId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const invoices = await this.service.getInvoices(cardId);

            return await HttpUtil.successResponse(response, invoices, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }

    async updateInvoice(request: Request, response: Response): Promise<Response> {
        try {
            const invoiceDTO = {...request.body} as InvoiceDTO;
            const id = request.params.cardId;
            const invoiceId = id.match(/^[0-9]+$/) ? parseInt(id) : -1;

            const invoice = await this.service.updateInvoice(invoiceId, invoiceDTO);

            return await HttpUtil.successResponse(response, invoice, 200);
        }
        catch (error: unknown) {
            console.error(error);

            return await HttpUtil.exceptionResponse(error, response);
        }
    }
}
