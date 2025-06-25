import {EnumBanks} from "@Enums/EnumBanks";
import {EnumBankAccType} from "@Enums/EnumBankAccType";

export class Bank {
    id: number = 0;
    userId: number = 0;
    accountType: EnumBankAccType = EnumBankAccType.CHECKING;
    name: EnumBanks = EnumBanks.BANCO_DO_BRASIL;
    numbAccount: string = "";
    numbAgency: string = "";
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
