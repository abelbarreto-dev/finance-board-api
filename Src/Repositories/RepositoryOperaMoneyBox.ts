import {PrismaClient} from "@prisma/client";
import {OperaMoneyBox} from "@Models/OperaMoneyBox";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {EnumFinance} from "@Enums/EnumFinance";
import {MoneyBox} from "@Models/MoneyBox";

export class RepositoryOperaMoneyBox {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    private async moneyBoxBalanceOperation(
        balanceOne: number,
        balanceTwo: number,
        operation: EnumFinance
    ): Promise<number> {
        balanceOne = (balanceOne * 10) * 10;
        balanceTwo = (balanceTwo * 10) * 10;

        if (EnumFinance.WITHDRAW === operation) {
            if (balanceOne < balanceTwo) {
                throw new DatabaseException("money box balance is less than balance to withdraw", 400);
            }
            return ((balanceOne - balanceTwo) / 10)/ 10;
        }

        return ((balanceOne + balanceTwo) / 10) / 10;
    }

    async saveOperaMoneyBox(operaMoneyBoxDTO: OperaMoneyBoxDTO): Promise<OperaMoneyBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const moneyBox = await this.prisma.moneyBox.findFirst({
                    where: {id: operaMoneyBoxDTO.moneyBoxId}
                }).then(moneyBox => {
                    if (moneyBox) return moneyBox as unknown as MoneyBox;
                    throw new DatabaseException("money box not found", 404);
                });

                moneyBox.balanceValue = await this.moneyBoxBalanceOperation(
                    moneyBox.balanceValue,
                    operaMoneyBoxDTO.balanceValue,
                    operaMoneyBoxDTO.typeTransfer
                );

                await this.prisma.moneyBox.update({
                    data: moneyBox,
                    where: {id: operaMoneyBoxDTO.moneyBoxId}
                });

                return await this.prisma.operaMoneyBox.create(
                    {data: operaMoneyBoxDTO}
                ) as unknown as OperaMoneyBox;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save opera money box at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getOperaMoneyBoxes(moneyBoxId: number): Promise<OperaMoneyBox[]> {
        try {
            this.prisma.$connect();

            const operaMoneyBoxes = await this.prisma.operaMoneyBox.findMany({
                where: {moneyBoxId: moneyBoxId}
            }).then(operaMoneyBoxes => {
                if (operaMoneyBoxes) return operaMoneyBoxes;
                throw new DatabaseException("opera money boxes not found", 404);
            });

            return operaMoneyBoxes as unknown as OperaMoneyBox[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get opera money boxes by money box id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
