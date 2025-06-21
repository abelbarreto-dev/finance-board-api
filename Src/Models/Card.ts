import {EnumFlag} from "@Enums/EnumFlag";

export class Card {
    id: number = 0;
    bankId: number = 0;
    cardFlag: EnumFlag = EnumFlag.MASTERCARD;
    cardLimit: number = 0;
    currentLimit: number = 0;
    balanceValue: number = 0;
    reversal: boolean = false;
    createAt?: Date;
    updateAt?: Date;
}
