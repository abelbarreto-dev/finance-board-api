import {RepositoryMoneyBox} from "@Repositories/RepositoryMoneyBox";
import {MoneyBox} from "@Models/MoneyBox";
import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";
import {MoneyUtil} from "@Utils/MoneyUtil";

export class ServiceMoneyBox {
    private readonly _repository: RepositoryMoneyBox;

    constructor() {
        this._repository = new RepositoryMoneyBox();
    }

    private get repository(): RepositoryMoneyBox {
        return this._repository;
    }

    async saveMoneyBox(moneyBoxDTO: MoneyBoxDTO): Promise<MoneyBox> {
        MoneyUtil.checkMoneyBox(moneyBoxDTO);

        return await this.repository.saveMoneyBox(moneyBoxDTO);
    }

    async getMoneyBoxes(moneyId: number): Promise<MoneyBox[]> {
        return await this.repository.getMoneyBoxes(moneyId);
    }

    async updateMoneyBox(moneyBoxId: number, moneyBoxDTO: MoneyBoxDTO): Promise<MoneyBox> {
        MoneyUtil.checkMoneyBox(moneyBoxDTO);

        return await this.repository.updateMoneyBox(moneyBoxId, moneyBoxDTO);
    }

    async deleteMoneyBox(moneyBoxId: number): Promise<MoneyBox> {
        return await this.repository.deleteMoneyBox(moneyBoxId);
    }
}
