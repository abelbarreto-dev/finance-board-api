import {EnumFinance} from "@Enums/EnumFinance";

export class OperaBankBox {
    id: number = 0;
    bankBoxId: number = 0;
    typeTransfer: EnumFinance = EnumFinance.DEPOSIT;
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
