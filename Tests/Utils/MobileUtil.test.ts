import {MobileUtil} from "@Utils/MobileUtil";
import {BaseException} from "@Exceptions/BaseException";
import {mobilesMocked} from "../Mocks/General/Mobile.mock";

describe("MobileUtil", () => {
    test("Mobile Util Success Test Case", () => {
        const message = "try error found in mobile number";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            MobileUtil.checkMobile<BaseException>(mobilesMocked.success, except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Mobile Util Error - Invalid Character Found - BaseException Handled", () => {
        const message = "invalid characters found in mobile number";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            MobileUtil.checkMobile<BaseException>(mobilesMocked.errorChars, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Mobile Util Error - Exceeds 13 Digits - BaseException Handled", () => {
        const message = "mobile phone number exceeds 13 digits";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            MobileUtil.checkMobile<BaseException>(mobilesMocked.errorLengthMax, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Mobile Util Error - Does Not Reach 13 Digits - BaseException Handled", () => {
        const message = "mobile phone number does not reach 13 digits";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            MobileUtil.checkMobile<BaseException>(mobilesMocked.errorLengthMin, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });
});
