import {PixKeyUtil} from "@Utils/PixKeyUtil";
import {pixKeyDTOS} from "@MocksDtos/PixKeyDTO.mock";
import {PixKeyException} from "@Exceptions/PixKeyException";

describe("PixKeyUtil", () => {
    let message: string = "";

    test("Pix Key CPF Success", () => {
        const testSuccess = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.successCPF);
        });

        testSuccess.not.toThrow(PixKeyException);
    });

    test("Pix Key CNPJ Success", () => {
        const testSuccess = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.successCNPJ);
        });

        testSuccess.not.toThrow(PixKeyException);
    });

    test("Pix Key Email Success", () => {
        const testSuccess = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.successEMAIL);
        });

        testSuccess.not.toThrow(PixKeyException);
    });

    test("Pix Key Phone Success", () => {
        const testSuccess = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.successPHONE);
        });

        testSuccess.not.toThrow(PixKeyException);
    });

    test("Pix Key Email Random", () => {
        const testSuccess = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.successRANDOM);
        });

        testSuccess.not.toThrow(PixKeyException);
    });

    test("Pix Key Type Error - PixKeyException Handled", () => {
        message = "invalid pix key type found";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorType);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key Name Description Error - PixKeyException Handled", () => {
        message = "invalid name pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorName);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key CPF Error - PixKeyException Handled", () => {
        message = "invalid cpf pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorCPF);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key CNPJ Error - PixKeyException Handled", () => {
        message = "invalid cnpj pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorCNPJ);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key Email Error - PixKeyException Handled", () => {
        message = "invalid email pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorEMAIL);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key Phone Error - PixKeyException Handled", () => {
        message = "invalid mobile phone number pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorPHONE);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });

    test("Pix Key Random Error - PixKeyException Handled", () => {
        message = "invalid random pix key characters or length";

        const testExcept = expect(() => {
            PixKeyUtil.checkPixKey(pixKeyDTOS.errorRANDOM);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(PixKeyException);
    });
});
