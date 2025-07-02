import {RepositoryMoney} from "@Repositories/RepositoryMoney";
import {Money} from "@Models/Money";
import {MoneyDTO} from "@Dtos/MoneyDTO";
import {MoneyUtil} from "@Utils/MoneyUtil";

export class ServiceMoney {
    private readonly _repository: RepositoryMoney;

    constructor() {
        this._repository = new RepositoryMoney();
    }

    private get repository(): RepositoryMoney {
        return this._repository;
    }

    async saveMoney(moneyDTO: MoneyDTO): Promise<Money> {
        MoneyUtil.checkMoney(moneyDTO);

        return await this.repository.saveMoney(moneyDTO);
    }

    async getMoney(userId: number): Promise<Money> {
        return await this.repository.getMoney(userId);
    }

    async updateMoney(id: number, moneyDTO: MoneyDTO): Promise<Money> {
        MoneyUtil.checkMoney(moneyDTO);

        return await this.repository.updateMoney(id, moneyDTO);
    }
}
