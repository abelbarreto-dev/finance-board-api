import {PrismaClient} from "@prisma/client";
import {OperaInvoiceDTO} from "@Dtos/OperaInvoiceDTO";
import {OperaInvoice} from "@Models/OperaInvoice";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {Invoice} from "@Models/Invoice";

export class RepositoryOperaInvoice {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveOperaInvoice(operaInvoiceDTO: OperaInvoiceDTO): Promise<OperaInvoice> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const invoice = await this.prisma.invoice.findFirst({
                    where: {id: operaInvoiceDTO.invoiceId}
                }).then(invoice => {
                    if (invoice) return invoice as unknown as Invoice;
                    throw new DatabaseException("invoice not found", 404);
                });

                if (!(invoice.quantity > invoice.invoicePaid)) {
                    throw new DatabaseException("invoice quantity is less than invoice paid", 400);
                }

                if (invoice.balanceValue != operaInvoiceDTO.balanceValue) {
                    throw new DatabaseException(
                        "invoice balance value is different from opera invoice balance value",
                        400
                    );
                }

                invoice.invoicePaid += 1;

                await this.prisma.invoice.update({
                    data: invoice,
                    where: {id: invoice.id}
                });

                return await this.prisma.operaInvoice.create({
                    data: operaInvoiceDTO
                }) as unknown as OperaInvoice;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save opera invoice at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getOperaInvoices(invoiceId: number): Promise<OperaInvoice[]> {
        try {
            this.prisma.$connect();

            const operaInvoices = await this.prisma.operaInvoice.findMany({
                where: {invoiceId: invoiceId}
            }).then(operaInvoices => {
                if (operaInvoices) return operaInvoices;
                throw new DatabaseException("opera invoices not found", 404);
            });

            return operaInvoices as unknown as OperaInvoice[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get opera invoices by invoice id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
