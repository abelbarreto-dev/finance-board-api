import {BankException} from "@Exceptions/BankException";
import {BankUtil} from "@Utils/BankUtil";
import {bankDTOS} from "@MocksDtos/BankDTO.mock";
import {bankBoxDTOS} from "@MocksDtos/BankBoxDTO.mock";

describe("BankUtil -> BankDTO", () => {
    test("Bank Util Success", () => {
        const testSuccess = expect(() => {
            BankUtil.checkBank(bankDTOS.success);
        });

        testSuccess.not.toThrow(BankException);
    });

    test("Bank Util Success Account Number Five Digits Length", () => {
        const testSuccess = expect(() => {
            BankUtil.checkBank(bankDTOS.successNumberAccountFive);
        });

        testSuccess.not.toThrow(BankException);
    });

    test("Bank Util Success Agency Three Digits Length", () => {
        const testSuccess = expect(() => {
            BankUtil.checkBank(bankDTOS.successAgencyNumberThree);
        });

        testSuccess.not.toThrow(BankException);
    });

    test("Bank Util Error - Bank Name - BankException Handled", () => {
        const message = "invalid bank name found";

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedName);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Account Type - BankException Handled", () => {
        const message = "invalid value found to type account";

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedAccountType);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Agency Digits - BankException Handled", () => {
        const message = (
            "invalid bank agency number length found, bank agency number length must be between 3 and 5"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedAgencyNumberDigits);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Agency Length Greater Than 5 - BankException Handled", () => {
        const message = (
            "invalid bank agency number length found, bank agency number length must be between 3 and 5"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedAgencyNumberLengthMoreThanFive);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Agency Length Smaller Than 3 - BankException Handled", () => {
        const message = (
            "invalid bank agency number length found, bank agency number length must be between 3 and 5"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedAgencyNumberLengthSmallThanThree);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Account Digits - BankException Handled", () => {
        const message = (
            "invalid bank account number length found, bank account number length must be between 5 and 12"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedNumberAccountDigits);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Account Length Greater Than 12 - BankException Handled", () => {
        const message = (
            "invalid bank account number length found, bank account number length must be between 5 and 12"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedNumberAccountLengthMoreThanTwelve);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Bank Account Length Smaller Than 5 - BankException Handled", () => {
        const message = (
            "invalid bank account number length found, bank account number length must be between 5 and 12"
        );

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedNumberAccountLengthSmallThanFive);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Balance Negative - BankException Handled", () => {
        const message = "invalid bank balance value found, bank balance value must be positive";

        const testExcept = expect(() => {
            BankUtil.checkBank(bankDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });
});

describe("BankUtil -> BankBoxDTO", () => {
    test("Bank Util Success", () => {
        const testSuccess = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.success);
        });

        testSuccess.not.toThrow(BankException);
    });

    test("Bank Util Success - Objective Positive", () => {
        const testSuccess = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.successObjective);
        });

        testSuccess.not.toThrow(BankException);
    });
    
    test("Bank Util Error - Balance Negative - BankException Handled", () => {
        const message = "invalid bank box balance value found, bank box balance value must be positive";

        const testExcept = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.failedBalanceNegative)
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Objective Negative - BankException Handled", () => {
        const message = "invalid bank box objective value found, bank box objective value must be positive";

        const testExcept = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.failedObjectiveNegative)
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Description Characters - BankException Handled", () => {
        const message = "invalid characters found in bank box description";

        const testExcept = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.failedDescriptionCharacter)
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Description Length Too Long - BankException Handled", () => {
        const message = "invalid characters found in bank box description";

        const testExcept = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.failedDescriptionLength)
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });

    test("Bank Util Error - Description Length Small Than 3 - BankException Handled", () => {
        const message = "invalid characters found in bank box description";

        const testExcept = expect(() => {
            BankUtil.checkBankBox(bankBoxDTOS.failedDescriptionLengthMin)
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BankException);
    });
});
