import {PrismaClient} from "@prisma/client";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";
import {MoneyBox} from "@Models/MoneyBox";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {Money} from "@Models/Money";

export class RepositoryMoneyBox {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveMoneyBox(moneyBoxDTO: MoneyBoxDTO): Promise<MoneyBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async (): Promise<MoneyBox> => {
                if (moneyBoxDTO.balanceValue < 0) {
                    throw new DatabaseException("money box value is negative to create", 400);
                }

                const money = await this.prisma.money.findFirst({
                    where: {id: moneyBoxDTO.moneyId}
                }).then(money => {
                    if (money) return money as unknown as Money;
                    throw new DatabaseException("money cash not found", 404);
                });

                if (moneyBoxDTO.balanceValue > money.balanceValue) {
                    throw new DatabaseException("money box value is greater than money cash value", 400);
                }

                const moneyBoxCents = (moneyBoxDTO.balanceValue * 10) * 10;
                const moneyCents = (money.balanceValue * 10) * 10;

                money.balanceValue = ((moneyCents - moneyBoxCents) / 10) / 10;

                await this.prisma.money.update({
                    data: money,
                    where: {id: moneyBoxDTO.moneyId}
                });

                const moneyBox = await this.prisma.moneyBox.create({
                    data: moneyBoxDTO
                });

                return {...moneyBox} as unknown as MoneyBox;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save money box at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async getMoneyBoxes(moneyId: number): Promise<MoneyBox[]> {
        try {
            this.prisma.$connect();

            const moneyBoxes = await this.prisma.moneyBox.findMany({
                where: {
                    moneyId: moneyId
                }
            }).then(moneyBoxes => {
                if (moneyBoxes) return moneyBoxes;
                throw new DatabaseException("money boxes not found", 404);
            })

            return moneyBoxes as unknown as MoneyBox[];
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get money boxes by money id", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async updateMoneyBox(moneyBoxId: number, moneyBoxDTO: MoneyBoxDTO): Promise<MoneyBox> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async (): Promise<MoneyBox> => {
                const money = await this.prisma.money.findFirst({
                    where: {id: moneyBoxDTO.moneyId}
                }).then(money => {
                    if (money) return money as unknown as Money;
                    throw new DatabaseException("money cash not found", 404);
                });

                const moneyBox = await this.prisma.moneyBox.findFirst({
                    where: {id: moneyBoxId}
                }).then(moneyBox => {
                    if (moneyBox) return moneyBox as unknown as MoneyBox;
                    throw new DatabaseException("money box not found", 404);
                });

                if (moneyBoxDTO.balanceValue > money.balanceValue) {
                    throw new DatabaseException("money box value is greater than money cash value", 400);
                }

                const moneyBoxCents = (moneyBoxDTO.balanceValue * 10) * 10;
                const moneyValueCents = (money.balanceValue * 10) * 10;

                money.balanceValue = ((moneyValueCents - moneyBoxCents) / 10) / 10;

                await this.prisma.money.update({
                    data: money,
                    where: {id: moneyBoxDTO.moneyId}
                });

                moneyBox.description = moneyBoxDTO.description;
                moneyBox.objective = moneyBoxDTO.objective;
                moneyBox.balanceValue = moneyBoxDTO.balanceValue;

                return await this.prisma.moneyBox.update({
                    data: moneyBox,
                    where: {id: moneyBoxId}
                }) as unknown as MoneyBox;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update money box at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async deleteMoneyBox(moneyBoxId: number): Promise<MoneyBox> {
        try {
            this.prisma.$connect();

            const moneyBox = await this.prisma.moneyBox.delete({
                where: {id: moneyBoxId}
            }).catch(error => {
                throw new DatabaseException(error.message, 404);
            }).then(moneyBox => {
                if (moneyBox) return moneyBox;
                throw new DatabaseException("money box not found", 404);
            });

            return {...moneyBox} as unknown as MoneyBox;
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to delete money box at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }
}
