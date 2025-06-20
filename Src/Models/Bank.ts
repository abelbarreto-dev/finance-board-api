import {EnumBanks} from "@Enums/EnumBanks";

export class Bank {
    id: number = 0;
    name: EnumBanks = EnumBanks.bcodobrasil;
    userId: number = 0;
    numbAccount: string = "";
    numbAgency: string = "";
    balanceValue: number = 0;
    createAt?: Date;
    updateAt?: Date;
}
