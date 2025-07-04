import { PrismaClient } from "@prisma/client";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";
import {BankBox} from "@Models/BankBox";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {Bank} from "@Models/Bank";

export class RepositoryBankBox {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveBankBox(bankBoxDTO: BankBoxDTO): Promise<BankBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                if (bankBoxDTO.balanceValue < 0) {
                    throw new DatabaseException("bank box value is negative to create", 400);
                }

                const bank = await this.prisma.bank.findFirst(
                    {where: {id: bankBoxDTO.bankId}}
                ).then(bank => {
                    if (bank) return bank as unknown as Bank;
                    throw new DatabaseException("bank not found", 404);
                });

                if (bank.balanceValue < bankBoxDTO.balanceValue) {
                    throw new DatabaseException("bank box value is greater than bank balance", 400);
                }

                const bankBoxCents = (bankBoxDTO.balanceValue * 10) * 10;
                const bankCents = (bank.balanceValue * 10) * 10;

                bank.balanceValue = ((bankCents - bankBoxCents) / 10) / 10;

                await this.prisma.bank.update({
                    data: bank,
                    where: {id: bankBoxDTO.bankId}
                });

                return await this.prisma.bankBox.create({data: bankBoxDTO}) as unknown as BankBox;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save bank box at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getBankBoxes(bankId: number): Promise<BankBox[]> {
        try {
            this.prisma.$connect();

            const bankBoxes = await this.prisma.bankBox.findMany({
                where: {bankId: bankId}
            }).then(bankBoxes => {
                if (bankBoxes) return bankBoxes;
                throw new DatabaseException("bank boxes not found", 404);
            });

            return bankBoxes as unknown as BankBox[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get bank boxes by bank id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateBankBox(bankBoxId: number, bankBoxDTO: BankBoxDTO): Promise<BankBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const bank = await this.prisma.bank.findFirst(
                    {where: {id: bankBoxDTO.bankId}}
                ).then(bank => {
                    if (bank) return bank as unknown as Bank;
                    throw new DatabaseException("bank not found", 404);
                });

                const bankBox = await this.prisma.bankBox.findFirst({
                    where: {id: bankBoxId}
                }).then(bankBox => {
                    if (bankBox) return bankBox as unknown as BankBox;
                    throw new DatabaseException("bank box not found", 404);
                });

                if (bank.balanceValue < bankBoxDTO.balanceValue) {
                    throw new DatabaseException("bank box value is greater than bank balance", 400);
                }

                const bankBoxCents = (bankBoxDTO.balanceValue * 10) * 10;
                const bankValueCents = (bank.balanceValue * 10) * 10;

                bank.balanceValue = ((bankValueCents - bankBoxCents) / 10) / 10;

                await this.prisma.bank.update({
                    data: bank,
                    where: {id: bankBoxDTO.bankId}
                });

                bankBox.description = bankBoxDTO.description;
                bankBox.objective = bankBoxDTO.objective;
                bankBox.balanceValue = bankBoxDTO.balanceValue;

                return await this.prisma.bankBox.update({
                    data: bankBox,
                    where: {id: bankBoxId}
                }) as unknown as BankBox;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update bank box at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deleteBankBox(bankBoxId: number): Promise<BankBox> {
        try {
            this.prisma.$connect();

            const bankBox = await this.prisma.bankBox.delete({
                where: {id: bankBoxId}
            }).then(bankBox => {
                if (bankBox) return bankBox;
                throw new DatabaseException("bank box not found", 404);
            });

            return {...bankBox} as unknown as BankBox;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to delete bank box at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
