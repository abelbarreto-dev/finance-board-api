import { PrismaClient } from "@prisma/client";
import {PixKey} from "@Models/PixKey";
import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryPixKey{
    private readonly _prisma: PrismaClient;

    constructor(){
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async savePixKey(pixKeyDTO: PixKeyDTO): Promise<PixKey> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const pixKey = await this.prisma.pixKey.create({
                    data: pixKeyDTO
                });

                return {...pixKey} as unknown as PixKey;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save pix key at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getPixKeys(bankId: number): Promise<PixKey[]> {
        try {
            this.prisma.$connect();

            const pixKeys = await this.prisma.pixKey.findMany({
                where: {bankId: bankId}
            }).then(pixKeys => {
                if (pixKeys) return pixKeys;
                throw new DatabaseException("pix keys not found", 404);
            });

            return pixKeys as unknown as PixKey[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get pix keys by bank id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updatePixKey(pixKeyId: number, pixKeyDTO: PixKeyDTO): Promise<PixKey> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const pixKey = await this.prisma.pixKey.findFirst({
                    where: {id: pixKeyId}
                }).then(pixKey => {
                    if (pixKey) return pixKey as unknown as PixKey;
                    throw new DatabaseException("pix key not found", 404);
                });

                pixKey.bankId = pixKeyDTO.bankId;
                pixKey.name = pixKeyDTO.name;
                pixKey.typeKey = pixKeyDTO.typeKey;
                pixKey.pixKey = pixKeyDTO.pixKey;

                const pixKeyUpdated = await this.prisma.pixKey.update({
                    data: pixKey,
                    where: {id: pixKeyId}
                }).catch(error => {
                    console.error(error);
                    throw new DatabaseException("error to update pix key at database", 500);
                });

                return {...pixKeyUpdated} as unknown as PixKey;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update pix key at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deletePixKey(idPixKey: number): Promise<PixKey> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const pixKey = await this.prisma.pixKey.delete({
                    where: {id: idPixKey}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                }).then(pixKey => {
                    if (pixKey) return pixKey;
                    throw new DatabaseException("pix key not found", 404);
                });

                return pixKey as unknown as PixKey;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to delete pix key at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
