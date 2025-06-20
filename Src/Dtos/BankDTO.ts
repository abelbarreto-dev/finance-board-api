import {EnumBanks} from "../Enums/EnumBanks";

export interface BankDTO {
    name: EnumBanks;
    userId: number;
    numbAccount: string;
    numbAgency: string;
    balance: number;
}
