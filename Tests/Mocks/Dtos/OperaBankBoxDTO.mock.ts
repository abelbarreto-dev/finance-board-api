import { OperaBankBoxDTO } from "@Dtos/OperaBankBoxDTO";
import {EnumFinance} from "@Enums/EnumFinance";

const successOperaBankBox: OperaBankBoxDTO = {
    bankBoxId: 1,
    typeTransfer: EnumFinance.WITHDRAW,
    balanceValue: 785
};

const failedOperaBankBoxTypeTransfer: OperaBankBoxDTO = {
    ...successOperaBankBox,
    typeTransfer: "ON_THE_ROAD" as EnumFinance
};

const failedOperaBankBoxBalanceNegative: OperaBankBoxDTO = {
    ...successOperaBankBox,
    balanceValue: -100
};

export const operaBankBoxDTOS = {
    success: successOperaBankBox,
    failedTypeTransfer: failedOperaBankBoxTypeTransfer,
    failedBalanceNegative: failedOperaBankBoxBalanceNegative
};
