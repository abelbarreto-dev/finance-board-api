import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export interface OperaBankDTO {
    bankId: number;
    description: string;
    typeTransfer: EnumTransfer;
    state: EnumOpState;
    bankOperation: EnumFinancePlus;
    senderName: string;
    receiverName: string;
    balanceValue: number;
}
