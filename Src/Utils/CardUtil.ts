import {EnumFlag} from "@Enums/EnumFlag";
import {CardDTO} from "@Dtos/CardDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {CardException} from "@Exceptions/CardException";
import {EnumUtil} from "@Utils/EnumUtil";
import {WordUtil} from "@Utils/WordUtil";
import {EnumCard} from "@Enums/EnumCard";

export class CardUtil {
    private static except: CardException = new CardException("");

    private static checkCardType(cardType: string): void {
        this.except.message = "invalid card type found";

        EnumUtil.checkEnumKey<CardException>(cardType, EnumCard, this.except);
    }

    private static checkDescription(description: string): void {
        this.except.message = "invalid characters found in card description or length";

        WordUtil.checkDescription<CardException>(description, 253, this.except);
    }

    private static checkCardFlag(cardFlag: string): void {
        this.except.message = "invalid card flag found";

        EnumUtil.checkEnumKey<CardException>(cardFlag, EnumFlag, this.except);
    }

    public static checkCard(card: CardDTO): void {
        this.checkCardFlag(card.cardFlag);
        this.checkCardType(card.cardType);

        this.checkDescription(card.description);

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
