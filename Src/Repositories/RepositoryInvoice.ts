import { PrismaClient } from "@prisma/client";
import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {Invoice} from "@Models/Invoice";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryInvoice {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveInvoice(invoiceDTO: InvoiceDTO): Promise<Invoice> {
        try {
            this.prisma.$connect();

            const invoice = await this.prisma.invoice.create({
                data: invoiceDTO
            });

            return {...invoice} as unknown as Invoice;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save invoice at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getInvoices(cardId: number): Promise<Invoice[]> {
        try {
            this.prisma.$connect();

            const invoices = await this.prisma.invoice.findMany({
                where: {
                    cardId: cardId
                }
            }).then(invoices => {
                if (invoices) return invoices;
                throw new DatabaseException("invoices not found", 404);
            });

            return invoices as unknown as Invoice[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get invoice by card id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateInvoice(invoiceId: number, invoiceDTO: InvoiceDTO): Promise<Invoice> {
        try {
            this.prisma.$connect();

            const invoice = await this.prisma.invoice.update({
                data: invoiceDTO,
                where: {id: invoiceId}
            }).then(invoice => {
                if (invoice) return invoice;
                throw new DatabaseException("error: invoice not found", 404);
            });

            return {...invoice} as unknown as Invoice;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update invoice at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
