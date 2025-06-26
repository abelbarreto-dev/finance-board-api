import {MoneyException} from "@Exceptions/MoneyException";
import {MoneyUtil} from "@Utils/MoneyUtil";
import {moneyDTOS} from "@MocksDtos/MoneyDTO.mock";
import {moneyBoxDTOS} from "@MocksDtos/MoneyBoxDTO.mock";

describe("Money Util -> MoneyDTO", () => {
    const message = "invalid money balance value found, money balance value must be positive";

    test("Money Util -> MoneyDTO Success", () => {
        const testSuccess = expect(() => {
            MoneyUtil.checkMoney(moneyDTOS.success);
        });

        testSuccess.not.toThrow(MoneyException);
        testSuccess.not.toThrow(message);
    });

    test("Money Util -> MoneyDTO Error - MoneyException Handled", () => {
        const testExcept = expect(() => {
            MoneyUtil.checkMoney(moneyDTOS.failed);
        });

        testExcept.toThrow(MoneyException);
        testExcept.toThrow(message);
    });
});

describe("Money Util -> MoneyBoxDTO", () => {
    test("Money Util -> MoneyBoxDTO Success With Objective", () => {
        const message = "invalid characters or length found in money box description";
        const except = new MoneyException(message);

        const testSuccess = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.successObjective);
        });

        testSuccess.not.toThrow(except);
        testSuccess.not.toThrow(message);
    });

    test("Money Util -> MoneyBoxDTO Success Without Objective", () => {
        const message = "invalid characters or length found in money box description";
        const except = new MoneyException(message);

        const testSuccess = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.success);
        });

        testSuccess.not.toThrow(except);
        testSuccess.not.toThrow(message);
    });

    test("Money Util -> MoneyBoxDTO -> Failed Balance Negative - Money Exception Handled", () => {
        const message = "invalid money box balance value found, money box balance value must be positive";
        const except = new MoneyException(message);

        const testExcept = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Money Util -> MoneyBoxDTO -> Failed Objective Negative - Money Exception Handled", () => {
        const message = "invalid money box objective value found, money box objective value must be positive";
        const except = new MoneyException(message);

        const testExcept = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.failedObjectiveNegative);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Money Util -> MoneyBoxDTO -> Failed Description Chars - Money Exception Handled", () => {
        const message = "invalid characters or length found in money box description";
        const except = new MoneyException(message);

        const testExcept = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.failedDescriptionCharacter);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Money Util -> MoneyBoxDTO -> Failed Description Length - Money Exception Handled", () => {
        const message = "invalid characters or length found in money box description";
        const except = new MoneyException(message);

        const testExcept = expect(() => {
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.failedDescriptionLength);
            MoneyUtil.checkMoneyBox(moneyBoxDTOS.failedDescriptionLengthMin);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });
});
