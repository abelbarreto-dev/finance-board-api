import {PrismaClient} from "@prisma/client";
import {Bank} from "@Models/Bank";
import {BankDTO} from "@Dtos/BankDTO";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryBank {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveBank(bankDTO: BankDTO): Promise<Bank> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const bank = await this.prisma.bank.create({
                    data: bankDTO
                });

                return {...bank} as unknown as Bank;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save bank at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async getBankById(bankId: number): Promise<Bank> {
        try {
            this.prisma.$connect();

            const bank = await this.prisma.bank.findMany({
                where: {id: bankId}
            }).then(bank => {
                if (bank) return bank;
                throw new DatabaseException("bank not found", 404);
            });

            return bank as unknown as Bank;
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get bank by id at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async getBanks(userId: number): Promise<{ banks: Array<Bank> }> {
        try {
            this.prisma.$connect();

            const banks = await this.prisma.bank.findMany({
                where: {userId: userId}
            }).then(banks => {
                if (banks) return banks;
                throw new DatabaseException("any bank not found", 404);
            });

            return {banks: banks as unknown as Array<Bank>};
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get banks at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async updateBank(bankId: number, bankDTO: BankDTO): Promise<Bank> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const bank = await this.prisma.bank.findFirst({
                    where: {id: bankId}
                }).then(bank => {
                    if (bank) return bank;
                    throw new DatabaseException("bank not found", 404);
                });

                bank.accountType = bankDTO.accountType;
                bank.name = bankDTO.name;
                bank.numbAccount = bankDTO.numbAccount;
                bank.numbAgency = bankDTO.numbAgency;

                const bankUpdated = await this.prisma.bank.update({
                    data: bank,
                    where: {id: bankId}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                });

                return bankUpdated as unknown as Bank;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update bank at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async deleteBank(bankId: number): Promise<Bank> {
        try {
            this.prisma.$connect();

            const bank = await this.prisma.bank.delete({
                where: {id: bankId}
            }).then(bank => {
                if (bank) return bank;
                throw new DatabaseException("error to delete bank at database", 404);
            });

            return {...bank} as unknown as Bank;
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to delete bank at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }
}
