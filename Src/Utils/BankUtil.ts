import {BankException} from "@Exceptions/BankException";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";
import {MoneyException} from "@Exceptions/MoneyException";
import {BankDTO} from "@Dtos/BankDTO";
import {EnumBanks} from "@Enums/EnumBanks";

export class BankUtil {
    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        if (description.match(regDescription) === null) throw new BankException(
            "invalid characters found in bank box description"
        );
    }

    private static checkBalance(balance: number): void {
        if (balance < 0) throw new MoneyException(
            "balance value must be positive"
        );
    }

    private static checkAccountNumber(accountNumber: string): void {
        const regAccountNumber = (
            /^[0-9]{5,12}$/
        );

        if (accountNumber.match(regAccountNumber) === null) throw new BankException (
            "invalid characters found in bank account number"
        );
    }

    private static checkAgencyNumber(agencyNumber: string): void {
        const regAgencyNumber = (
            /^[0-9]{3,5}$/
        );

        if (agencyNumber.match(regAgencyNumber) === null) throw new BankException (
            "invalid characters found in bank agency number"
        );
    }

    private static checkBankName(bankName: string): void {
        const enumBanks: {[index: string]: string} = {...EnumBanks};

        if (!Object.keys(enumBanks).includes(bankName)) throw new BankException(
            "invalid bank name found"
        );
    }

    public static checkBank(bank: BankDTO): void {
        this.checkBankName(bank.name);
        this.checkAccountNumber(bank.numbAccount);
        this.checkAgencyNumber(bank.numbAgency);
        this.checkBalance(bank.balanceValue);
    }

    public static checkBankBox(bankBox: BankBoxDTO): void {
        const objective: any = bankBox.objective;

        if (![undefined, null].includes(objective)) this.checkBalance(bankBox.objective as number);
        this.checkDescription(bankBox.description);
        this.checkBalance(bankBox.balanceValue);
    }
}
