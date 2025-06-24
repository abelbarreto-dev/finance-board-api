import {EnumFlag} from "@Enums/EnumFlag";
import {CardDTO} from "@Dtos/CardDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {CardException} from "@Exceptions/CardException";

export class CardUtil {
    private static except: CardException = new CardException("");

    private static checkCardFlag(cardFlag: string): void {
        const checkers: {[index: string]: string} = {...EnumFlag};

        this.except.message = "invalid card flag found";

        if (!Object.keys(checkers).includes(cardFlag)) throw this.except
    }

    public static checkCard(card: CardDTO): void {
        this.checkCardFlag(card.cardFlag);

        this.except.message = "invalid card limit value found, card limit value must be positive";
        BalanceUtil.checkBalance<CardException>(card.cardLimit, this.except);
        this.except.message = "invalid card current limit value found, card current limit value must be positive";
        BalanceUtil.checkBalance<CardException>(card.currentLimit, this.except);

        const balance: any = card.balanceValue;
        this.except.message = "invalid card balance value found, card balance value must be positive";

        if (![undefined, null].includes(balance))
            BalanceUtil.checkBalance<CardException>(card.balanceValue as number, this.except);
    }
}
