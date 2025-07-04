import {RepositoryOperaBank} from "@Repositories/RepositoryOperaBank";
import {OperaBank} from "@Models/OperaBank";
import {OperaBankDTO} from "@Dtos/OperaBankDTO";
import {OperaBankUtil} from "@Utils/OperaBankUtil";

export class ServiceOperaBank {
    private readonly _repository: RepositoryOperaBank;

    constructor() {
        this._repository = new RepositoryOperaBank();
    }

    private get repository(): RepositoryOperaBank {
        return this._repository;
    }

    async saveOperaBank(operaBankDTO: OperaBankDTO): Promise<OperaBank> {
        OperaBankUtil.checkOperaBank(operaBankDTO);

        return await this.repository.saveOperaBank(operaBankDTO);
    }

    async getOperaBanks(bankId: number): Promise<OperaBank[]> {
        return await this.repository.getOperaBanks(bankId);
    }
}
