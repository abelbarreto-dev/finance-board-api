import {EnumFlag} from "@Enums/EnumFlag";
import {EnumCard} from "@Enums/EnumCard";

export class Card {
    id: number = 0;
    bankId: number = 0;
    description: string = "";
    cardType: EnumCard = EnumCard.PHYSICAL;
    cardFlag: EnumFlag = EnumFlag.MASTERCARD;
    cardLimit: number = 0;
    currentLimit: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
