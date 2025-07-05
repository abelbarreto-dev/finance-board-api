import {RepositoryOperaMoneyBox} from "@Repositories/RepositoryOperaMoneyBox";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";
import {OperaMoneyBox} from "@Models/OperaMoneyBox";
import {OperaMoneyUtil} from "@Utils/OperaMoneyUtil";

export class ServiceOperaMoneyBox {
    private readonly _repository: RepositoryOperaMoneyBox;

    constructor() {
        this._repository = new RepositoryOperaMoneyBox();
    }

    private get repository(): RepositoryOperaMoneyBox {
        return this._repository;
    }

    async saveOperaMoneyBox(operaMoneyBoxDTO: OperaMoneyBoxDTO): Promise<OperaMoneyBox> {
        OperaMoneyUtil.checkOperaMoneyBox(operaMoneyBoxDTO);

        return await this.repository.saveOperaMoneyBox(operaMoneyBoxDTO);
    }

    async getOperaMoneyBoxes(moneyBoxId: number): Promise<OperaMoneyBox[]> {
        return await this.repository.getOperaMoneyBoxes(moneyBoxId);
    }
}
