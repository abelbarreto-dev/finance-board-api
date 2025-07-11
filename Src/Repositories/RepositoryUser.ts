import {UserDTO} from "@Dtos/UserDTO";
import {User} from "@Models/User";
import {PrismaClient} from "@prisma/client";
import {DatabaseException} from "@Exceptions/DatabaseException";
import {compare} from "bcrypt";

export class RepositoryUser {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveUser(userDTO: UserDTO): Promise<User> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const user = await this.prisma.user.create({
                    data: userDTO
                });

                return {...user, password: undefined} as unknown as User;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save new user at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async getUserLogin(userDTO: UserDTO): Promise<User> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const user = await this.prisma.user.findFirst({
                    where: {
                        OR: [
                            {username: userDTO.username},
                            {email: userDTO.username}
                        ],
                        active: true
                    }
                }).then(user => {
                    if (user) return user;
                    throw new DatabaseException("error username or email not found at database", 404);
                });

                await compare(userDTO.password, user.password).catch(() => {
                    throw new DatabaseException("error to compare password", 404);
                });

                return {...user, password: undefined} as unknown as User;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to make login at application", 404);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async reactiveUser(userDTO: UserDTO): Promise<User> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const reactiveUser = await this.prisma.user.findFirst({
                    where: {
                        OR: [
                            {username: userDTO.username},
                            {email: userDTO.username}
                        ]
                    }
                }).then(user => {
                    if (user) return user;
                    throw new DatabaseException("error username or email not found at database", 404);
                });

                await compare(userDTO.password, reactiveUser.password).catch(() => {
                    throw new DatabaseException("error to compare password", 404);
                });

                const reactivated = await this.prisma.user.update({
                    data: {active: true},
                    where: {id: reactiveUser.id}
                });

                return {...reactivated, password: undefined} as unknown as User;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to make the user reactivation at application", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async updateUser(userId: number, userDTO: UserDTO): Promise<User> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const user = await this.prisma.user.findFirst({
                    where: {id: userId}
                }).then(user => {
                    if (user) return user as unknown as User;
                    throw new DatabaseException("user not found", 404);
                });

                user.name = userDTO.name;
                user.lastName = userDTO.lastName;
                user.email = userDTO.email;
                user.username = userDTO.username;
                user.password = userDTO.password;
                user.active = userDTO.active;
                user.mobile = userDTO.mobile;

                const userUpdated = await this.prisma.user.update({
                    data: user,
                    where: {id: userId}
                }).catch(error => {
                    console.error(error);
                    throw new DatabaseException("error to update an existent user at database", 404);
                });

                return {...userUpdated, password: undefined} as unknown as User;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update an user at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }

    async deactivateUser(id: number): Promise<User> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const deletedUser = await this.prisma.user.update(
                    {data: {active: false}, where: {id: id}}
                ).catch(error => {
                    console.error(error);
                    throw new DatabaseException("error to deactivate user at database", 404);
                }).then(user => {
                    if (user) return user;
                    throw new DatabaseException("error user not found to deactivate at database", 404);
                });

                return {...deletedUser, password: undefined} as unknown as User;
            });
        } catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to deactivate user at database", 500);
        } finally {
            this.prisma.$disconnect();
        }
    }
}
