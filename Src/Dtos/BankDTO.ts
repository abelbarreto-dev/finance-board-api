import {EnumBanks} from "@Enums/EnumBanks";
import {EnumBankAccType} from "@Enums/EnumBankAccType";

export interface BankDTO {
    userId: number;
    accountType: EnumBankAccType;
    name: EnumBanks;
    numbAccount: string;
    numbAgency: string;
    balanceValue: number;
}
