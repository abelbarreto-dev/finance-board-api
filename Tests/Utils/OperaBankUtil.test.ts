import {OperaBankUtil} from "@Utils/OperaBankUtil";
import {OperaException} from "@Exceptions/OperaException";
import {operaBankDTOS} from "@MocksDtos/OperaBankDTO.mock";
import {operaBankBoxDTOS} from "@MocksDtos/OperaBankBoxDTO.mock";

describe("OperaBankUtil -> OperaBankDTO", () => {
    test("OperaBankDTO Success", () => {
        const testSuccess = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.success);
        });

        testSuccess.not.toThrow(OperaException);
    });

    test("OperaBankDTO Error - Type Transfer - OperaException Handled", () => {
        const message = (
            `invalid ${operaBankDTOS.failedTypeTransfer.typeTransfer} value found at type transfer`
        );

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedTypeTransfer);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - State - OperaException Handled", () => {
        const message = (
            `invalid ${operaBankDTOS.failedState.state} value found at operation state`
        );

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedState);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Bank Operation - OperaException Handled", () => {
        const message = (
            `invalid ${operaBankDTOS.failedBankOperation.bankOperation} value found at bank operation`
        );

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedBankOperation);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Description Characters - OperaException Handled", () => {
        const message = "invalid characters found in bank operation description";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedDescriptionCharacter);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Description Length Max - OperaException Handled", () => {
        const message = "invalid characters found in bank operation description";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedDescriptionLengthMax);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Description Length Min - OperaException Handled", () => {
        const message = "invalid characters found in bank operation description";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedDescriptionLengthMin);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Sender Name Characters - OperaException Handled", () => {
        const message = "invalid characters found in bank operation sender name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedSenderNameCharacter);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Sender Name Not Alpha Numeric - OperaException Handled", () => {
        const message = "invalid characters found in bank operation sender name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedSenderNameNotAlphaNum);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Sender Name Length Max - OperaException Handled", () => {
        const message = "invalid characters found in bank operation sender name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedSenderNameLengthMax);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Sender Name Length Min - OperaException Handled", () => {
        const message = "invalid characters found in bank operation sender name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedSenderNameLengthMin);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Receiver Name Characters - OperaException Handled", () => {
        const message = "invalid characters found in bank operation receiver name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedReceiverNameCharacter);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Receiver Name Alpha Numeric - OperaException Handled", () => {
        const message = "invalid characters found in bank operation receiver name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedReceiverNameNotAlphaNum);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Receiver Name Length Max - OperaException Handled", () => {
        const message = "invalid characters found in bank operation receiver name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedReceiverNameLengthMax);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Receiver Name Length Min - OperaException Handled", () => {
        const message = "invalid characters found in bank operation receiver name";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedReceiverNameLengthMin);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankDTO Error - Balance Negative - OperaException Handled", () => {
        const message = "invalid bank operation balance value found, bank operation balance value must be positive";

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBank(operaBankDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });
});

describe("OperaBankUtil -> OperaBankBoxDTO", () => {
    test("OperaBankBoxDTO Success", () => {
        const testSuccess = expect(() => {
            OperaBankUtil.checkOperaBankBox(operaBankBoxDTOS.success);
        });

        testSuccess.not.toThrow(OperaException);
    });

    test("OperaBankBoxDTO Error - Type Transfer - OperaException Handled", () => {
        const message = (
            `invalid ${operaBankBoxDTOS.failedTypeTransfer.typeTransfer} value found at type transfer`
        );

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBankBox(operaBankBoxDTOS.failedTypeTransfer);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });

    test("OperaBankBoxDTO Error - Balance Negative - OperaException Handled", () => {
        const message = (
            "invalid bank box operation balance value found, bank operation balance value must be positive"
        );

        const testExcept = expect(() => {
            OperaBankUtil.checkOperaBankBox(operaBankBoxDTOS.failedBalanceNegative);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });
});
