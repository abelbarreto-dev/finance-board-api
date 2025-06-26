import {OperaException} from "@Exceptions/OperaException";
import {OperaInvoiceUtil} from "@Utils/OperaInvoiceUtil";
import {operaInvoiceDTOS} from "@MocksDtos/OperaInvoiceDTO.mock";

describe("OperaInvoiceUtil -> OperaInvoice DTO", () => {
    const message = "invalid opera invoice balance value found, opera invoice balance value must be positive";

    test("OperaInvoiceUtil -> OperaInvoice DTO Success", () => {
        const testSuccess = expect(() => {
            OperaInvoiceUtil.checkOperaInvoice(operaInvoiceDTOS.success);
        });

        testSuccess.not.toThrow(OperaException);
        testSuccess.not.toThrow(message);
    });

    test("OperaInvoiceUtil -> OperaInvoice DTO Error - OperaException Handled", () => {
        const testExcept = expect(() => {
            OperaInvoiceUtil.checkOperaInvoice(operaInvoiceDTOS.failed);
        });

        testExcept.toThrow(OperaException);
        testExcept.toThrow(message);
    });
});
