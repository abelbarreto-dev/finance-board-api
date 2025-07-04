import {RepositoryOperaInvoice} from "@Repositories/RepositoryOperaInvoice";
import {OperaInvoice} from "@Models/OperaInvoice";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";
import {OperaInvoiceUtil} from "@Utils/OperaInvoiceUtil";

export class ServiceOperaInvoice {
    private readonly _repository: RepositoryOperaInvoice;

    constructor() {
        this._repository = new RepositoryOperaInvoice();
    }

    private get repository(): RepositoryOperaInvoice {
        return this._repository;
    }

    async saveOperaInvoice(operaInvoiceDTO: OperaInvoiceDTO): Promise<OperaInvoice> {
        OperaInvoiceUtil.checkOperaInvoice(operaInvoiceDTO);

        return await this.repository.saveOperaInvoice(operaInvoiceDTO);
    }

    async getOperaInvoices(invoiceId: number): Promise<OperaInvoice[]> {
        return await this.repository.getOperaInvoices(invoiceId);
    }
}
