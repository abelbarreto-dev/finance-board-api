import {RepositoryOperaBankBox} from "@Repositories/RepositoryOperaBankBox";
import {OperaBankBox} from "@Models/OperaBankBox";
import {OperaBankBoxDTO} from "@Dtos/OperaBankBoxDTO";
import {OperaBankUtil} from "@Utils/OperaBankUtil";

export class ServiceOperaBankBox {
    private readonly _repository: RepositoryOperaBankBox;

    constructor() {
        this._repository = new RepositoryOperaBankBox();
    }

    private get repository(): RepositoryOperaBankBox {
        return this._repository;
    }

    async saveOperaBankBox(operaBankBox: OperaBankBoxDTO): Promise<OperaBankBox> {
        OperaBankUtil.checkOperaBankBox(operaBankBox);

        return await this.repository.saveOperaBankBox(operaBankBox);
    }

    async getOperaBankBoxes(bankBoxId: number): Promise<OperaBankBox[]> {
        return await this.repository.getOperaBankBoxes(bankBoxId);
    }
}
