import {EnumFinancePlus} from "@Enums/EnumFinancePlus";
import {OperaMoneyDTO} from "@Dtos/OperaMoneyDTO";

const successOperaMoney: OperaMoneyDTO = {
    moneyId: 1,
    typeTransfer: EnumFinancePlus.PAYMENT,
    balanceValue: 250
};

const failedOperaMoneyTypeTransfer: OperaMoneyDTO = {
    ...successOperaMoney,
    typeTransfer: "TRANSFER_NOW" as EnumFinancePlus
};

const failedOperaMoneyBalanceNegative: OperaMoneyDTO = {
    ...successOperaMoney,
    balanceValue: -0.0001
};

export const operaMoneyDTOS = {
    success: successOperaMoney,
    failedTypeTransfer: failedOperaMoneyTypeTransfer,
    failedBalanceNegative: failedOperaMoneyBalanceNegative
};
