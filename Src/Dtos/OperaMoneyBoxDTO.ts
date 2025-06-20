import {EnumFinance} from "../Enums/EnumFinance";

export interface OperaMoneyBoxDTO {
    moneyBoxId: number;
    typeTransfer: EnumFinance;
    value: number;
}
