import {MoneyDTO} from "@Dtos/MoneyDTO";

const moneySuccess: MoneyDTO = {
    userId: 1,
    balanceValue: 250
};

const moneyFailed: MoneyDTO = {
    ...moneySuccess,
    balanceValue: -0.0001
};

export const moneyDTOS = {
    success: moneySuccess,
    failed: moneyFailed
};
