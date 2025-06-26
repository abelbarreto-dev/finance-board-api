import {MoneyBoxDTO} from "@Dtos/MoneyBoxDTO";

const successMoneyBox: MoneyBoxDTO = {
    moneyId: 1,
    description: "this is the money box example",
    balanceValue: 2500
};

const successMoneyBoxObjective: MoneyBoxDTO = {
    ...successMoneyBox,
    objective: 3500
};

const failedMoneyBoxBalanceNegative: MoneyBoxDTO = {
    ...successMoneyBox,
    balanceValue: -0.0001
};

const failedMoneyBoxObjectiveNegative: MoneyBoxDTO = {
    ...successMoneyBoxObjective,
    objective: -0.0001
};

const failedMoneyBoxDescriptionCharacter: MoneyBoxDTO = {
    ...successMoneyBox,
    description: "_" + "ts_".repeat(25)
};

const failedMoneyBoxDescriptionLength: MoneyBoxDTO = {
    ...successMoneyBox,
    description: "typescript_" + "ts_".repeat(82)
};

const failedMoneyBoxDescriptionLengthMin: MoneyBoxDTO = {
    ...successMoneyBox,
    description: "ts"
};

export const moneyBoxDTOS = {
    success: successMoneyBox,
    successObjective: successMoneyBoxObjective,
    failedBalanceNegative: failedMoneyBoxBalanceNegative,
    failedObjectiveNegative: failedMoneyBoxObjectiveNegative,
    failedDescriptionCharacter: failedMoneyBoxDescriptionCharacter,
    failedDescriptionLength: failedMoneyBoxDescriptionLength,
    failedDescriptionLengthMin: failedMoneyBoxDescriptionLengthMin,
};
