import {EmailUtil} from "@Utils/EmailUtil";
import {BaseException} from "@Exceptions/BaseException";
import {emailsMocked} from "../Mocks/General/Email.mock";

describe("EmailUtil", () => {
    test("Email Success Without Optional Part", () => {
        const message = "try error found in email address";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.success, except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Email Success With Optional Part", () => {
        const message = "try error found in email address";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.successExtends, except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Email Error - At '@' Not Found - BaseException Handled", () => {
        const message = "character '@' not found in email address";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorAt, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Domain Chars - BaseException Handled", () => {
        const message = "invalid characters found in domain";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorDomain, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Domain Length - BaseException Handled", () => {
        const message = "domain length must be between 2 and 255 characters";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorDomainLength, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Provider Chars - BaseException Handled", () => {
        const message = "invalid characters found in provider";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorProvider, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Provider Length - BaseException Handled", () => {
        const message = "provider length must be between 1 and 21 characters";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorProviderLength, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Optional Part Chars - BaseException Handled", () => {
        const message = "invalid characters found in optional part of email address";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorOptional, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Optional Part Length - BaseException Handled", () => {
        const message = "optional part length must be between 1 and 3 characters";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorOptionalLength, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Country Code Chars - BaseException Handled", () => {
        const message = "invalid characters found in country code of email address";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorCountryCode, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });

    test("Email Error - Country Code Length - BaseException Handled", () => {
        const message = "country code length must be between 2 and 3 characters";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EmailUtil.checkEmail<BaseException>(emailsMocked.errorCountryCodeLength, except);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(BaseException);
    });
});
