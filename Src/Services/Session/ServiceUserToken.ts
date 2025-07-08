import {RepositoryUserToken} from "@Repositories/Session/RepositoryUserToken";
import {UserTokenDTO} from "@Dtos/Special/UserTokenDTO";
import {UserToken} from "@Models/Special/UserToken";
import {BaseException} from "@Exceptions/BaseException";

export class ServiceUserToken {
    private readonly _repository: RepositoryUserToken;

    constructor() {
        this._repository = new RepositoryUserToken();
    }

    private get repository(): RepositoryUserToken {
        return this._repository;
    }

    async saveUserToken(userToken: UserTokenDTO): Promise<void> {
        const regex = /^[0-9]+(ms|s|m|h|d|y)$/;

        const except = new BaseException("Internal Server Error.", 500);

        const checkers = {
            expires: !regex.test(userToken.expiresIn),
            token: !userToken.token,
            userId: userToken.userId < 1
        };

        if (Object.values(checkers).includes(true)) throw except;

        return await this.repository.saveUserToken(userToken);
    }

    async getUserTokens(userId: number): Promise<UserToken[]> {
        return await this.repository.getUserTokens(userId);
    }

    async logoutAllUserToken(userId: number): Promise<void> {
        return await this.repository.logoutAllUserToken(userId);
    }
}
