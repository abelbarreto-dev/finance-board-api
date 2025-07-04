import {PixKeyDTO} from "@Dtos/PixKeyDTO";
import {PixKey} from "@Models/PixKey";
import {RepositoryPixKey} from "@Repositories/RepositoryPixKey";
import {PixKeyUtil} from "@Utils/PixKeyUtil";

export class ServicePixKey {
    private readonly _repository: RepositoryPixKey;

    constructor() {
        this._repository = new RepositoryPixKey();
    }

    private get repository(): RepositoryPixKey {
        return this._repository;
    }

    async savePixKey(pixKeyDTO: PixKeyDTO): Promise<PixKey> {
        PixKeyUtil.checkPixKey(pixKeyDTO);

        return await this.repository.savePixKey(pixKeyDTO);
    }

    async getPixKeys(bankId: number): Promise<PixKey[]> {
        return await this.repository.getPixKeys(bankId);
    }

    async updatePixKey(idPixKey: number, pixKeyDTO: PixKeyDTO): Promise<PixKey> {
        PixKeyUtil.checkPixKey(pixKeyDTO);

        return await this.repository.updatePixKey(idPixKey, pixKeyDTO);
    }

    async deletePixKey(idPixKey: number): Promise<PixKey> {
        return await this.repository.deletePixKey(idPixKey);
    }
}
