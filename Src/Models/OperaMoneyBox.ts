import {EnumFinance} from "@Enums/EnumFinance";

export class OperaMoneyBox {
    id: number = 0;
    moneyBoxId: number = 0;
    typeTransfer: EnumFinance = EnumFinance.DEPOSIT;
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
