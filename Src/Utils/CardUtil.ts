import {MoneyException} from "@Exceptions/MoneyException";
import {EnumFlag} from "@Enums/EnumFlag";
import {CardDTO} from "@Dtos/CardDTO";

export class CardUtil {
    private static checkBalance(balance: number, typeBalance: string = ""): void {
        if (balance < 0) throw new MoneyException(
            `card${typeBalance} balance value must be positive`
        );
    }

    private static checkCardFlag(cardFlag: string): void {
        const checkers: {[index: string]: string} = {...EnumFlag};

        if (!Object.keys(checkers).includes(cardFlag)) throw new MoneyException(
            "invalid card flag found"
        );
    }

    public static checkCard(card: CardDTO): void {
        this.checkCardFlag(card.cardFlag);
        this.checkBalance(card.cardLimit, " total limit");
        this.checkBalance(card.currentLimit, " current limit");

        const balance: any = card.balanceValue;

        if (![undefined, null].includes(balance))
            this.checkBalance(card.balanceValue as number, "");
    }
}
