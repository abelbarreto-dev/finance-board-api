import {BalanceUtil} from "@Utils/BalanceUtil";
import {BaseException} from "@Exceptions/BaseException";

describe("BalanceUtil", () => {
    test("Positive Balance", () => {
        const message = "try error found in balance";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            BalanceUtil.checkBalance<BaseException>(25, except);
        });

        testSuccess.not.toThrow(except);
        testSuccess.not.toThrow(message);
    });

    test("Balance Util Success - Balance Zero", () => {
        const message = "try error found in balance equals to zero";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            BalanceUtil.checkBalance<BaseException>(0, except);
        });

        testSuccess.not.toThrow(except);
        testSuccess.not.toThrow(message);
    });

    test("Balance Util Error - Balance Negative - BaseException Handled", () => {
        const message = "negative balance error";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            BalanceUtil.checkBalance<BaseException>(-0.00000001, except);
        });

        testSuccess.toThrow(except);
        testSuccess.toThrow(message);
    });
});
