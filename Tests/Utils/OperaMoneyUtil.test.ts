import {OperaMoneyUtil} from "@Utils/OperaMoneyUtil";
import {OperaException} from "@Exceptions/OperaException";
import {operaMoneyBoxDTOS} from "@MocksDtos/OperaMoneyBoxDTO.mock";
import {operaMoneyDTOS} from "@MocksDtos/OperaMoneyDTO.mock";

describe("OperaMoneyUtil -> OperaMoneyDTO", () => {
    test("OperaMoneyDTO Success", () => {
        const testSuccess = expect(() => {
            OperaMoneyUtil.checkOperaMoney(operaMoneyDTOS.success);
        });

        testSuccess.not.toThrow(OperaException);
    });

    test("OperaMoneyDTO Error - Type Transfer - OperaException Handled", () => {
        const message = (
            `invalid ${operaMoneyDTOS.failedTypeTransfer.typeTransfer} value found for type transfer`
        );

        const testExcept = expect(() => {
            OperaMoneyUtil.checkOperaMoney(operaMoneyDTOS.failedTypeTransfer);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaMoneyDTO Error - Balance Negative - OperaException Handled", () => {
        const message = "invalid money operation balance value found, money operation balance value must be positive";

        const testExcept = expect(() => {
            OperaMoneyUtil.checkOperaMoney(operaMoneyDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });
});

describe("OperaMoneyUtil -> OperaMoneyBoxDTO", () => {
    test("OperaMoneyBoxDTO Success", () => {
        const testSuccess = expect(() => {
            OperaMoneyUtil.checkOperaMoneyBox(operaMoneyBoxDTOS.success);
        });

        testSuccess.not.toThrow(OperaException);
    });

    test("OperaMoneyBoxDTO Error - Type Transfer - OperaException Handled", () => {
        const message = (
            `invalid ${operaMoneyBoxDTOS.failedTypeTransfer.typeTransfer} value found for type transfer`
        );

        const testExcept = expect(() => {
            OperaMoneyUtil.checkOperaMoneyBox(operaMoneyBoxDTOS.failedTypeTransfer);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaMoneyBoxDTO Error - Balance Negative - OperaException Handled", () => {
        const message = (
            "invalid money box operation balance value found, money box operation balance value must be positive"
        );

        const testExcept = expect(() => {
            OperaMoneyUtil.checkOperaMoneyBox(operaMoneyBoxDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });
});
