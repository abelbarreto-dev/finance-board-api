import {PrismaClient} from "@prisma/client";
import {UserTokenDTO} from "@Dtos/Special/UserTokenDTO";
import {UserToken} from "@Models/Special/UserToken";

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

            throw new Error("error to save user token at database");
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

            throw new Error("error to get user token at database");
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deleteAllUserToken(userId: number): Promise<void> {
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

            throw new Error("error to delete user token at database");
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
