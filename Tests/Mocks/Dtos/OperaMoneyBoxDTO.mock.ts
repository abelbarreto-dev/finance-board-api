import {EnumFinance} from "@Enums/EnumFinance";
import {OperaMoneyBoxDTO} from "@Dtos/OperaMoneyBoxDTO";

const successOperaMoneyBox: OperaMoneyBoxDTO = {
    moneyBoxId: 1,
    typeTransfer: EnumFinance.DEPOSIT,
    balanceValue: 350
};

const failedOperaMoneyBoxTypeTransfer: OperaMoneyBoxDTO = {
    ...successOperaMoneyBox,
    typeTransfer: "TRANSFER_NOW" as EnumFinance
};

const failedOperaMoneyBoxBalanceNegative: OperaMoneyBoxDTO = {
    ...successOperaMoneyBox,
    balanceValue: -0.0001
};

export const operaMoneyBoxDTOS = {
    success: successOperaMoneyBox,
    failedTypeTransfer: failedOperaMoneyBoxTypeTransfer,
    failedBalanceNegative: failedOperaMoneyBoxBalanceNegative
};
