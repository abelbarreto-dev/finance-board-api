import {EnumFinancePlus} from "@Enums/EnumFinancePlus";

export class OperaMoney {
    id: number = 0;
    moneyId: number = 0;
    typeTransfer: EnumFinancePlus = EnumFinancePlus.PAYMENT;
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
