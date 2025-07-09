import {PrismaClient} from "@prisma/client";
import {UserTokenDTO} from "@Dtos/Special/UserTokenDTO";
import {UserToken} from "@Models/Special/UserToken";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryUserToken {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveUserToken(userToken: UserTokenDTO): Promise<void> {
        try {
            this.prisma.$connect();

            await this.prisma.$transaction(async () => {
                await this.prisma.userTokens.create({data: userToken});
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save user token at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getUserTokens(userId: number): Promise<UserToken[]> {
        try {
            this.prisma.$connect();

            const userToken = await this.prisma.userTokens.findFirst({
                where: {userId: userId}
            }).then(userToken => {
                if (userToken) return userToken;
            });

            return userToken as unknown as UserToken[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to get user token at database", 404);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async logoutUserByToken(token: string): Promise<void> {
        try {
            this.prisma.$connect();

            await this.prisma.$transaction(async () => {
                await this.prisma.userTokens.deleteMany({
                    where: {token: token}
                });
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("failed to logout or user session not found", 404);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async logoutAllUserToken(userId: number): Promise<void> {
        try {
            this.prisma.$connect();

            await this.prisma.$transaction(async () => {
                await this.prisma.userTokens.deleteMany({
                    where: {userId: userId}
                });
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("failed to logout or user session not found", 404);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
