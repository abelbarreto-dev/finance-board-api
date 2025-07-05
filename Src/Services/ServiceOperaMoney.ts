import {OperaMoney} from "@Models/OperaMoney";
import {RepositoryOperaMoney} from "@Repositories/RepositoryOperaMoney";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";
import {OperaMoneyUtil} from "@Utils/OperaMoneyUtil";

export class ServiceOperaMoney {
    private readonly _repository: RepositoryOperaMoney;

    constructor() {
        this._repository = new RepositoryOperaMoney();
    }

    private get repository(): RepositoryOperaMoney {
        return this._repository;
    }

    async saveOperaMoney(operaMoneyDTO: OperaMoneyDTO): Promise<OperaMoney> {
        OperaMoneyUtil.checkOperaMoney(operaMoneyDTO);

        return await this.repository.saveOperaMoney(operaMoneyDTO);
    }

    async getOperaMoneys(moneyId: number): Promise<OperaMoney[]> {
        return await this.repository.getOperaMoneys(moneyId);
    }
}
