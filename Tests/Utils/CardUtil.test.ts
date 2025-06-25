import {CardException} from "@Exceptions/CardException";
import {CardUtil} from "@Utils/CardUtil";
import {cardDTOS} from "@MocksDtos/CardDTO.mock";

describe("CardUtil", () => {
    let message: string = "";

    test("Card Util Success", () => {
        const testSuccess = expect(() => {
            CardUtil.checkCard(cardDTOS.success);
        });

        testSuccess.not.toThrow(CardException);
    });

    test("Card Util Success Not Reversal", () => {
        const testSuccess = expect(() => {
            CardUtil.checkCard(cardDTOS.successNotReversal);
        });

        testSuccess.not.toThrow(CardException);
    });

    test("Card Util Success Not Balance", () => {
        const testSuccess = expect(() => {
            CardUtil.checkCard(cardDTOS.successNotBalance);
        });

        testSuccess.not.toThrow(CardException);
    });

    test("Card Util Error Flag - CardException Handled", () => {
        message = "invalid card flag found";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorFlag);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });

    test("Card Util Error Type - CardException Handled", () => {
        message = "invalid card type found";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorType);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });

    test("Card Util Error Description - CardException Handled", () => {
        message = "invalid characters found in card description or length";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorDescription);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });

    test("Card Util Error Card Limit - CardException Handled", () => {
        message = "invalid card limit value found, card limit value must be positive";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorLimit);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });

    test("Card Util Error Card Current Limit - CardException Handled", () => {
        message = "invalid card current limit value found, card current limit value must be positive";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorCurrentLimit);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });

    test("Card Util Error Card Balance - CardException Handled", () => {
        message = "invalid card balance value found, card balance value must be positive";

        const testExcept = expect(() => {
            CardUtil.checkCard(cardDTOS.errorBalance);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(CardException);
    });
});
