import {BaseException} from "@Exceptions/BaseException";
import {EnumUtil} from "@Utils/EnumUtil";
import {EnumCard} from "@Enums/EnumCard";
import {EnumBankAccType} from "@Enums/EnumBankAccType";
import {EnumBanks} from "@Enums/EnumBanks";
import {EnumPix} from "@Enums/EnumPix";
import {OperaException} from "@Exceptions/OperaException";
import {PixKeyException} from "@Exceptions/PixKeyException";
import {CardException} from "@Exceptions/CardException";
import {BankException} from "@Exceptions/BankException";

describe("EnumUtil", () => {
    test("Positive Enum Found", () => {
        const message = "try error found in enum";
        const except = new BaseException(message);

        const testSuccess = expect(() => {
            EnumUtil.checkEnumKey<BaseException>("VIRTUAL", EnumCard, except);
            EnumUtil.checkEnumKey<BaseException>("CHECKING", EnumBankAccType, except);
            EnumUtil.checkEnumKey<BaseException>("EMAIL", EnumPix, except);
            EnumUtil.checkEnumKey<BaseException>("JP_MORGAN", EnumBanks, except);
        });

        testSuccess.not.toThrow(except);
        testSuccess.not.toThrow(message);
    });

    test("BaseException Handled", () => {
        const message = "invalid card type found";
        const except = new BaseException(message);

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<BaseException>("PAYMENT", EnumCard, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("BankException Handled", () => {
        const message = "invalid bank type found";
        const except = new BankException(message);

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<BankException>("VIRTUAL", EnumBankAccType, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("CardException Handled", () => {
        const message = "invalid card type found";
        const except = new CardException(message);

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<CardException>("MASTERCARD", EnumCard, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("OperaException Handled", () => {
        const message = "invalid opera type found";
        const except = new OperaException(message);

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<OperaException>("VIRTUAL", EnumBanks, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    });

    test("PixKeyException Handled", () => {
        const message = "invalid pix key type found";
        const except = new PixKeyException(message);

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<PixKeyException>("CHECKING", EnumPix, except);
        });

        testExcept.toThrow(except);
        testExcept.toThrow(message);
    })
});
