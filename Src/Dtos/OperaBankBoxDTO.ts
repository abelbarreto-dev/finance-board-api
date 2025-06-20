import {EnumFinance} from "@Enums/EnumFinance";

export interface OperaBankBoxDTO {
    bankBoxId: number;
    typeTransfer: EnumFinance;
    value: number;
}
