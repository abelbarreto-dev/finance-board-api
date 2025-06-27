import {BankException} from "@Exceptions/BankException";
import {BankBoxDTO} from "@Dtos/BankBoxDTO";
import {BankDTO} from "@Dtos/BankDTO";
import {EnumBanks} from "@Enums/EnumBanks";
import {BalanceUtil} from "@Utils/BalanceUtil";
import {WordUtil} from "@Utils/WordUtil";
import {EnumUtil} from "@Utils/EnumUtil";
import {EnumBankAccType} from "@Enums/EnumBankAccType";

export class BankUtil {
    private static checkEnumTypeAccount(value: string): void {
        const except = new BankException("invalid value found to type account");

        EnumUtil.checkEnumKey<BankException>(value, EnumBankAccType, except);
    }

    private static checkDescription(description: string): void {
        const except = new BankException("invalid characters found in bank box description");

        WordUtil.checkDescription<BankException>(description, 253, except);
    }

    private static checkAccountNumber(accountNumber: string): void {
        const regAccountNumber = (
            /^[0-9]{5,12}$/
        );

        const except = new BankException(
            "invalid bank account number length found, bank account number length must be between 5 and 12"
        );

        if (accountNumber.match(regAccountNumber) === null) throw except
    }

    private static checkAgencyNumber(agencyNumber: string): void {
        const regAgencyNumber = (
            /^[0-9]{3,5}$/
        );

        const except = new BankException(
            "invalid bank agency number length found, bank agency number length must be between 3 and 5"
        );

        if (agencyNumber.match(regAgencyNumber) === null) throw except;
    }

    private static checkBankName(bankName: string): void {
        const except = new BankException("invalid bank name found");

        EnumUtil.checkEnumKey<BankException>(bankName, EnumBanks, except);
    }

    public static checkBank(bank: BankDTO): void {
        this.checkBankName(bank.name);
        this.checkAccountNumber(bank.numbAccount);
        this.checkAgencyNumber(bank.numbAgency);
        this.checkEnumTypeAccount(bank.accountType);

        const except = new BankException(
            "invalid bank balance value found, bank balance value must be positive"
        );

        BalanceUtil.checkBalance<BankException>(
            bank.balanceValue, except
        )
    }

    public static checkBankBox(bankBox: BankBoxDTO): void {
        const objective: any = bankBox.objective;

        const except = new BankException(
            "invalid bank box objective value found, bank box objective value must be positive"
        );

        if (![undefined, null].includes(objective))
            BalanceUtil.checkBalance<BankException>(bankBox.objective as number, except);

        except.message = "invalid bank box balance value found, bank box balance value must be positive";
        BalanceUtil.checkBalance<BankException>(bankBox.balanceValue, except);

        this.checkDescription(bankBox.description);
    }
}
