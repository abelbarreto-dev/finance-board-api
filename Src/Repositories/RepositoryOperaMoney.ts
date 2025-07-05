import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoney} from "@Models/OperaMoney";
import {PrismaClient} from "@prisma/client";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {Money} from "@Models/Money";

export class RepositoryOperaMoney {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    private async moneyBalanceOperation(
        balanceOne: number,
        balanceTwo: number,
        operation: EnumFinancePlus
    ): Promise<number> {
        balanceOne = (balanceOne * 10) * 10;
        balanceTwo = (balanceTwo * 10) * 10;

        if ([EnumFinancePlus.PAYMENT, EnumFinancePlus.WITHDRAW].includes(operation)) {
            if (balanceOne < balanceTwo) {
                throw new DatabaseException("money balance is less than balance to withdraw", 400);
            }
            return ((balanceOne - balanceTwo) / 10)/ 10;
        }

        return ((balanceOne + balanceTwo) / 10) / 10;
    }

    async saveOperaMoney(operaMoneyDTO: OperaMoneyDTO): Promise<OperaMoney> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const money = await this.prisma.money.findFirst({
                    where: {id: operaMoneyDTO.moneyId}
                }).then(money => {
                    if (money) return money as unknown as Money;
                    throw new DatabaseException("money not found", 404);
                });

                money.balanceValue = await this.moneyBalanceOperation(
                    money.balanceValue,
                    operaMoneyDTO.balanceValue,
                    operaMoneyDTO.typeTransfer
                );

                await this.prisma.money.update({
                    data: money,
                    where: {id: operaMoneyDTO.moneyId}
                });

                return await this.prisma.operaMoney.create({
                    data: operaMoneyDTO
                }) as unknown as OperaMoney;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save opera money at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getOperaMoneys(moneyId: number): Promise<OperaMoney[]> {
        try {
            this.prisma.$connect();

            const operaMoneys = await this.prisma.operaMoney.findMany({
                where: {moneyId: moneyId}
            }).then(operaMoneys => {
                if (operaMoneys) return operaMoneys;
                throw new DatabaseException("opera money not found", 404);
            });

            return operaMoneys as unknown as OperaMoney[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get opera money by money id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
