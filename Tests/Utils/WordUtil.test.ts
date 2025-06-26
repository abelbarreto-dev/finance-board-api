import {BaseException} from "@Exceptions/BaseException";
import {WordUtil} from "@Utils/WordUtil";

describe("WordUtil", () => {
    test("Word Util First Name Success", () => {
        const message = "try error found at word";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            WordUtil.checkFirstName<BaseException>("Paula", except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Word Util Last Name Success", () => {
        const message = "try error found at word";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            WordUtil.checkFirstName<BaseException>("Rodriguez", except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Word Util Description Success", () => {
        const message = "invalid characters found in description or length";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            WordUtil.checkDescription<BaseException>("the yellow card on the road", 64, except);
        });

        testSuccess.not.toThrow(BaseException);
        testSuccess.not.toThrow(message);
    });

    test("Word Util First Name Error - BaseException Handled", () => {
        const message = "invalid characters found in first name or length";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkFirstName<BaseException>("Paula123", except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Word Util Last Name Error - BaseException Handled", () => {
        const message = "invalid characters found in last name or length";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkFirstName<BaseException>("Rodriguez123", except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Word Util Description Failed - space at start - BaseException Handled", () => {
        const message = "space at start of description not allowed";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkDescription<BaseException>(" the yellow card on the road", 64, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Word Util Description Length Failed - BaseException Handled", () => {
        const message = "invalid characters found in description or length";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkDescription<BaseException>("the yellow card on the road", 20, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Word Util Invalid First Name - BaseException Handled", () => {
        const message = "invalid characters found in first name or length";
        const except =  new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkFirstName<BaseException>("the yellow card on the road", except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("Word Util Invalid Last Name - BaseException Handled", () => {
        const message = "invalid characters found in last name or length";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            WordUtil.checkFirstName<BaseException>("the yellow card on the road", except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    })
});
