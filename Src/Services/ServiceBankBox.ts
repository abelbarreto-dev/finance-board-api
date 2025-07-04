import {RepositoryBankBox} from "@Repositories/RepositoryBankBox";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";
import {BankBox} from "@Models/BankBox";
import {BankUtil} from "@Utils/BankUtil";

export class ServiceBankBox {
    private readonly _repository: RepositoryBankBox;

    constructor() {
        this._repository = new RepositoryBankBox();
    }

    private get repository(): RepositoryBankBox {
        return this._repository;
    }

    async saveBankBox(bankBoxDTO: BankBoxDTO): Promise<BankBox> {
        BankUtil.checkBankBox(bankBoxDTO);

        return await this.repository.saveBankBox(bankBoxDTO);
    }

    async getBankBoxes(bankId: number): Promise<BankBox[]> {
        return await this.repository.getBankBoxes(bankId);
    }

    async updateBankBox(bankBoxId: number, bankBoxDTO: BankBoxDTO): Promise<BankBox> {
        BankUtil.checkBankBox(bankBoxDTO);

        return await this.repository.updateBankBox(bankBoxId, bankBoxDTO);
    }

    async deleteBankBox(bankBoxId: number): Promise<BankBox> {
        return await this.repository.deleteBankBox(bankBoxId);
    }
}
