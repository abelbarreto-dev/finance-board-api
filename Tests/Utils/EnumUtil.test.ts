import {PixKeyException} from "@Exceptions/PixKeyException";
import {OperaException} from "@Exceptions/OperaException";
import {BaseException} from "@Exceptions/BaseException";
import {BankException} from "@Exceptions/BankException";
import {CardException} from "@Exceptions/CardException";
import {EnumUtil} from "@Utils/EnumUtil";
import {EnumCard} from "@Enums/EnumCard";
import {EnumBankAccType} from "@Enums/EnumBankAccType";
import {EnumBanks} from "@Enums/EnumBanks";
import {EnumPix} from "@Enums/EnumPix";

describe("EnumUtil", () => {
    const excepts = {
        base: new BaseException(""),
        bank: new BankException(""),
        card: new CardException(""),
        opera: new OperaException(""),
        pix: new PixKeyException("")
    };

    let message: string = "";

    test("Positive Enum", () => {
        const testSuccess = expect(() => {
            EnumUtil.checkEnumKey<BaseException>("VIRTUAL", EnumCard, excepts.base);
        });

        testSuccess.not.toThrow(excepts.base);
    });

    test("BaseException Handled", () => {
        message = "invalid card type found";
        excepts.base.message = message;

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<BaseException>("PAYMENT", EnumCard, excepts.base);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.base);
    });

    test("BankException Handled", () => {
        message = "invalid bank type found";
        excepts.bank.message = message;

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<BankException>("VIRTUAL", EnumBankAccType, excepts.bank);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.bank);
    });

    test("CardException Handled", () => {
        message = "invalid card type found";
        excepts.card.message = message;

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<CardException>("MASTERCARD", EnumCard, excepts.card);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.card);
    });

    test("OperaException Handled", () => {
        message = "invalid opera type found";
        excepts.opera.message = message;

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<OperaException>("VIRTUAL", EnumBanks, excepts.opera);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.opera);
    });

    test("PixKeyException Handled", () => {
        message = "invalid pix key type found";
        excepts.pix.message = message;

        const testExcept = expect(() => {
            EnumUtil.checkEnumKey<PixKeyException>("CHECKING", EnumPix, excepts.pix);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.pix);
    })
});
