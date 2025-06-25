import {BaseException} from "@Exceptions/BaseException";
import {BankException} from "@Exceptions/BankException";
import {CardException} from "@Exceptions/CardException";
import {InvoiceException} from "@Exceptions/InvoiceException";
import {MoneyException} from "@Exceptions/MoneyException";
import {OperaException} from "@Exceptions/OperaException";
import {PixKeyException} from "@Exceptions/PixKeyException";
import {UserException} from "@Exceptions/UserException";
import {WordUtil} from "@Utils/WordUtil";

describe("WordUtil", () => {
    const excepts = {
        base: new BaseException(""),
        bank: new BankException(""),
        card: new CardException(""),
        invoice: new InvoiceException(""),
        money: new MoneyException(""),
        opera: new OperaException(""),
        pix: new PixKeyException(""),
        user: new UserException("")
    };

    let message: string = "";

    test("Word Util First Name Success", () => {
        const testSuccess = expect(() => {
            WordUtil.checkFirstName<BaseException>("Paula", excepts.base);
        });

        testSuccess.not.toThrow(excepts.base);
    });

    test("Word Util Last Name Success", () => {
        const testSuccess = expect(() => {
            WordUtil.checkFirstName<UserException>("Rodriguez", excepts.user);
        });

        testSuccess.not.toThrow(excepts.user);
    });

    test("Word Util Description Success", () => {
        message = "invalid characters found in description or length";
        excepts.invoice.message = message;

        const testExcept = expect(() => {
            WordUtil.checkDescription<InvoiceException>("the yellow card on the road", 64, excepts.invoice);
        });

        testExcept.not.toThrow(excepts.invoice);
    });

    test("Word Util First Name Error - CardException Handled", () => {
        message = "invalid characters found in first name or length";
        excepts.card.message = message;

        const testExcept = expect(() => {
            WordUtil.checkFirstName<CardException>("Paula123", excepts.card);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.card);
    });

    test("Word Util Last Name Error - BankException Handled", () => {
        message = "invalid characters found in last name or length";
        excepts.bank.message = message;

        const testExcept = expect(() => {
            WordUtil.checkFirstName<BankException>("Rodriguez123", excepts.bank);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.bank);
    });

    test("Word Util Description Failed - space at start - OperaException Handled", () => {
        message = "space at start of description not allowed";
        excepts.opera.message = message;

        const testExcept = expect(() => {
            WordUtil.checkDescription<OperaException>(" the yellow card on the road", 64, excepts.opera);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.opera);
    });

    test("Word Util Description Length Failed - PixKeyException Handled", () => {
        message = "invalid characters found in description or length";
        excepts.pix.message = message;

        const testExcept = expect(() => {
            WordUtil.checkDescription<PixKeyException>("the yellow card on the road", 20, excepts.pix);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.pix);
    });

    test("Word Util Invalid First Name - UserException Handled", () => {
        message = "invalid characters found in first name or length";
        excepts.user.message = message;

        const testExcept = expect(() => {
            WordUtil.checkFirstName<UserException>("the yellow card on the road", excepts.user);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.user);
    });

    test("Word Util Invalid Last Name - MoneyException Handled", () => {
        message = "invalid characters found in last name or length";
        excepts.money.message = message;

        const testExcept = expect(() => {
            WordUtil.checkFirstName<MoneyException>("the yellow card on the road", excepts.money);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.money);
    })
});
