import { PrismaClient } from "@prisma/client";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBank} from "@Models/OperaBank";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {Bank} from "@Models/Bank";

export class RepositoryOperaBank {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    private async bankBalanceOperation(
        balanceOne: number,
        balanceTwo: number,
        operation: EnumFinancePlus
    ): Promise<number> {
        balanceOne = (balanceOne * 10) * 10;
        balanceTwo = (balanceTwo * 10) * 10;

        if ([EnumFinancePlus.PAYMENT, EnumFinancePlus.WITHDRAW].includes(operation)) {
            if (balanceOne < balanceTwo) {
                throw new DatabaseException("bank balance is less than balance to withdraw", 400);
            }
            return ((balanceOne - balanceTwo) / 10)/ 10;
        }

        return ((balanceOne + balanceTwo) / 10) / 10;
    }

    async saveOperaBank(operaBankDTO: OperaBankDTO): Promise<OperaBank> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const bank = await this.prisma.bank.findFirst({
                    where: {id: operaBankDTO.bankId}
                }).then(bank => {
                    if (bank) return bank as unknown as Bank;
                    throw new DatabaseException("bank not found", 404);
                });

                bank.balanceValue = await this.bankBalanceOperation(
                    bank.balanceValue,
                    operaBankDTO.balanceValue,
                    operaBankDTO.bankOperation
                );

                await this.prisma.bank.update({
                    data: bank,
                    where: {id: operaBankDTO.bankId}
                });

                return await this.prisma.operaBank.create({data: operaBankDTO}) as unknown as OperaBank;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save opera bank at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getOperaBanks(bankId: number): Promise<OperaBank[]> {
        try {
            this.prisma.$connect();

            const operaBanks = await this.prisma.operaBank.findMany({
                where: {bankId: bankId}
            }).then(operaBanks => {
                if (operaBanks) return operaBanks;
                throw new DatabaseException("opera banks not found", 404);
            });

            return operaBanks as unknown as OperaBank[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get opera banks by bank id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
