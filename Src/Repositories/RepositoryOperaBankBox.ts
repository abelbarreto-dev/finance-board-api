import { PrismaClient } from "@prisma/client";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {OperaBankBox} from "@Models/OperaBankBox";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {EnumFinance} from "@Enums/EnumFinance";
import {BankBox} from "@Models/BankBox";

export class RepositoryOperaBankBox {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    private async bankBoxBalanceOperation(
        balanceOne: number,
        balanceTwo: number,
        operation: EnumFinance
    ): Promise<number> {
        balanceOne = (balanceOne * 10) * 10;
        balanceTwo = (balanceTwo * 10) * 10;

        if (EnumFinance.WITHDRAW === operation) {
            if (balanceOne < balanceTwo) {
                throw new DatabaseException("bank box balance is less than balance to withdraw", 400);
            }
            return ((balanceOne - balanceTwo) / 10)/ 10;
        }

        return ((balanceOne + balanceTwo) / 10) / 10;
    }

    async saveOperaBankBox(operaBankBox: OperaBankBoxDTO): Promise<OperaBankBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const bankBox = await this.prisma.bankBox.findFirst({
                    where: {id: operaBankBox.bankBoxId}
                }).then(bankBox => {
                    if (bankBox) return bankBox as unknown as BankBox;
                    throw new DatabaseException("bank box not found", 404);
                });

                bankBox.balanceValue = await this.bankBoxBalanceOperation(
                    bankBox.balanceValue,
                    operaBankBox.balanceValue,
                    operaBankBox.typeTransfer
                );

                await this.prisma.bankBox.update({
                    data: bankBox,
                    where: {id: operaBankBox.bankBoxId}
                });

                return await this.prisma.operaBankBox.create({data: operaBankBox}) as unknown as OperaBankBox;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save opera bank box at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getOperaBankBoxes(bankBoxId: number): Promise<OperaBankBox[]> {
        try {
            this.prisma.$connect();

            const operaBankBoxes = await this.prisma.operaBankBox.findMany({
                where: {bankBoxId: bankBoxId}
            }).then(operaBankBoxes => {
                if (operaBankBoxes) return operaBankBoxes;
                throw new DatabaseException("opera bank boxes not found", 404);
            });

            return operaBankBoxes as unknown as OperaBankBox[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get opera bank boxes by bank box id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
