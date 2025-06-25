import {InvoiceException} from "@Exceptions/InvoiceException";
import {InvoiceUtil} from "@Utils/InvoiceUtil";
import {invoiceDTOS} from "@MocksDtos/InvoiceDTO.mock";

describe("InvoiceUtil", () => {
    let message: string = "";

    test("Invoice Util Success With Description", () => {
        const testSuccess = expect(() => {
            InvoiceUtil.checkInvoice(invoiceDTOS.success);
        });

        testSuccess.not.toThrow(InvoiceException);
    });

    test("Invoice Util Success Without Description", () => {
        const testSuccess = expect(() => {
            InvoiceUtil.checkInvoice(invoiceDTOS.successNotDescription);
        });

        testSuccess.not.toThrow(InvoiceException);
    });

    test("Invoice Util Description Error - Length - InvoiceException Handled", () => {
        message = "invalid characters found in invoice description or length";

        const testExcept = expect(() => {
            InvoiceUtil.checkInvoice(invoiceDTOS.errorDescription);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(InvoiceException);
    });

    test("Invoice Util Description Error - Characters - InvoiceException Handled", () => {
        message = "invalid characters found in invoice description or length";
        const description = {
            ...invoiceDTOS.errorDescription,
            description: "#main description failed test"
        };

        const testExcept = expect(() => {
            InvoiceUtil.checkInvoice(description);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(InvoiceException);
    });

    test("Invoice Util Quantity Error - InvoiceException Handled", () => {
        message = "quantity value must be 1 or greater";

        const testExcept = expect(() => {
            InvoiceUtil.checkInvoice(invoiceDTOS.errorQuantity);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(InvoiceException);
    });

    test("Invoice Util Quantity and Paid Error - InvoiceException Handled", () => {
        message = "quantity value must be greater than or equal to paid quantity";

        const testExcept = expect(() => {
            InvoiceUtil.checkInvoice(invoiceDTOS.errorPaidQuantity);
        });

        testExcept.toThrow(message);
        testExcept.toThrow(InvoiceException);
    });
});
