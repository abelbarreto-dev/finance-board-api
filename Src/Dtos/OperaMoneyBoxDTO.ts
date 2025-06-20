import {EnumFinance} from "@Enums/EnumFinance";

export interface OperaMoneyBoxDTO {
    moneyBoxId: number;
    typeTransfer: EnumFinance;
    balanceValue: number;
}
