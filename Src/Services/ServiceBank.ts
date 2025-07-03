import {RepositoryBank} from "@Repositories/RepositoryBank";
import {Bank} from "@Models/Bank";
import {BankDTO} from "@Dtos/BankDTO";
import {BankUtil} from "@Utils/BankUtil";

export class ServiceBank {
    private readonly _repository: RepositoryBank;

    constructor() {
        this._repository = new RepositoryBank();
    }

    private get repository(): RepositoryBank {
        return this._repository;
    }

    async saveBank(bankDTO: BankDTO): Promise<Bank> {
        BankUtil.checkBank(bankDTO);

        return await this.repository.saveBank(bankDTO);
    }

    async getBankById(bankId: number): Promise<Bank> {
        return await this.repository.getBankById(bankId);
    }

    async getBanks(userId: number): Promise<{ banks: Array<Bank> }> {
        return await this.repository.getBanks(userId);
    }

    async updateBank(bankId: number, bankDTO: BankDTO): Promise<Bank> {
        BankUtil.checkBank(bankDTO);

        return await this.repository.updateBank(bankId, bankDTO);
    }

    async deleteBank(bankId: number): Promise<Bank> {
        return await this.repository.deleteBank(bankId);
    }
}
