import { PrismaClient } from "@prisma/client";
import {Card} from "@Models/Card";
import {CardDTO} from "@Dtos/CardDTO";
import {DatabaseException} from "@Exceptions/DatabaseException";

export class RepositoryCard {
    private readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    private get prisma(): PrismaClient {
        return this._prisma;
    }

    async saveCard(cardDTO: CardDTO): Promise<Card> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const card = await this.prisma.card.create({
                    data: cardDTO
                });

                return card as unknown as Card;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to save card at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getCardById(cardId: number): Promise<Card> {
        try {
            this.prisma.$connect();

            const card = await this.prisma.card.findFirst({
                where: {
                    id: cardId
                }
            }).then(card => {
                if (card) return card;
                throw new DatabaseException("card not found", 404);
            });

            return card as unknown as Card;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to find card by this card id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async getCards(bankId: number): Promise<Card[]> {
        try {
            this.prisma.$connect();

            const cards = await this.prisma.card.findMany({
                where: {
                    bankId: bankId
                }
            }).then(cards => {
                if (cards) return cards;
                throw new DatabaseException("cards not found", 404);
            });

            return cards as unknown as Card[];
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to find all cards by bank id", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async updateCard(cardId: number, cardDTO: CardDTO): Promise<Card> {
        try {
            this.prisma.$connect();

            return await this.prisma.$transaction(async () => {
                const card = await this.prisma.card.findFirst({
                    where: {id: cardId}
                }).then(card => {
                    if (card) return card as unknown as Card;
                    throw new DatabaseException("card not found", 404);
                });

                card.description = cardDTO.description;
                card.cardType = cardDTO.cardType;
                card.cardFlag = cardDTO.cardFlag;
                card.cardLimit = cardDTO.cardLimit;
                card.currentLimit = cardDTO.currentLimit;
                card.balanceValue = cardDTO.balanceValue;
                card.reversal = cardDTO.reversal;

                const cardUpdated = await this.prisma.card.update({
                    data: card,
                    where: {id: cardId}
                }).catch(error => {
                    throw new DatabaseException(error.message, 500);
                });

                return cardUpdated as unknown as Card;
            });
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to update a card at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }

    async deleteCard(cardId: number): Promise<Card> {
        try {
            this.prisma.$connect();

            const card = await this.prisma.card.delete({
                where: {
                    id: cardId
                }
            }).then(card => {
                if (card) return card;
                throw new DatabaseException("card not found", 404);
            });

            return card as unknown as Card;
        }
        catch (error: unknown) {
            console.error(error);

            throw new DatabaseException("error to delete a card at database", 500);
        }
        finally {
            this.prisma.$disconnect();
        }
    }
}
