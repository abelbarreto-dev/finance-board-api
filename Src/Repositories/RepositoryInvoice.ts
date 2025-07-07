import { PrismaClient } from "@prisma/client";
import {InvoiceDTO} from "@Dtos/InvoiceDTO";
import {Invoice} from "@Models/Invoice";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {Card} from "@Models/Card";

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

            return await this.prisma.$transaction(async () => {
                const card = await this.prisma.card.findFirst({
                    where: {id: invoiceDTO.cardId}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                }).then(card => {
                    if (card) return card as unknown as Card;
                    throw new DatabaseException("card not found", 404);
                });

                if (card.currentLimit < invoiceDTO.balanceValue) {
                    throw new DatabaseException(
                        "card current limit can not be negative",
                        400
                    );
                }

                card.currentLimit -= invoiceDTO.balanceValue;

                await this.prisma.card.update({
                    data: card,
                    where: {id: card.id}
                });

                const invoice = await this.prisma.invoice.create({
                    data: invoiceDTO
                });

                return {...invoice} as unknown as Invoice;
            });
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

            return await this.prisma.$transaction(async () => {
                const invoice = await this.prisma.invoice.findFirst({
                    where: {id: invoiceId}
                }).then(invoice => {
                    if (invoice) return invoice as unknown as Invoice;
                    throw new DatabaseException("invoice not found", 404);
                });

                invoice.cardId = invoiceDTO.cardId;
                invoice.description = invoiceDTO.description;
                invoice.quantity = invoiceDTO.quantity;
                invoice.invoicePaid = invoiceDTO.invoicePaid;
                invoice.balanceValue = invoiceDTO.balanceValue;
                invoice.reversal = invoiceDTO.reversal;

                const card = await this.prisma.card.findFirst({
                    where: {id: invoice.cardId}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                }).then(card => {
                    if (card) return card as unknown as Card;
                    throw new DatabaseException("card not found", 404);
                });

                if (invoice.reversal) {
                    card.currentLimit += invoice.balanceValue;
                } else if (card.currentLimit < invoice.balanceValue) {
                    throw new DatabaseException(
                        "card current limit can not be negative",
                        400
                    );
                } else {
                    card.currentLimit -= invoice.balanceValue;
                }

                await this.prisma.card.update({
                    data: card,
                    where: {id: card.id}
                });

                const invoiceUpdated = await this.prisma.invoice.update({
                    data: invoice,
                    where: {id: invoiceId}
                });

                return invoiceUpdated as unknown as Invoice;
            });
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
