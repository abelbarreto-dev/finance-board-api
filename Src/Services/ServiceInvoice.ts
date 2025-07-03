import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {Invoice} from "@Models/Invoice";
import {RepositoryInvoice} from "@Repositories/RepositoryInvoice";
import {InvoiceUtil} from "@Utils/InvoiceUtil";

export class ServiceInvoice {
    private readonly _repository: RepositoryInvoice;

    constructor() {
        this._repository = new RepositoryInvoice();
    }

    private get repository(): RepositoryInvoice {
        return this._repository;
    }

    async saveInvoice(invoiceDTO: InvoiceDTO): Promise<Invoice> {
        InvoiceUtil.checkInvoice(invoiceDTO);

        return await this.repository.saveInvoice(invoiceDTO);
    }

    async getInvoices(cardId: number): Promise<Invoice[]> {
        return await this.repository.getInvoices(cardId);
    }

    async updateInvoice(invoiceId: number, invoiceDTO: InvoiceDTO): Promise<Invoice> {
        InvoiceUtil.checkInvoice(invoiceDTO);

        return await this.repository.updateInvoice(invoiceId, invoiceDTO);
    }
}
