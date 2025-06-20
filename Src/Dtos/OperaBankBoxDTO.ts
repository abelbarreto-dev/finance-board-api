import {EnumFinance} from "@Enums/EnumFinance";

export interface OperaBankBoxDTO {
    bankBoxId: number;
    typeTransfer: EnumFinance;
    balanceValue: number;
}
