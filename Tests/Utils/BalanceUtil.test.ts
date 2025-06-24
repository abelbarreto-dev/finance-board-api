import {BalanceUtil} from "@Utils/BalanceUtil";
import {BankException} from "@Exceptions/BankException";
import {CardException} from "@Exceptions/CardException";
import {InvoiceException} from "@Exceptions/InvoiceException";
import {MoneyException} from "@Exceptions/MoneyException";
import {OperaException} from "@Exceptions/OperaException";
import {BaseException} from "@Exceptions/BaseException";

describe("BalanceUtil", () => {
    const excepts = {
        base: new BaseException(""),
        bank: new BankException(""),
        card: new CardException(""),
        invoice: new InvoiceException(""),
        money: new MoneyException(""),
        opera: new OperaException("")
    }

    let message: string = "";

    test("Positive Balance", () => {
        const testSuccess = expect(() => {
            BalanceUtil.checkBalance<BaseException>(25, excepts.base);
        });

        testSuccess.not.toThrow(excepts.base);
    });

    test("BaseException Handled", () => {
        message = "negative balance error";
        excepts.base.message = message;

        const testSuccess = expect(() => {
            BalanceUtil.checkBalance<BaseException>(-0.00000001, excepts.base);
        });

        testSuccess.toThrow(excepts.base);
    });

    test("BankException Handled", () => {
        message = "invalid bank balance value found, bank balance value must be positive";
        excepts.bank.message = message;

        const testExcept = expect(() => {
            BalanceUtil.checkBalance<BankException>(-25, excepts.bank);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.bank);
    });

    test("CardException Handled", () => {
        message = "invalid card balance value found, card balance value must be positive";
        excepts.card.message = message;

        const testExcept = expect(() => {
            BalanceUtil.checkBalance<CardException>(-0.5, excepts.card);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.card);
    });

    test("InvoiceException Handled", () => {
        message = "invalid invoice balance value found, invoice balance value must be positive";
        excepts.invoice.message = message;

        const testExcept = expect(() => {
            BalanceUtil.checkBalance<InvoiceException>(-24, excepts.invoice);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.invoice);
    });

    test("MoneyException Handled", () => {
        message = "invalid money box balance value found, money box balance value must be positive";
        excepts.money.message = message;

        const testExcept = expect(() => {
            BalanceUtil.checkBalance<MoneyException>(-0.01, excepts.money);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.money);
    });

    test("OperaException Handled", () => {
        message = "invalid operation balance value found, operation balance value must be positive";
        excepts.opera.message = message;

        const testExcept = expect(() => {
            BalanceUtil.checkBalance<OperaException>(-2.589, excepts.opera);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(excepts.opera);
    });
});
