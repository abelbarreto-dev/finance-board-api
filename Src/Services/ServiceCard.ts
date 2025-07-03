import {RepositoryCard} from "@Repositories/RepositoryCard";
import {Card} from "@Models/Card";
import {CardUtil} from "@Utils/CardUtil";
import {CardDTO} from "@Dtos/CardDTO";

export class ServiceCard {
    private readonly _repository: RepositoryCard;

    constructor() {
        this._repository = new RepositoryCard();
    }

    private get repository(): RepositoryCard {
        return this._repository;
    }

    async saveCard(cardDTO: CardDTO): Promise<Card> {
        CardUtil.checkCard(cardDTO);

        return await this.repository.saveCard(cardDTO);
    }

    async getCardById(cardId: number): Promise<Card> {
        return await this.repository.getCardById(cardId);
    }

    async getCards(bankId: number): Promise<Card[]> {
        return await this.repository.getCards(bankId);
    }

    async updateCard(cardId: number, cardDTO: CardDTO): Promise<Card> {
        CardUtil.checkCard(cardDTO);

        return await this.repository.updateCard(cardId, cardDTO);
    }

    async deleteCard(cardId: number): Promise<Card> {
        return await this.repository.deleteCard(cardId);
    }
}
