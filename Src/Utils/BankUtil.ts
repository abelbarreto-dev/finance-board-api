import {BankException} from "@Exceptions/BankException";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";
import {BankDTO} from "@Dtos/BankDTO";
import {EnumBanks} from "@Enums/EnumBanks";
import {BalanceUtil} from "@Utils/BalanceUtil";

export class BankUtil {
    private static except: BankException = new BankException("");

    private static checkDescription(description: string): void {
        const regDescription = (
            /^[A-Z][a-zA-Z- .]{1,253}[a-zA-Z.]$/
        );

        this.except.message = "invalid characters found in bank box description";

        if (description.match(regDescription) === null) throw this.except;
    }

    private static checkAccountNumber(accountNumber: string): void {
        const regAccountNumber = (
            /^[0-9]{5,12}$/
        );

        this.except.message = (
            "invalid bank account number length found, bank account number length must be between 5 and 12"
        );

        if (accountNumber.match(regAccountNumber) === null) throw this.except
    }

    private static checkAgencyNumber(agencyNumber: string): void {
        const regAgencyNumber = (
            /^[0-9]{3,5}$/
        );

        this.except.message = (
            "invalid bank agency number length found, bank agency number length must be between 3 and 5"
        );

        if (agencyNumber.match(regAgencyNumber) === null) throw this.except;
    }

    private static checkBankName(bankName: string): void {
        const enumBanks: {[index: string]: string} = {...EnumBanks};

        this.except.message = "invalid bank name found";

        if (!Object.keys(enumBanks).includes(bankName)) throw this.except;
    }

    public static checkBank(bank: BankDTO): void {
        this.checkBankName(bank.name);
        this.checkAccountNumber(bank.numbAccount);
        this.checkAgencyNumber(bank.numbAgency);

        this.except.message = "invalid bank balance value found, bank balance value must be positive";

        BalanceUtil.checkBalance<BankException>(
            bank.balanceValue, this.except
        )
    }

    public static checkBankBox(bankBox: BankBoxDTO): void {
        const objective: any = bankBox.objective;

        this.except.message = "invalid bank box objective value found, bank box objective value must be positive";
        if (![undefined, null].includes(objective))
            BalanceUtil.checkBalance<BankException>(bankBox.objective as number, this.except);

        this.except.message = "invalid bank box balance value found, bank box balance value must be positive";
        BalanceUtil.checkBalance<BankException>(bankBox.balanceValue, this.except);

        this.checkDescription(bankBox.description);
    }
}
