import {MoneyDTO} from "@Dtos/MoneyDTO";
import {Money} from "@Models/Money";
import { PrismaClient } from "@prisma/client";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryMoney {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveMoney(moneyDTO: MoneyDTO): Promise<Money> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const money = await this.prisma.money.create({
                    data: moneyDTO
                });

                return {...money} as unknown as Money;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save money cash at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getMoney(userId: number): Promise<Money> {
        try {
            this.prisma.$connect();

            const money = await this.prisma.money.findFirst({
                where: {
                    userId: userId
                }
            }).then(money => {
                if (money) return money;
                throw new DatabaseException("money cash not found", 404);
            });

            return {...money} as unknown as Money;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get money cash registry at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateMoney(moneyId: number, moneyDTO: MoneyDTO): Promise<Money> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const money = await this.prisma.money.findFirst({
                    where: {id: moneyId}
                }).then(money => {
                    if (money) return money as unknown as Money;
                    throw new DatabaseException("money cash not found", 404);
                });

                money.balanceValue = moneyDTO.balanceValue;

                const moneyUpdated = await this.prisma.money.update({
                    data: money,
                    where: {id: moneyId}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                });

                return moneyUpdated as unknown as Money;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update money cash at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
