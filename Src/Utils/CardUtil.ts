import {EnumFlag} from "@Enums/EnumFlag";
import {CardDTO} from "@Dtos/CardDTO";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {CardException} from "@Exceptions/CardException";
import {EnumUtil} from "@Utils/EnumUtil";
import {WordUtil} from "@Utils/WordUtil";
import {EnumCard} from "@Enums/EnumCard";

export class CardUtil {
    private static checkCardType(cardType: string): void {
        const except= new CardException("invalid card type found");

        EnumUtil.checkEnumKey<CardException>(cardType, EnumCard, except);
    }

    private static checkDescription(description: string): void {
        const except= new CardException("invalid characters found in card description or length");

        WordUtil.checkDescription<CardException>(description, 253, except);
    }

    private static checkCardFlag(cardFlag: string): void {
        const except= new CardException("invalid card flag found");

        EnumUtil.checkEnumKey<CardException>(cardFlag, EnumFlag, except);
    }

    public static checkCard(card: CardDTO): void {
        this.checkCardFlag(card.cardFlag);
        this.checkCardType(card.cardType);

        this.checkDescription(card.description);

        const except = new CardException("invalid card limit value found, card limit value must be positive");
        BalanceUtil.checkBalance<CardException>(card.cardLimit, except);
        except.message = "invalid card current limit value found, card current limit value must be positive";
        BalanceUtil.checkBalance<CardException>(card.currentLimit, except);

        const balance: any = card.balanceValue;
        except.message = "invalid card balance value found, card balance value must be positive";

        if (![undefined, null].includes(balance))
            BalanceUtil.checkBalance<CardException>(card.balanceValue as number, except);
    }
}
