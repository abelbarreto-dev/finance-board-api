import {EnumFlag} from "@Enums/EnumFlag";

export interface CardDTO {
    bankId: number;
    cardFlag: EnumFlag;
    cardLimit: number;
    currentLimit: number;
    balanceValue: number;
    reversal?: boolean;
}
