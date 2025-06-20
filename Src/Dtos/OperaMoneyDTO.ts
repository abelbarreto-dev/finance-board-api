import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export interface OperaMoneyDTO {
    moneyId: number;
    typeTransfer: EnumFinancePlus;
    balanceValue: number;
}
