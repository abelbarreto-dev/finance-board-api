import {BankBoxDTO} from "@Dtos/BankBoxDTO";

const successBankBoxDTO: BankBoxDTO = {
    bankId: 1,
    description: "this is the bank box example",
    balanceValue: 2500
};

const successBankBoxDTOWithObjective: BankBoxDTO = {
    ...successBankBoxDTO,
    objective: 2500
};

const failedBankBoxDTOBalanceNegative: BankBoxDTO = {
    ...successBankBoxDTO,
    balanceValue: -0.0001
};

const failedBankBoxDTOObjectiveNegative: BankBoxDTO = {
    ...successBankBoxDTOWithObjective,
    objective: -0.0001
};

const failedBankBoxDTODescriptionCharacter: BankBoxDTO = {
    ...successBankBoxDTO,
    description: "_" + "ts_".repeat(25)
};

const failedBankBoxDTODescriptionLength: BankBoxDTO = {
    ...successBankBoxDTO,
    description: "typescript_" + "ts_".repeat(82)
};

const failedBankBoxDTODescriptionLengthMin: BankBoxDTO = {
    ...successBankBoxDTO,
    description: "ts"
};

export const bankBoxDTOS = {
    success: successBankBoxDTO,
    successObjective: successBankBoxDTOWithObjective,
    failedBalanceNegative: failedBankBoxDTOBalanceNegative,
    failedObjectiveNegative: failedBankBoxDTOObjectiveNegative,
    failedDescriptionCharacter: failedBankBoxDTODescriptionCharacter,
    failedDescriptionLength: failedBankBoxDTODescriptionLength,
    failedDescriptionLengthMin: failedBankBoxDTODescriptionLengthMin,
};
