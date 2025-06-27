import { BankDTO } from "@Dtos/BankDTO";
import {EnumBankAccType} from "@Enums/EnumBankAccType";
import {EnumBanks} from "@Enums/EnumBanks";

const successBankDTO: BankDTO = {
    userId: 1,
    accountType: EnumBankAccType.CHECKING,
    name: EnumBanks.JP_MORGAN,
    numbAccount: "859563474172",
    numbAgency: "00019",
    balanceValue: 750
};

const successBankDTOAgencyNumberThree = {
    ...successBankDTO,
    numbAgency: "123"
};

const successBankDTONumberAccountFive = {
    ...successBankDTO,
    numbAccount: "85956"
};

const failedBankDTOName: BankDTO = {
    ...successBankDTO,
    name: "BankName" as EnumBanks
};

const failedBankDTOAccountType: BankDTO = {
    ...successBankDTO,
    accountType: "INTER_JPMORGAN" as EnumBankAccType
};

const failedBankDTOAgencyNumberDigits: BankDTO = {
    ...successBankDTO,
    numbAgency: "1234P"
};

const failedBankDTOAgencyNumberLengthMoreThanFive: BankDTO = {
    ...successBankDTO,
    numbAgency: "123456"
};

const failedBankDTOAgencyNumberLengthSmallThanThree: BankDTO = {
    ...successBankDTO,
    numbAgency: "12"
};

const failedBankDTONumberAccountDigits = {
    ...successBankDTO,
    numbAccount: "85956347417M"
};

const failedBankDTONumberAccountLengthMoreThanTwelve: BankDTO = {
    ...successBankDTO,
    numbAccount: "8595634741712"
};

const failedBankDTONumberAccountLengthSmallThanFive: BankDTO = {
    ...successBankDTO,
    numbAccount: "8595"
};

const failedBankDTOBalanceNegative: BankDTO = {
    ...successBankDTO,
    balanceValue: -0.0001
};

export const bankDTOS = {
    success: successBankDTO,
    successAgencyNumberThree: successBankDTOAgencyNumberThree,
    successNumberAccountFive: successBankDTONumberAccountFive,
    failedName: failedBankDTOName,
    failedAccountType: failedBankDTOAccountType,
    failedAgencyNumberDigits: failedBankDTOAgencyNumberDigits,
    failedAgencyNumberLengthMoreThanFive: failedBankDTOAgencyNumberLengthMoreThanFive,
    failedAgencyNumberLengthSmallThanThree: failedBankDTOAgencyNumberLengthSmallThanThree,
    failedNumberAccountDigits: failedBankDTONumberAccountDigits,
    failedNumberAccountLengthMoreThanTwelve: failedBankDTONumberAccountLengthMoreThanTwelve,
    failedNumberAccountLengthSmallThanFive: failedBankDTONumberAccountLengthSmallThanFive,
    failedBalanceNegative: failedBankDTOBalanceNegative,
};
