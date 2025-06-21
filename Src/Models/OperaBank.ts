import {EnumTransfer} from "@Enums/EnumTransfer";
import {EnumOpState} from "@Enums/EnumOpState";
import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export class OperaBank {
    id: number = 0;
    bankId: number = 0;
    description: string = "";
    typeTransfer: EnumTransfer = EnumTransfer.PIX;
    state: EnumOpState = EnumOpState.MYSELF;
    bankOperation: EnumFinancePlus = EnumFinancePlus.PAYMENT;
    senderName: string = "";
    receiverName: string = "";
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
